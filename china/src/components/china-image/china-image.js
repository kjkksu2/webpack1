import China from "./china.jpg";
import "./china-image.css";

class ChinaImage {
  render() {
    const img = document.createElement("img");
    img.src = China;
    img.alt = "China";
    img.classList.add("china-image");
    document.body.append(img);
  }
}

export default ChinaImage;
