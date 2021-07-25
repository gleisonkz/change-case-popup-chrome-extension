console.log("background started");

const clickHandler = function (e) {
  alert("clickHandler openModal");
};

chrome.contextMenus.onClicked.addListener(clickHandler);

chrome.contextMenus.create({
  title: "Change Case Popup",
  contexts: ["selection"],
});
