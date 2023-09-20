import "./image-caption.css";

class ImageCaption {
  render(text) {
    const p = document.createElement("p");
    p.textContent = text;
    p.classList.add("image-caption");
    document.body.append(p);
  }
}

export default ImageCaption;
