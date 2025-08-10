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

static NSString *injectStyles(NSString *identifier, NSString *styles) {
    return [NSString stringWithFormat:@"if(document.getElementById('%@')===null){const styleSheet=document.createElement('style');styleSheet.type='text/css';styleSheet.innerText=`%@`;styleSheet.id='no-polyfill-%@';document.head.appendChild(styleSheet);}", identifier, styles, identifier];
}

static void injectScript(WKWebView *webview, NSString *identifier, NSString *script, WKUserScriptInjectionTime injectionTime) {
    WKUserScript *userScript = [[WKUserScript alloc] initWithSource:script injectionTime:injectionTime forMainFrameOnly:YES];
    [webview.configuration.userContentController addUserScript:userScript];
}

static const void *GHInjectedKey = &GHInjectedKey;

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

    // Load CSS files
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
            injectScript(webview, cssIdentifier, injectStyles(cssIdentifier, cssContent), WKUserScriptInjectionTimeAtDocumentEnd);
        } else
            HBLogDebug(@"GitHubWebLegacyCompat failed to read CSS file %@", cssFile);
    }

    // Load JS files
    NSPredicate *jsPredicate = [NSPredicate predicateWithFormat:@"self ENDSWITH '.js'"];
    NSArray *jsFiles = [assets filteredArrayUsingPredicate:jsPredicate];
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
        // if ([issueAssets containsObject:actualFileName] && ![webview.URL.path containsString:@"/issues/"]) return;
        NSString *scriptContent = [NSString stringWithContentsOfFile:filePath encoding:NSUTF8StringEncoding error:nil];
        if (scriptContent) {
            NSString *scriptIdentifier = [actualFileName stringByReplacingOccurrencesOfString:@"-" withString:@"_"];
            injectScript(webview, scriptIdentifier, scriptContent, WKUserScriptInjectionTimeAtDocumentStart);
        } else
            HBLogDebug(@"GitHubWebLegacyCompat failed to read script file %@", jsFile);
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
