import imageHeader from "../images/mobile/image-header.jpg";

function Menu() {
    return (
        <div className={"app-menu-container"}>
            
            <div className={"app-menu-img-box"}>
                <img src={imageHeader} />
            </div>

            <div className={"app-menu"}>
                <h3>sunnyside</h3>
                <div>sym</div>
            </div>

            <div className={"app-menu-header"}>
                <h1>We Are Creatives</h1>
            </div>
        </div>
    )
}

export default Menu;