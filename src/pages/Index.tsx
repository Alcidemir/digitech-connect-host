import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ServerRentalSection from "@/components/ServerRentalSection";
import WorkstationRentalSection from "@/components/WorkstationRentalSection";
import PrinterRentalSection from "@/components/PrinterRentalSection";
import ClientsSection from "@/components/ClientsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ServerRentalSection />
      <WorkstationRentalSection />
      <PrinterRentalSection />
      <ClientsSection />
      <Footer />
    </div>
  );
};

export default Index;
