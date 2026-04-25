import ServicesSection from "../components/ServicesSection";
import Industries from "../components/Industries";

import OfferSection from "../components/OfferSection";
import BannerSlider from "../components/BannerSlider";
import Cards from "../components/Cards";
import Testimonials from "../components/Testimonials";
function Home() {
  return (
    <div>
        <BannerSlider />
      <ServicesSection />
      <Industries />
     
      <OfferSection />
      <Cards />
    <Testimonials />
    </div>
  );
}

export default Home;
