#import <Foundation/Foundation.h>

static NSString *releaseAssetsScript = @"\
const assetSummaryElements = document.querySelectorAll('[data-target=\"details-toggle.summaryTarget\"][aria-expanded=\"false\"]');\
assetSummaryElements.forEach((element) => {\
    const adjacentElement = element.nextElementSibling;\
    const childFragment = adjacentElement.children[0];\
    const url = childFragment.getAttribute('src');\
    const downloadButton = document.createElement('a');\
    downloadButton.href = url;\
    downloadButton.innerText = 'Get assets';\
    downloadButton.target = '_blank';\
    element.appendChild(downloadButton);\
});\
";
