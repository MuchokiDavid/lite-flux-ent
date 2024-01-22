import MenAtWork from './Images/Men at work.jpg'
import SolarInstallation from './Images/solar installation.jpg'
import Electrical from './Images/Electrical.jpg'
import Cabling from './Images/cabling.jpeg'
import CCTV from './Images/cctv.jpeg'
import NetworkCabling from './Images/network.jpeg'

import './CSS/Gallery.css'
const Gallery = () => 
{
    return (  
        <>
            <h2 style={{textAlign: "center"}}>Our Gallery</h2>
            <h4 style={{textAlign: "center", padding: "20px"}}>Sample of our work</h4>

            <div className="gallery">
                <img src={MenAtWork} alt="Men at work" title="Solar Installation"/>
                <img src={SolarInstallation} alt="Solar installation" title="Installed Solar Panels"/>
                <img src={Electrical} alt="Electrical wiring" title="Electrical Wiring"/>
                <img src={Cabling} alt="Structured cabling" title="Structured cabling"/>
                <img src={CCTV} alt="CCTV installation" title="CCTV Installed"/>
                <img src={NetworkCabling} alt="Network cabling" title="Network cabling"/>
            </div>
        </>
    );
}
 
export default Gallery;