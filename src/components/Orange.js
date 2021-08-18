import orange from "../images/mobile/image-photography.jpg";

function Orange() {
    return (
        <div className={"app-orange-container"}>
            <div className={"app-orange-img-box"}>
                <img src={orange} />
            </div>

            <div className={"app-orange-text-box"}>
                <h1>Graphics Design</h1>
                <p>Great design makes you memorable. We deliver
                    artwork that underscores your brands message
                    and captures potential clients' attention.
                </p>
            </div>
        </div>
    )
}

export default Orange;