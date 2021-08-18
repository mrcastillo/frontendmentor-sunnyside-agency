import imageHeader from "../images/mobile/image-header.jpg";
import arrowDown from "../images/icon-arrow-down.svg";

function Menu() {
    return (
        <div className={"app-menu-container"}>
            
            <div className={"app-menu-img-box"}>
                <img src={imageHeader} />
            </div>

            <div className={"app-menu"}>
                <h3>sunnyside</h3>
                <div><svg width="24" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#FFF" fillRule="evenodd"/></svg></div>
            </div>

            <div className={"app-menu-header"}>
                <h1>WE ARE CREATIVES</h1>
            </div>

            <div className={"app-menu-arrow"}>
                {/* <img src={arrowDown} /> */}
                <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" strokeWidth="6" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3v100M3 95.484l15 15 15-15"/></g></svg>
            </div>
        </div>
    )
}

export default Menu;