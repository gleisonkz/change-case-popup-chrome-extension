const $buttons = document.querySelectorAll("button");
const $selected = document.querySelector(".selected-text");
let selectedText;
$buttons.forEach(($button) => $button.addEventListener(changeCase));

function changeCase(text) {
  alert(text);
}

function onSelection(text) {
  selectedText = text;
  $selected.innerText = text;
  chrome.extension.onRequest.removeListener(window.onSelection);
}

chrome.extension.onRequest.addListener(onSelection);
chrome.tabs.executeScript(null, { file: "content.js" });
