import routes from "./routes/routes.js";
import { getActiveRoute } from "./routes/urlParser.js";

class App {
  // content

  constructor({ content }) {
    this.content = content;
  }

  async renderPage() {
    const routeName = getActiveRoute();
    const route = routes[routeName];

    // Get page instance
    const page = route();

    this.content.innerHTML = await page.render();

    console.log(`routeName = ${routeName}`);
    console.log(`route = ${route}`);
  }
}

export { App };
