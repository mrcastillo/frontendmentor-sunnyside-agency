import emily from "../images/image-emily.jpg"
import thomas from "../images/image-thomas.jpg"
import jennie from "../images/image-jennie.jpg"

function Testimonials() {
    return (
        <div className={"app-testimonials-box"}>
            <h6>CLIENT TESTIMONIALS</h6>

            <div className={"app-testimonials-client-wrapper"}>
                <div className={"app-testimonials-client-box"}>
                    <div className={"app-testimonials-client-img-box"}>
                        <img src={emily} />
                    </div>

                    <p className={"app-testimonials-client-text"}>We put our trust in Sunnyside and they delivered,
                        making sure our needs were met and deadlines were always hit.
                    </p>

                    <div className={"app-testimonials-client-info"}>
                        <p id={"client-name"}>
                            Emily R.
                        </p>
                        <p id={"client-occupation"}>
                            Marketing Director
                        </p>
                    </div>
                </div>

                <div className={"app-testimonials-client-box"}>
                    <div className={"app-testimonials-client-img-box"}>
                        <img src={thomas} />
                    </div>

                    <p className={"app-testimonials-client-text"}>
                        Sunnyside's enthusiasm coupled with their keen interest in our brand's success
                        made it a satisfying and enjoyable experience.
                    </p>

                    <div className={"app-testimonials-client-info"}>
                        <p id={"client-name"}>
                            Thomas S.
                        </p>
                        <p id={"client-occupation"}>
                            Chief Operating Officer
                        </p>
                    </div>
                </div>

                <div className={"app-testimonials-client-box"}>
                    <div className={"app-testimonials-client-img-box"}>
                        <img src={jennie} />
                    </div>

                    <p className={"app-testimonials-client-text"}>
                        Incredible end result! Our sales increased over 400% when we worked with
                        Sunnyside. Highly recommended!
                    </p>

                    <div className={"app-testimonials-client-info"}>
                        <p id={"client-name"}>
                            Jennie F.
                        </p>
                        <p id={"client-occupation"}>
                            Business Owner
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;