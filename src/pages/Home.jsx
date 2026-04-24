import ServicesSection from "../components/ServicesSection";
import Industries from "../components/Industries";
import Testimonials from "../components/Testimonials";
import OfferSection from "../components/OfferSection";
import BannerSlider from "../components/BannerSlider";
import Cards from "../components/Cards";
function Home() {
  return (
    <div>
        <BannerSlider />
      <ServicesSection />
      <Industries />
      <Testimonials />
      <OfferSection />
      <Cards />
   
    </div>
  );
}

export default Home;