import "./Footer.css"
import footerDetailsData from "../../../footerDetailsData"
import footerHotMenuData from "../../../footerHatMenuData"
import footerImageData from "../../../footerImageData"

const Footer = () => {
    return (
        <>
            <footer className="footer-section">
                <div className="footer-box-1">
                    <div className="footer-1">
                        <img
                            className="logo-2"
                            src={footerDetailsData.logo}
                            alt="footer-logo"
                        />

                        <div className="footer-1-details">
                            <ul className="footer-1-order">
                                {footerDetailsData.contactInfo.map((item) => (
                                    <li key={item.id}>
                                        <img src={item.icon} alt="" />
                                        <a href={item.link}>{item.text}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="footer-2">
                        <h3>Hot Menu</h3>

                        <ul className="footer-2-details">
                            {footerHotMenuData.map((item) => (
                                <p key={item.id}>{item.text}</p>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-3">
                        <h3>Instagram</h3>
                        <div className="footer-3-details">
                            {footerImageData.map((item) => (
                                <img key={item.id} src={item.image} alt={`instagram-${item.id}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer