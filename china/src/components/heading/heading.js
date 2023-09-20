import "./heading.css";

class Heading {
  render(pageName) {
    const h1 = document.createElement("h1");
    h1.textContent = "Webpack is awesome. This is " + pageName + " page";
    document.body.append(h1);
  }
}

export default Heading;
