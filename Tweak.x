#define CHECK_TARGET
#import <PSHeader/PS.h>
#import <CoreFoundation/CoreFoundation.h>
#import <Foundation/Foundation.h>
#import <WebKit/WKWebView.h>
#import <WebKit/WKWebViewConfiguration.h>
#import <WebKit/WKUserContentController.h>
#import <WebKit/WKUserScript.h>
#import <version.h>

static BOOL isIOSVersionOrNewer(NSInteger major, NSInteger minor) {
    NSOperatingSystemVersion version = [[NSProcessInfo processInfo] operatingSystemVersion];
    if (version.majorVersion > major) return YES;
    if (version.majorVersion == major && version.minorVersion >= minor) return YES;
    return NO;
}

static void injectScript(WKWebView *webview, NSString *identifier, NSString *script, WKUserScriptInjectionTime injectionTime) {
    WKUserScript *userScript = [[WKUserScript alloc] initWithSource:script injectionTime:injectionTime forMainFrameOnly:YES];
    [webview.configuration.userContentController addUserScript:userScript];
}

static const void *GHInjectedKey = &GHInjectedKey;

typedef NS_ENUM(NSInteger, GHNumericChunkScope) {
    GHNumericChunkScopeShared = 0,
    GHNumericChunkScopeRepoNonIssues,
    GHNumericChunkScopeIssuesOnly,
    GHNumericChunkScopeLazy,
};

static NSInteger numericChunkIdFromJsFile(NSString *jsFile) {
    NSRegularExpression *regex = [NSRegularExpression regularExpressionWithPattern:@"numeric-(\\d+)\\.min\\.js$"
                                                                           options:0
                                                                             error:nil];
    NSTextCheckingResult *match = [regex firstMatchInString:jsFile
                                                    options:0
                                                      range:NSMakeRange(0, jsFile.length)];
    if (!match || match.numberOfRanges < 2) return NSNotFound;
    return [[jsFile substringWithRange:[match rangeAtIndex:1]] integerValue];
}

static GHNumericChunkScope numericChunkScopeForId(NSInteger chunkId) {
    switch (chunkId) {
        case 39890:
        case 57639:
            return GHNumericChunkScopeRepoNonIssues;
        case 65354:
        case 67133:
        case 88576:
        case 90501:
            return GHNumericChunkScopeIssuesOnly;
        case 2694:
        case 8384:
        case 23784:
            return GHNumericChunkScopeLazy;
        default:
            return GHNumericChunkScopeShared;
    }
}

static NSString *scopeStringForAsset(NSString *assetName, NSInteger numericChunkId) {
    if ([assetName containsString:@"issues-react"] || [assetName containsString:@"issues_react"]) {
        return @"issues";
    }
    if (numericChunkId != NSNotFound) {
        switch (numericChunkScopeForId(numericChunkId)) {
            case GHNumericChunkScopeRepoNonIssues:
                return @"repo";
            case GHNumericChunkScopeIssuesOnly:
                return @"issues";
            case GHNumericChunkScopeLazy:
                return @"all";
            default:
                return @"all";
        }
    }
    return @"all";
}

static NSString *jsEscape(NSString *value) {
    return [[value stringByReplacingOccurrencesOfString:@"\\" withString:@"\\\\"]
        stringByReplacingOccurrencesOfString:@"'" withString:@"\\'"];
}

static NSString *wrapScopedScript(NSString *assetId, NSString *scope, NSString *body) {
    NSMutableString *script = [NSMutableString stringWithFormat:
        @"(function(){"
        "var __ghId='%@';"
        "var __ghScope='%@';"
        "globalThis.__ghLegacyBoot=globalThis.__ghLegacyBoot||{};"
        "function __ghPathOk(){"
        "var p=location.pathname;"
        "if(__ghScope==='issues')return p.indexOf('/issues')!==-1;"
        "if(__ghScope==='repo')return p.indexOf('/issues')===-1;"
        "return true;}"
        "function __ghKey(){return __ghId+':'+location.pathname;}"
        "function __ghCoreKey(){return 'core:'+__ghId;}"
        "function __ghDone(){"
        "if(__ghScope==='all'&&globalThis.__ghLegacyBoot[__ghCoreKey()])return true;"
        "return !!globalThis.__ghLegacyBoot[__ghKey()];}"
        "function __ghMark(){"
        "globalThis.__ghLegacyBoot[__ghKey()]=true;"
        "if(__ghScope==='all')globalThis.__ghLegacyBoot[__ghCoreKey()]=true;}"
        "function __ghRun(){\n",
        jsEscape(assetId),
        jsEscape(scope)];
    [script appendString:body];
    [script appendString:
        @"\n}"
        "function __ghTry(){if(!__ghPathOk()||__ghDone())return;__ghMark();__ghRun();}"
        "__ghTry();"
        "document.addEventListener('turbo:load',__ghTry,false);"
        "window.addEventListener('popstate',__ghTry,false);"
        "})();"];
    return script;
}

