#define CHECK_TARGET
#import <PSHeader/PS.h>
#import <CoreFoundation/CoreFoundation.h>
#import <Foundation/Foundation.h>
#import <WebKit/WKWebView.h>
// #import <WebKit/WKWebViewConfiguration.h>
// #import <WebKit/WKScriptMessage.h>
// #import <WebKit/WKUserContentController.h>
// #import <WebKit/WKUserScript.h>
#import <HBLog.h>
#import <version.h>
#import "Normalize.h"
#import "Light.h"
#import "Dark.h"
#import "Polyfill.h"
#import "ReleaseAssets.h"

static NSString* injectStyles(NSString *id, NSString *styles) {
    return [NSString stringWithFormat:@"if (document.getElementById('%@') === null) { const styleSheet = document.createElement('style'); styleSheet.type = 'text/css'; styleSheet.innerText = `%@`; styleSheet.id = '%@'; document.head.appendChild(styleSheet); }", id, styles, id];
}

static NSString *injectScript(WKWebView *webview, NSString *script) {
    // WKUserScript *userScript = [[WKUserScript alloc] initWithSource:script injectionTime:WKUserScriptInjectionTimeAtDocumentEnd forMainFrameOnly:YES];
    // [webview.configuration.userContentController addUserScript:userScript];

    __block NSString *resultString = nil;
    __block BOOL finished = NO;

    [webview evaluateJavaScript:script completionHandler:^(id result, NSError *error) {
        if (error == nil) {
            if (result)
                resultString = [NSString stringWithFormat:@"%@", result];
        } else
            HBLogDebug(@"evaluateJavaScript error : %@", error.localizedDescription);
        finished = YES;
    }];

    while (!finished)
        [[NSRunLoop currentRunLoop] runMode:NSDefaultRunLoopMode beforeDate:[NSDate distantFuture]];

    return resultString;
}

static void inject(WKWebView *webview) {
    if (![webview.URL.host containsString:@"github.com"]) return;
    injectScript(webview, injectStyles(@"normalize", normalizeStyles));
    injectScript(webview, injectStyles(@"light", lightStyles));
    injectScript(webview, injectStyles(@"dark", darkStyles));
    injectScript(webview, polyfillScript);
    if (!IS_IOS_OR_NEWER(iOS_15_0))
        injectScript(webview, releaseAssetsScript);
}

%hook WKWebView

- (void)_didCommitLoadForMainFrame {
    %orig;
    inject(self);
}

%end

%ctor {
    if (isTarget(TargetTypeApps)) {
        %init;
    }
}
