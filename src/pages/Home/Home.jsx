import { useEffect, useRef } from "react";
import ContactForm from "./ContactForm/ContactForm";
import FAQ from "./FAQ/FAQ";
import FastEasy from "./FastEasy/FastEasy";
import HighQualityStorageBoxes from "./HighQualityStorageBoxes/HighQualityStorageBoxes";
import LocationSection from "./LocationSection/LocationSection";
import PricingSection from "./PricingSection/PricingSection";
import SafeSection from "./SafeSection/SafeSection";
import SpaceCalculator from "./SpaceCalculator/SpaceCalculator";
import Testimonial from "./Testimonial/Testimonial";
import BannerSection from "./BannerSection/BannerSection";

const Home = () => {
  // Refs for each section
  const pricingRef = useRef(null);
  const faqRef = useRef(null);
  const spaceCalculatorRef = useRef(null);
  const contactRef = useRef(null);
  const howItWorksRef = useRef(null);

  // Define refMap outside the handler
  const refMap = {
    pricing: pricingRef,
    faq: faqRef,
    spaceCalculator: spaceCalculatorRef,
    contact: contactRef,
    howItWorks: howItWorksRef,
  };

  useEffect(() => {
    const handleScroll = (section) => {
      const sectionRef = refMap[section];
      if (sectionRef?.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    const sections = Object.keys(refMap);

    sections.forEach((section) => {
      const listener = () => handleScroll(section);
      window.addEventListener(`scroll-to-${section}`, listener);

      // Cleanup function inside the forEach
      return () => {
        window.removeEventListener(`scroll-to-${section}`, listener);
      };
    });
  }, []);

  return (
    <div>
      <BannerSection />
      <SafeSection />
      <div ref={pricingRef}>
        <PricingSection />
      </div>
      <div ref={howItWorksRef}>
        <FastEasy />
      </div>
      <HighQualityStorageBoxes />
      <LocationSection />
      <div ref={spaceCalculatorRef}>
        <SpaceCalculator />
      </div>
      <div ref={faqRef}>
        <FAQ />
      </div>
      <div ref={contactRef}>
        <ContactForm />
      </div>
      <Testimonial />
    </div>
  );
};

export default Home;