static NSString *wrapDeferredNumericChunk(NSInteger chunkId, NSString *body) {
    NSMutableString *script = [NSMutableString stringWithFormat:
        @"(function(){var __ghChunkId=%ld;function __ghRun(){\n", (long)chunkId];
    [script appendString:body];
    [script appendString:
        @"}\n"
        "function __ghHasTag(){return !!document.querySelector('script[src*=\"/assets/'+__ghChunkId+'-\"]');}\n"
        "function __ghArm(){if(__ghHasTag()){__ghRun();return true;}return false;}\n"
        "if(!__ghArm()){\n"
        "var __ghMo=new MutationObserver(function(){if(__ghArm())__ghMo.disconnect();});\n"
        "__ghMo.observe(document.documentElement,{childList:true,subtree:true});\n"
        "document.addEventListener('DOMContentLoaded',function(){__ghArm();},false);\n"
        "document.addEventListener('turbo:load',function(){__ghArm();},false);\n"
        "}\n"
        "})();"];
    return script;
}

static NSString *wrapScopedStyles(NSString *identifier, NSString *scope, NSString *styles) {
    return [NSString stringWithFormat:
        @"(function(){"
        "var __ghScope='%@';"
        "var __ghId='%@';"
        "globalThis.__ghLegacyBoot=globalThis.__ghLegacyBoot||{};"
        "function __ghPathOk(){"
        "var p=location.pathname;"
        "if(__ghScope==='issues')return p.indexOf('/issues')!==-1;"
        "if(__ghScope==='repo')return p.indexOf('/issues')===-1;"
        "return true;}"
        "function __ghKey(){return 'css:'+__ghId+':'+location.pathname;}"
        "function __ghInject(){"
        "if(!__ghPathOk()||globalThis.__ghLegacyBoot[__ghKey()])return;"
        "if(document.getElementById('no-polyfill-%@')!==null)return;"
        "globalThis.__ghLegacyBoot[__ghKey()]=true;"
        "var styleSheet=document.createElement('style');"
        "styleSheet.type='text/css';"
        "styleSheet.innerText=`%@`;"
        "styleSheet.id='no-polyfill-%@';"
        "document.head.appendChild(styleSheet);"
        "}"
        "__ghInject();"
        "document.addEventListener('turbo:load',__ghInject,false);"
        "window.addEventListener('popstate',__ghInject,false);"
        "})();",
        jsEscape(scope),
        jsEscape(identifier),
        identifier,
        styles,
        identifier];
}

static NSInteger injectionPriority(NSString *jsFile) {
    if ([jsFile containsString:@"cdn-guard"]) return 1;
    if ([jsFile containsString:@"request-idle-callback"]) return 2;
    if ([jsFile containsString:@"numeric-85924"]) return 5;
    if ([jsFile containsString:@"environment"]) return 10;
    if ([jsFile containsString:@"release-assets"]) return 11;
    if ([jsFile containsString:@"css-has-pseudo"]) return 12;
    if ([jsFile containsString:@"numeric-64458"]) return 15;
    if ([jsFile containsString:@"react-core"]) return 20;
    if ([jsFile containsString:@"numeric-"]) return 30;
    if ([jsFile containsString:@"issues-react"]) return 40;
    return 25;
}

static NSArray *sortedInjectionJsFiles(NSArray *jsFiles) {
    return [jsFiles sortedArrayUsingComparator:^NSComparisonResult(NSString *a, NSString *b) {
        NSInteger pa = injectionPriority(a);
        NSInteger pb = injectionPriority(b);
        if (pa != pb) {
            return pa < pb ? NSOrderedAscending : NSOrderedDescending;
        }
        return [a compare:b options:NSNumericSearch];
    }];
}

