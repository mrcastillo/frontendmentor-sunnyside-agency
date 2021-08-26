import { useState } from "react";
import cherries from "../images/desktop/image-graphic-design.jpg";
import cherriesMobile from "../images/mobile/image-graphic-design.jpg";

function Cherries() {
    var mediaTag = window.matchMedia('(max-device-width : 667px)')

    const [image, setImage] = useState(
        () => {
            return(mediaTag.matches ? cherriesMobile : cherries);
        }
    );
    
    mediaTag.addEventListener("change", () => {
        var currentImage = mediaTag.matches ? cherriesMobile : cherries
        setImage(currentImage);
    });
    
    return (
        <div className={"app-cherries-container"}>
            <div className={"app-cherries-img-box"}>
                <img src={image} />
            </div>

            <div className={"app-cherries-text-box"}>
                <h1>Graphics Design</h1>
                <p>Great design makes you memorable. We deliver
                    artwork that underscores your brands message
                    and captures potential clients' attention.
                </p>
            </div>
        </div>
    )
}

export default Cherries;