import bottles from "../images/mobile/image-gallery-milkbottles.jpg";
import orangePlate from "../images/mobile/image-gallery-orange.jpg";
import cone from "../images/mobile/image-gallery-cone.jpg";
import sugarcubes from "../images/mobile/image-gallery-sugar-cubes.jpg";

function FourSquare() {
    return (
        <div className={"app-four-square-container"}>
            
            <div className={"app-four-square-bottles"}>
                <img src={bottles} />
            </div>

            <div className={"app-four-square-orange"}>
                <img src={orangePlate} />
            </div>

            <div className={"app-four-square-cone"}>
                <img src={cone} />
            </div>

            <div className={"app-four-square-sugarcube"}>
                <img src={sugarcubes} />
            </div>
        </div>
    )
}

export default FourSquare;