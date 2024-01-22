import AboutUs from "./About Us";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Navbar from "./Navbar";
import Services from "./Services";
import Statistics from "./Statistics";
const Home = () => 
{
    return ( 
        <>
            <Navbar/>
            <AboutUs/>
            <Services/>
            <Gallery/>
            <Statistics/>
            <Footer/>
        </>
     );
}
 
export default Home;