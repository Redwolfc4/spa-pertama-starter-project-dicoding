import { App as Application } from "./app.js";

const content = document.querySelector("#content");

document.addEventListener("DOMContentLoaded", async () => {
  const app = new Application({ content });
  app.renderPage();
});

window.addEventListener("hashchange", async () => {
  const app = new Application({ content });
  app.renderPage();
});
