import AboutUs from "./Pages/About Us";
import Footer from "./Pages/Footer";
import Gallery from "./Pages/Gallery";
import Navbar from "./Pages/Navbar";
import Services from "./Pages/Services";
import Statistics from "./Pages/Statistics";
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