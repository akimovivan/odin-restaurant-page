import { populateHomeTab } from "./home.js";
import { populateMenuTab } from "./menu.js";
import "./style.css";

const app = document.getElementById("app");
const nav = document.querySelector("nav");

populateHomeTab(app);

const clearApp = (el) => {
  nav
    .querySelectorAll("button")
    .forEach((btn) => btn.classList.remove("selected"));
  el.innerHTML = "";
};

document.getElementById("homeBtn").addEventListener("click", (e) => {
  clearApp(app);
  e.target.className = "selected";
  populateHomeTab(app);
});

document.getElementById("menuBtn").addEventListener("click", (e) => {
  clearApp(app);
  e.target.className = "selected";
  populateMenuTab(app);
});

document.getElementById("contactBtn").addEventListener("click", (e) => {
  clearApp(app);
  e.target.className = "selected";
  // populateSecondTab(app);
});
