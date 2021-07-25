const contextMenuItem = {
  id: "root",
  title: "Change Case Popup",
  contexts: ["selection"],
};

const subMenuItems = [
  {
    title: "To lowercase",
    id: "lower",
  },
  {
    title: "To UPPERCASE",
    id: "upper",
  },
  {
    title: "To snake_case",
    id: "snake",
  },
  {
    title: "To CONSTANT_CASE",
    id: "constant",
  },
  {
    title: "To camelCase",
    id: "camel",
  },
  {
    title: "To PascalCase",
    id: "pascal",
  },
  {
    title: "To kebab-case",
    id: "kebab",
  },
  {
    title: "To Train-case",
    id: "train",
  },
];

function changeCase(currentCase) {
  chrome.storage.local.set(
    {
      currentCase: currentCase,
    },
    function () {
      chrome.tabs.executeScript(null, { file: "src/content.js" });
    }
  );
}

chrome.contextMenus.create(contextMenuItem);

subMenuItems.forEach(({ title, id }) => {
  chrome.contextMenus.create({
    title,
    parentId: "root",
    id,
    contexts: ["selection"],
    onclick: () => changeCase(id),
  });
});
