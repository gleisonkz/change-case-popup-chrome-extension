const selection = window.getSelection().toString();
chrome.extension.sendRequest(selection);
