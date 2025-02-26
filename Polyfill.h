#import <Foundation/Foundation.h>

static NSString *polyfillScript = @"HTMLDialogElement = String;\
const originalMatches = Element.prototype.matches;\
Element.prototype.matches = function(selector) {\
  const modifiedSelector = selector.replace(/:modal/g, /\\.modal/);\
  return originalMatches.call(this, modifiedSelector);\
};\
if (!Array.prototype.at) {\
  Array.prototype.at = function(index) {\
    if (index < 0) {\
      index = this.length + index;\
    }\
    if (index >= 0 && index < this.length) {\
      return this[index];\
    }\
    return undefined;\
  };\
}";
