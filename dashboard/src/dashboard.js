import NavigationBar from "./components/navigation-bar/navigation-bar.js";

const navigationItems = [
  {
    url: "/hello-world-page",
    title: "Hello World Page",
  },
  {
    url: "/china-page",
    title: "China Page",
  },
];

const navigationBar = new NavigationBar();
navigationBar.render(navigationItems);

const url = window.location.pathname;

if (url === "/hello-world-page") {
  import("HelloWorldApp/HelloWorldPage").then((module) => {
    const HelloWorldPage = module.default;
    const helloWorldPage = new HelloWorldPage();
    helloWorldPage.render();
  });
} else if (url === "/china-page") {
  import("ChinaApp/ChinaPage").then((module) => {
    const ChinaPage = module.default;
    const chinaPage = new ChinaPage();
    chinaPage.render();
  });
}

console.log("dashboard");
