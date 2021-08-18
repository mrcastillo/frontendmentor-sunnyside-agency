import cherries from "../images/mobile/image-graphic-design.jpg";

function Cherries() {
    return (
        <div className={"app-cherries-container"}>
            <div className={"app-cherries-img-box"}>
                <img src={cherries} />
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