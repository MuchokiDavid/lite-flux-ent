import '../CSS/Footer.css'

const Footer = () =>
{
    const date=new Date()
    const year=date.getFullYear()

    return ( 
        <>
            <section id="contacts">
                <div class="heading">
                    <h2>LITEFLUX ENT.<sup>&trade;</sup></h2>
                </div>
                <div className="footer-content">
                    <div className="footer-services">
                        <h4>Services</h4>
                        <ul>
                            <li>Structured Cabling</li>
                            <li>Security Systems installation</li>
                            <li>Solar installation and maintenance</li>
                            <li>Fiber cabling</li>
                            <br/> <b>Email:</b><a href="mailto: liteflux23@gmail.com"> liteflux23@gmail.com</a>
                        </ul>
                    </div>
                    <div className="social-links">
                        <h4>Social Media Links</h4>
                        <p>
                            <a href="whatsapp://send?text=Hello!&phone=+254 700375948" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-whatsapp"></i> Whatsapp
                            </a>
                        </p>
                        <p>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-facebook" ></i> Facebook 
                            </a>
                        </p>
                        <p>
                            <a href="tel:+254 700375948" target="_blank" rel="noopener noreferrer">
                                <i class="bi-telephone"></i> Call: +254 700375948 
                            </a>
                        </p>
                        <p>
                            <a href="mailto: liteflux23@gmail.com" target="_blank" rel="noopener noreferrer">
                                <i class="bi bi-envelope px-2"> </i>Send an Email
                            </a>
                        </p>
                    </div>
                    <div className="quick-links">
                        <h4>Quick Links</h4>
                        <p><a href="#home">Home</a></p>
                        <p><a href="#home">About</a></p>
                        <p><a href="#services">Services</a></p>
                        <p><a href="#footer">Contact</a></p>
                    </div>
                    <div className="company-details">
                        <h4 className="address">Address</h4>
                        <p>
                            <i className="fas fa-map-marker-alt"> </i>  R.Towers Building Ambala road Nyamakima
                        </p>
                        <h4 className="mobile">Vision</h4>
                        <p>
                            To become a leader in providing best Electrical  <br/> & ICT
                            installations innovative products and services <br/> in various 
                            industries
                        </p>
                    </div>
                </div>
                <div className="copyright">
                    <hr/>
                    &copy; {year} LITEFLUX ENT.
                </div>
                
            </section>
        </>
     );
}
 
export default Footer;