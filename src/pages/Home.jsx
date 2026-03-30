import ServicesSection from "../components/ServicesSection";
import Industries from "../components/Industries";
import Testimonials from "../components/Testimonials";
import OfferSection from "../components/OfferSection";
import BannerSlider from "../components/BannerSlider";
function Home() {
  return (
    <div>
        <BannerSlider />
      <ServicesSection />
      <Industries />
      <Testimonials />
      <OfferSection />
   
    </div>
  );
}

export default Home;