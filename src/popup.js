const $buttons = document.querySelectorAll("button");

$buttons.forEach(($button) =>
  $button.addEventListener("click", () => changeCase($button.dataset.case))
);

function changeCase(currentCase) {
  chrome.storage.local.set(
    {
      currentCase: currentCase,
    },
    function () {
      chrome.tabs.executeScript(null, { file: "src/js/content.js" });
    }
  );
}
