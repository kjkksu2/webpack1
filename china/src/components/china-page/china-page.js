import Heading from "../heading/heading";
import ChinaImage from "../china-image/china-image";

class ChinaPage {
  render() {
    const heading = new Heading();
    heading.render("china");
    const chinaImage = new ChinaImage();
    chinaImage.render();

    import("ImageCaptionApp/ImageCaption").then((module) => {
      const ImageCaption = module.default;
      const imageCaption = new ImageCaption();
      imageCaption.render("hahahaha");
    });
  }
}

export default ChinaPage;
