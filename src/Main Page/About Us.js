import SolarPanelsImage from './Images/Solar-Panels.jpg'
import './CSS/About.css'
const AboutUs = () => 
{
    return ( 
        <>
            <section id="home" className='about-us'>
                <div className="about">
                    <img src={SolarPanelsImage} alt="Solar Panels" class="pic"/>
                    <div className="text">
                        <h2>About Us</h2>
                        <h5>Harness the power of the sun with our solar Panels!</h5>
                        <p>
                        Lite Flux Enterprise, is a full-service electrical and technological Service Provider offering its services here in Kenya, East Africa and beyond. Our services range from electrical installations, solar, structural cabling, fiber, security systems such as CCTVs, 
                        Alarms, electrical fence to automatic gates, and so on. We are passionate about providing sustainable energy solutions to power your life. 
                        With a wide range of high-quality and affordable solar panels and electrical products.
                        With our expertise and passion for sustainability, we're here to help you power your life with Quality and pocket-friendly services.
                        As a leading provider of solar panels and electrical solutions in Kenya, we pride ourselves on delivering high-quality, reliable products that empower homes, businesses, and communities.
                    We analyze specific customer’s needs and then provide solutions that resolve them
                    specifically and accordingly.
                        </p>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default AboutUs;