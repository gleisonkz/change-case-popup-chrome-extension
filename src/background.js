const contextMenuItem = {
  id: "root",
  title: "Change Case Popup",
  contexts: ["selection"],
};

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

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.create({
  title: "To lowercase",
  parentId: "root",
  id: "lower",
  contexts: ["selection"],
  onclick: () => changeCase("lower"),
});

chrome.contextMenus.create({
  title: "To UPPERCASE",
  parentId: "root",
  id: "upper",
  contexts: ["selection"],
  onclick: () => changeCase("upper"),
});

chrome.contextMenus.create({
  title: "To snake_case",
  parentId: "root",
  id: "snake",
  contexts: ["selection"],
  onclick: () => changeCase("snake"),
});

chrome.contextMenus.create({
  title: "To CONSTANT_CASE",
  parentId: "root",
  id: "constant",
  contexts: ["selection"],
  onclick: () => changeCase("constant"),
});

chrome.contextMenus.create({
  title: "To camelCase",
  parentId: "root",
  id: "camel",
  contexts: ["selection"],
  onclick: () => changeCase("camel"),
});

chrome.contextMenus.create({
  title: "To PascalCase",
  parentId: "root",
  id: "pascal",
  contexts: ["selection"],
  onclick: () => changeCase("pascal"),
});

chrome.contextMenus.create({
  title: "To kebab-case",
  parentId: "root",
  id: "kebab",
  contexts: ["selection"],
  onclick: () => changeCase("kebab"),
});

chrome.contextMenus.create({
  title: "To Train-case",
  parentId: "root",
  id: "train",
  contexts: ["selection"],
  onclick: () => changeCase("train"),
});
