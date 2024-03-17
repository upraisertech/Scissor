import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import WhyChooseScissors from "@/components/features/WhyChooseScissors";
import Pricing from "@/components/pricing";
import PasteURL from "@/components/pasteURL";
import FAQs from "@/components/Faq/faqs";
import Revolutionizing from "@/components/Faq/Revolutionizing";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";

function Home() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Hero setSelectedPage={setSelectedPage} />
      <Features setSelectedPage={setSelectedPage} />
      <WhyChooseScissors setSelectedPage={setSelectedPage} />
      <Pricing setSelectedPage={setSelectedPage} />
      <PasteURL setSelectedPage={setSelectedPage} />
      <FAQs setSelectedPage={setSelectedPage} />
      <Revolutionizing setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default Home;
