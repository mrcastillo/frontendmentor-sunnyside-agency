import orange from "../images/mobile/image-photography.jpg";

function Orange() {
    return (
        <div className={"app-orange-container"}>
            <div className={"app-orange-img-box"}>
                <img src={orange} />
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