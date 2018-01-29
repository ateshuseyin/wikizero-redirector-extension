var zero = "https://www.wikizero.com/";
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        var url = details.url;
        var lang = url.substr(8, 2);
        var title = url.substr(url.indexOf('wiki/') + 4);
        return {redirectUrl: zero + lang + title};
    },
    {
        urls: ["*://*.wikipedia.org/wiki/*"],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);