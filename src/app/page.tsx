import AboutApp from "../Components/AboutApp";
import CallAction from "../Components/CallAction";
import DesignedSection from "../Components/DesignedSection/DesignedSection";
import Hero from "../Components/HeroSection";
import HomeFAQ from "../Components/HomeFAQ";
import Slider from "../Components/Slider";
import TemplateSection from "../Components/Template/TemplateSection";

export default function Home() {
  return (
    <>
        <Hero />
        <AboutApp />
        <DesignedSection />
        <TemplateSection />
        <Slider />
        <HomeFAQ />
        <CallAction />
    </>
  );
}
