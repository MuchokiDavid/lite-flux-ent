import '../CSS/Services.css'
const Services = () => 
{
    return ( 
        <>
            <section id="services">
                <h1>Our Services</h1>
                <div className="services">
                    <div className="service">
                        <i className="fas fa-network-wired"></i>
                        <h2>Structured cabling</h2>
                        <p>
                            We offer professionally standardized and optimized structured cabling that optimally supports multiple software and hardware’s. 
                            Also, we ensure that all the set of standards governing structured cabling specifying offices, and apartment buildings for data or voice communications are followed to the letter using various kind of cables
                        </p>
                    </div>
                    <div className="service">
                        <i class="bi bi-router-fill"></i>
                        <h2>Fibre cabling</h2>
                        <p>
                            Fiber optic cabling offers significantly improved performance in terms of bandwidth, speed, safety, distance, reliability, interference and much more. Our Fiber cabling services are cost-effective and won’t hurt your pockets.
                        </p>
                    </div>
                    <div className="service">
                        <i class="bi bi-brightness-alt-high-fill"></i>
                        <h2>SOLAR INSTALLATION AND MAINTENANCE</h2>
                        <p>
                            We offer full-service Solar installation and maintenance services with everything you need to power your home, office, school with clean solar energy. Our experienced solar engineers and technicians oversees the entire installation project providing a single point of contact and accountability throughout the life of your solar system.
                        </p>
                    </div>
                    <div className="service">
                        <i class="bi bi-camera-video-fill"></i>
                        <h2>SECURITY SYSTEM INSTALLATION</h2>
                        <p>
                        We understand that the security of the people and things that you value 
                        matters. For that matter, we offer various types of security systems, for both residential and commercial purposes. We install security systems that are modern, secure and with a single point of contact to ensure top-notch usability and reliability.
                        </p>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Services;