import "./index.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { DevelopmentSection } from "./partials/DevelopmentSection";
import { ConsultingSection } from "./partials/ConsultingSection";
import { HeroSection } from "./partials/HeroSection";
import { FAQSection } from "./partials/FAQSection";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* header */}
      <Navbar />

      {/* hero section */}
      <HeroSection />

      {/* development section */}
      <DevelopmentSection />

      {/* consulting section */}
      <ConsultingSection />

      {/* faq section */}
      <FAQSection />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
