import { useState } from "react";

import bottles from "../images/desktop/image-gallery-milkbottles.jpg";
import orangePlate from "../images/desktop/image-gallery-orange.jpg";
import cone from "../images/desktop/image-gallery-cone.jpg";
import sugarcubes from "../images/desktop/image-gallery-sugarcubes.jpg";

import bottlesMobile from "../images/mobile/image-gallery-milkbottles.jpg";
import orangePlateMobile from "../images/mobile/image-gallery-orange.jpg";
import coneMobile from "../images/mobile/image-gallery-cone.jpg";
import sugarcubesMobile from "../images/mobile/image-gallery-sugar-cubes.jpg";

const desktopImages = [bottles, orangePlate, cone, sugarcubes];
const mobileImages = [bottlesMobile, orangePlateMobile, coneMobile, sugarcubesMobile];

function FourSquare() {
    var mediaTag = window.matchMedia('(max-device-width : 667px)')

    const [fourSquareImages, setImages] = useState(
        () => {
            return(mediaTag.matches ? mobileImages : desktopImages);
        }
    );

    mediaTag.addEventListener("change", () => {
        var currentImage = mediaTag.matches ? mobileImages : desktopImages
        setImages(currentImage);
    });

    return (
        <div className={"app-four-square-container"}>
            
            <div className={"app-four-square-bottles"}>
                <img src={fourSquareImages[0]} />
            </div>

            <div className={"app-four-square-orange"}>
                <img src={fourSquareImages[1]} />
            </div>

            <div className={"app-four-square-cone"}>
                <img src={fourSquareImages[2]} />
            </div>

            <div className={"app-four-square-sugarcube"}>
                <img src={fourSquareImages[3]} />
            </div>
        </div>
    )
}

export default FourSquare;