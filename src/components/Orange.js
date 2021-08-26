import { useState } from "react";

import orange from "../images/desktop/image-photography.jpg";
import orangeMobile from "../images/mobile/image-photography.jpg";

function Orange() {

    var mediaTag = window.matchMedia('(max-device-width : 667px)')

    const [image, setImage] = useState(
        () => {
            return(mediaTag.matches ? orangeMobile : orange);
        }
    );
    
    mediaTag.addEventListener("change", () => {
        var currentImage = mediaTag.matches ? orangeMobile : orange
        setImage(currentImage);
    });

    return (
        <div className={"app-orange-container"}>
            <div className={"app-orange-img-box"}>
                <img src={image} />
            </div>

            <div className={"app-orange-text-box"}>
                <h1>Photography</h1>
                <p>Increase your credibility by getting the most stunning, high-quality photos
                    that improve your business image.
                </p>
            </div>
        </div>
    )
}

export default Orange;