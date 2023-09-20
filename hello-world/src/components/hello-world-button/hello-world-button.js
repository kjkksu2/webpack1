import "./hello-world-button.css";

class HelloWorldButton {
  render() {
    const button = document.createElement("button");
    button.textContent = "click";
    button.classList.add("hello-world-button");
    button.onclick = () => {
      const p = document.createElement("p");
      p.textContent = "Hello World";
      p.classList.add("hello-world-text");
      document.body.append(p);
    };
    document.body.append(button);
  }
}

export default HelloWorldButton;
