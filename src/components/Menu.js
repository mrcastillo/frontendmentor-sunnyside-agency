import { useState } from "react";

import imageHeader from "../images/desktop/image-header.jpg";
import imageHeaderMobile from "../images/mobile/image-header.jpg";
import _ from "lodash";

import arrowDown from "../images/icon-arrow-down.svg";


function Menu() {
    const [dropdown, setVisible] = useState({ visibility:"hidden", display: "none"});
    const [dropdownActiveStyle, setStyle] = useState(0);

    var mediaTag = window.matchMedia('(max-device-width : 667px)')

    const [menuImage, setMenuImage] = useState(
        () => {
            return(mediaTag.matches ? imageHeaderMobile : imageHeader);
        }
    );

    mediaTag.addEventListener("change", () => {
        var currentImage = mediaTag.matches ? imageHeaderMobile : imageHeader
        setMenuImage(currentImage);
    });

    const menuPopUpMobile = (event) => {
        if(dropdown.visibility === "hidden" && dropdown.display === "none")
        {
            setVisible({
                visibility: "visible",
                display: "initial"
            });
        } else {
            setVisible({
                visibility: "hidden",
                display: "none"
            });
        }
    };

    const setActiveStyle = (event) => {
        const dropDownOptions = document.getElementsByClassName("app-menu-dropdown-options")[0];
        const pElements = dropDownOptions.getElementsByTagName("p");

         _.forEach(pElements, (p) => {
            p.id = "";
         });

         event.target.id = "dropdown-active";
    };

    return (
        <div className={"app-menu-container"}>
            
            <div className={"app-menu-img-box"}>
                <img src={menuImage} /> 
            </div>

            <div className={"app-menu"}>
                <h3>sunnyside</h3>

                {/*For Desktop Only*/}
                <div className={"app-menu-desktop"}>
                    <div className={"app-menu-desktop-buttons"}>
                        <p>About</p>
                        <p>Services</p>
                        <p>Projects</p>
                        <p>Contact</p>
                    </div>
                </div>

                {/*For Mobile Only*/}
                <div className={"app-menu-sandwich"} onClick={menuPopUpMobile}>
                    <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#FFF" fillRule="evenodd"/></svg>
                </div>

                <div className={"app-menu-dropdown"} style={{"visibility": dropdown.visibility, "display": dropdown.display}}>
                    <div onClick={setActiveStyle} className={"app-menu-dropdown-options"}>
                        <p>About</p>
                        <p>Services</p>
                        <p>Projects</p>
                        <p>Contact</p>
                    </div>
                </div>

            </div>

            <div className={"app-menu-header"}>
                <h1>WE ARE CREATIVES</h1>
            </div>

            <div className={"app-menu-arrow"}>
                {/* <img src={arrowDown} /> */}
                <img src={arrowDown} />
            </div>
        </div>
    )
}

export default Menu;