static void inject(WKWebView *webview) {
    if (![webview.URL.host containsString:@"github.com"]) return;
    WKUserContentController *controller = webview.configuration.userContentController;
    if (!controller) {
        controller = [[WKUserContentController alloc] init];
        webview.configuration.userContentController = controller;
    } else if (objc_getAssociatedObject(controller, GHInjectedKey)) return;
    objc_setAssociatedObject(controller, GHInjectedKey, @YES, OBJC_ASSOCIATION_RETAIN_NONATOMIC);

    NSString *assetsFolder = PS_ROOT_PATH_NS(@"/Library/Application Support/GitHubWebLegacyCompat");
    NSArray *assets = [[NSFileManager defaultManager] contentsOfDirectoryAtPath:assetsFolder error:nil];

    NSPredicate *cssPredicate = [NSPredicate predicateWithFormat:@"self ENDSWITH '.css'"];
    NSArray *cssFiles = [assets filteredArrayUsingPredicate:cssPredicate];
    for (NSString *cssFile in cssFiles) {
        NSString *filePath = [assetsFolder stringByAppendingPathComponent:cssFile];
        NSString *fileName = [cssFile stringByDeletingPathExtension];
        NSString *fileNameIosVersionString = [[fileName componentsSeparatedByString:@"-"] firstObject];
        float fileNameIosVersion = [fileNameIosVersionString floatValue];
        if (fileNameIosVersion == 0.0) {
            HBLogDebug(@"GitHubWebLegacyCompat CSS %@ has no iOS version, skipping", cssFile);
            continue;
        }
        int majorVersion = (int)fileNameIosVersion;
        int minorVersion = (int)((fileNameIosVersion - majorVersion) * 10);
        if (isIOSVersionOrNewer(majorVersion, minorVersion)) {
            HBLogDebug(@"GitHubWebLegacyCompat CSS %@ is not compatible with this iOS version, skipping", cssFile);
            continue;
        }
        NSString *actualFileName = [[fileName stringByReplacingOccurrencesOfString:fileNameIosVersionString withString:@""] substringFromIndex:1];
        NSString *cssContent = [NSString stringWithContentsOfFile:filePath encoding:NSUTF8StringEncoding error:nil];
        if (cssContent) {
            NSString *cssIdentifier = [actualFileName stringByReplacingOccurrencesOfString:@"-" withString:@"_"];
            NSString *scope = scopeStringForAsset(actualFileName, NSNotFound);
            injectScript(webview, cssIdentifier, wrapScopedStyles(cssIdentifier, scope, cssContent), WKUserScriptInjectionTimeAtDocumentEnd);
        } else {
            HBLogDebug(@"GitHubWebLegacyCompat failed to read CSS file %@", cssFile);
        }
    }

    NSPredicate *jsPredicate = [NSPredicate predicateWithFormat:@"self ENDSWITH '.js'"];
    NSArray *jsFiles = sortedInjectionJsFiles([assets filteredArrayUsingPredicate:jsPredicate]);
    for (NSString *jsFile in jsFiles) {
        NSString *filePath = [assetsFolder stringByAppendingPathComponent:jsFile];
        NSString *fileName = [jsFile stringByDeletingPathExtension];
        NSString *fileNameIosVersionString = [[fileName componentsSeparatedByString:@"-"] firstObject];
        float fileNameIosVersion = [fileNameIosVersionString floatValue];
        if (fileNameIosVersion == 0.0) {
            HBLogDebug(@"GitHubWebLegacyCompat script %@ has no iOS version, skipping", jsFile);
            continue;
        }
        int majorVersion = (int)fileNameIosVersion;
        int minorVersion = (int)((fileNameIosVersion - majorVersion) * 10);
        if (isIOSVersionOrNewer(majorVersion, minorVersion)) {
            HBLogDebug(@"GitHubWebLegacyCompat script %@ is not compatible with this iOS version, skipping", jsFile);
            continue;
        }

        NSString *actualFileName = [[fileName stringByReplacingOccurrencesOfString:fileNameIosVersionString withString:@""] substringFromIndex:1];
        NSInteger numericChunkId = numericChunkIdFromJsFile(jsFile);
        NSString *scriptContent = [NSString stringWithContentsOfFile:filePath encoding:NSUTF8StringEncoding error:nil];
        if (!scriptContent) {
            HBLogDebug(@"GitHubWebLegacyCompat failed to read script file %@", jsFile);
            continue;
        }

        NSString *scriptIdentifier = [actualFileName stringByReplacingOccurrencesOfString:@"-" withString:@"_"];
        NSString *scope = scopeStringForAsset(actualFileName, numericChunkId);

        if (numericChunkId != NSNotFound &&
            numericChunkScopeForId(numericChunkId) == GHNumericChunkScopeLazy) {
            scriptContent = wrapDeferredNumericChunk(numericChunkId, scriptContent);
        }

        scriptContent = wrapScopedScript(scriptIdentifier, scope, scriptContent);
        injectScript(webview, scriptIdentifier, scriptContent, WKUserScriptInjectionTimeAtDocumentStart);
    }
}

%hook WKWebView

- (void)_didCommitLoadForMainFrame {
    %orig;
    inject(self);
}

%end

%ctor {
    if (!isTarget(TargetTypeApps)) return;
    %init;
}
