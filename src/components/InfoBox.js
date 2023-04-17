import "./infobox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp, faLocationDot, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faFacebookMessenger, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const InfoBox = () => {
    return (
        <div className="infobox_container">
            <h3>Elérhetőségek:</h3>
            <div className="infobox">
                <div>
                    <span>
                        <FontAwesomeIcon icon={faLocationDot} />
                    </span>
                    <p>2045 Törökbálint, Tó utca legvége</p>
                </div>
                <div>
                    <span>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <a href="torokbalintikutyaiskola@gmail.hu" style={{ color: "#FFFF" }}>Email: torokbalintikutyaiskola@gmail.hu</a>
                </div>
                <div>
                    <span>
                        <FontAwesomeIcon icon={faPhone} />
                    </span>
                    <a href="tel:+36703240377" style={{ color: "#FFFF" }}>Telefon: +36204235144, +36705734489</a>
                </div>
                <ul className="social_media_links">
                    <li><a href="https://www.facebook.com/TorokbalintiKutyaiskola/"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faFacebookMessenger} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default InfoBox