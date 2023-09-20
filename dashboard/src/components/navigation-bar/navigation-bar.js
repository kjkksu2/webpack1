import "./navigation-bar.css";

class NavigationBar {
  render(navigationItems) {
    const liItems = navigationItems.map((v) => {
      return `
            <li>
                <a href="${v.url}">${v.title}</a>
            </li>
            `;
    });
    const ul = document.createElement("ul");
    ul.innerHTML = liItems.join("");
    ul.classList.add("navigation-bar");
    document.body.append(ul);
  }
}

export default NavigationBar;
