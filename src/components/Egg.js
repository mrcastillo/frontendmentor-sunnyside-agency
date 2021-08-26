import { useState } from "react";

import egg from "../images/desktop/image-transform.jpg";
import eggMobile from "../images/mobile/image-transform.jpg";

function Menu() {
    var mediaTag = window.matchMedia('(max-device-width : 667px)')

    const [image, setImage] = useState(
        () => {
            return(mediaTag.matches ? eggMobile : egg);
        }
    );
    
    mediaTag.addEventListener("change", () => {
        var currentImage = mediaTag.matches ? eggMobile : egg
        setImage(currentImage);
    });

    return (
        <div className={"app-egg-container"}>
            <div className={"app-egg-img-box"}>
                <img src={egg} />
            </div>
        </div>
    )
}

export default Menu;