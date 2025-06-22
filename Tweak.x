#define CHECK_TARGET
#import <PSHeader/PS.h>
#import <CoreFoundation/CoreFoundation.h>
#import <Foundation/Foundation.h>
#import <WebKit/WKWebView.h>
// #import <WebKit/WKWebViewConfiguration.h>
// #import <WebKit/WKScriptMessage.h>
// #import <WebKit/WKUserContentController.h>
// #import <WebKit/WKUserScript.h>
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

static NSString *injectScript(WKWebView *webview, NSString *identifier, NSString *script) {
    // WKUserScript *userScript = [[WKUserScript alloc] initWithSource:script injectionTime:WKUserScriptInjectionTimeAtDocumentEnd forMainFrameOnly:YES];
    // [webview.configuration.userContentController addUserScript:userScript];

    __block NSString *resultString = nil;
    __block BOOL finished = NO;

    [webview evaluateJavaScript:script completionHandler:^(id result, NSError *error) {
        if (error == nil) {
            if (result)
                resultString = [NSString stringWithFormat:@"%@", result];
        } else
            HBLogDebug(@"GitHubWebLegacyCompat evaluateJavaScript (%@) error : %@", identifier, error.localizedDescription);
        finished = YES;
    }];

    while (!finished)
        [[NSRunLoop currentRunLoop] runMode:NSDefaultRunLoopMode beforeDate:[NSDate distantFuture]];

    return resultString;
}

static void inject(WKWebView *webview) {
    if (![webview.URL.host containsString:@"github.com"]) return;
    NSString *assetsFolder = PS_ROOT_PATH_NS(@"/Library/Application Support/GitHubWebLegacyCompat");
    NSArray *assets = [[NSFileManager defaultManager] contentsOfDirectoryAtPath:assetsFolder error:nil];

    // Load CSS files
    NSPredicate *cssPredicate = [NSPredicate predicateWithFormat:@"self ENDSWITH '.css'"];
    NSArray *cssFiles = [assets filteredArrayUsingPredicate:cssPredicate];
    for (NSString *cssFile in cssFiles) {
        NSString *filePath = [assetsFolder stringByAppendingPathComponent:cssFile];
        NSString *fileName = [cssFile stringByDeletingPathExtension];
        float fileNameIosVersion = [[[fileName componentsSeparatedByString:@"-"] firstObject] floatValue];
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
        NSString *cssContent = [NSString stringWithContentsOfFile:filePath encoding:NSUTF8StringEncoding error:nil];
        if (cssContent) {
            NSString *cssIdentifier = [fileName stringByReplacingOccurrencesOfString:@"-" withString:@"_"];
            NSString *result = injectScript(webview, cssIdentifier, injectStyles(cssIdentifier, cssContent));
            if (result)
                HBLogDebug(@"GitHubWebLegacyCompat injected CSS %@: %@", fileName, result);
            else
                HBLogDebug(@"GitHubWebLegacyCompat failed to inject CSS %@", fileName);
        } else
            HBLogDebug(@"GitHubWebLegacyCompat failed to read CSS file %@", cssFile);
    }

    // Load JS files
    NSPredicate *jsPredicate = [NSPredicate predicateWithFormat:@"self ENDSWITH '.js'"];
    NSArray *jsFiles = [assets filteredArrayUsingPredicate:jsPredicate];
    for (NSString *jsFile in jsFiles) {
        NSString *filePath = [assetsFolder stringByAppendingPathComponent:jsFile];
        NSString *fileName = [jsFile stringByDeletingPathExtension];
        float fileNameIosVersion = [[[fileName componentsSeparatedByString:@"-"] firstObject] floatValue];
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
        NSString *scriptContent = [NSString stringWithContentsOfFile:filePath encoding:NSUTF8StringEncoding error:nil];
        if (scriptContent) {
            NSString *result = injectScript(webview, fileName, scriptContent);
            if (result)
                HBLogDebug(@"GitHubWebLegacyCompat injected script %@: %@", fileName, result);
            else
                HBLogDebug(@"GitHubWebLegacyCompat failed to inject script %@", fileName);
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
