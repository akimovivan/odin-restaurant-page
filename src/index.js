import { populateMainTab } from "./main.js";
import { populateSecondTab } from "./second.js";

const app = document.getElementById("app");

populateMainTab(app);

document
  .getElementById("main")
  .addEventListener("click", () => populateMainTab(app));

document
  .getElementById("second")
  .addEventListener("click", () => populateSecondTab(app));
