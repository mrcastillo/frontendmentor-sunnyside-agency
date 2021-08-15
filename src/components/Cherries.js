import cherries from "../images/mobile/image-graphic-design.jpg";

function Cherries() {
    return (
        <div className={"app-cherries-container"}>
            <div className={"app-cherries-img-box"}>
                <img src={cherries} />
            </div>
        </div>
    )
}

export default Cherries;