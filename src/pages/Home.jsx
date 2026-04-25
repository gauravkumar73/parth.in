import ServicesSection from "../components/ServicesSection";
import Industries from "../components/Industries";

import OfferSection from "../components/OfferSection";
import BannerSlider from "../components/BannerSlider";
import Cards from "../components/Cards";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
function Home() {
  return (
    <div>
        <BannerSlider />
      <ServicesSection />
      <Industries />
     
      <OfferSection />
      <Cards />
    <Testimonials />
    <FAQ />
    </div>
  );
}

export default Home;
