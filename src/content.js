function copyToClipboard(textToCopy) {
  const $input = document.createElement("input");
  $input.value = textToCopy;
  document.body.appendChild($input);
  $input.select();
  document.execCommand("copy");
  document.body.removeChild($input);
  alert("Text copied to the clipboard");
}

function changeCase(text, dataCase) {
  const FUNCTIONS = {
    snake: (text) =>
      text
        .split(" ")
        .map((word) => word.toLowerCase())
        .join("-"),
  };

  const caseFn = FUNCTIONS[dataCase];
  if (!caseFn) return;
  const outputPhrase = caseFn(text);
  copyToClipboard(outputPhrase);
}

chrome.storage.local.get("currentCase", function (msg) {
  const dataCase = msg.currentCase;
  console.log("currentCase", msg.currentCase);
  var selection = window.getSelection().toString();
  changeCase(selection, dataCase);
  chrome.storage.local.remove("currentCase");
});
