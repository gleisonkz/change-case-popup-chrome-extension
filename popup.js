const $buttons = document.querySelectorAll("button");
const $selected = document.querySelector(".selected-text");
const $output = document.querySelector(".output-text");
let selectedText;
$buttons.forEach(($button) =>
  $button.addEventListener("click", () => changeCase(selectedText, $button.dataset.case))
);

const functions = {
  snake: (text) =>
    text
      .split(" ")
      .map((word) => word.toLowerCase())
      .join("-"),
};

function changeCase(text, dataCase) {
  const caseFn = functions[dataCase];
  if (!caseFn) return;
  const outputPhrase = caseFn(text);
  $output.innerText = outputPhrase;
  copyToClipboard(outputPhrase);
}

function copyToClipboard(textToCopy) {
  const $input = document.createElement("input");
  $input.value = textToCopy;
  document.body.appendChild($input);
  $input.select();
  document.execCommand("copy");
  document.body.removeChild($input);
  alert("Text copied to the clipboard");
}

function onSelection(text) {
  selectedText = text;
  $selected.innerText = text;
  chrome.extension.onRequest.removeListener(window.onSelection);
}

chrome.extension.onRequest.addListener(onSelection);
chrome.tabs.executeScript(null, { file: "content.js" });
