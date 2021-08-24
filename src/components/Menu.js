import { useState } from "react";

import imageHeader from "../images/mobile/image-header.jpg";
import imageHeaderDesktop from "../images/desktop/image-header.jpg";
import arrowDown from "../images/icon-arrow-down.svg";
import _ from "lodash";

function Menu() {
    const [dropdown, setVisible] = useState({ visibility:"hidden", display: "none"});
    const [dropdownActiveStyle, setStyle] = useState(0);
    const menuPopup = (event) => {
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
    }

    return (
        <div className={"app-menu-container"}>
            
            <div className={"app-menu-img-box"}>
                {/* <img src={imageHeader} /> */}
                
            </div>

            <div className={"app-menu"}>
                <h3>sunnyside</h3>
                <div onClick={menuPopup}>
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
                <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" strokeWidth="6" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3v100M3 95.484l15 15 15-15"/></g></svg>
            </div>
        </div>
    )
}

export default Menu;