import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import AboutUs from "@/components/AboutUs"; // Nuevo
import ComparisonTable from "@/components/ComparisonTable";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ"; // Nuevo
import Contact from "@/components/Contact"; // Nuevo
import Testimonials from "@/components/Testimonials";
import LeadForm from "@/components/LeadForm";
import DataTransparency from "@/components/DataTransparency";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <AboutUs />
      <ComparisonTable />
      <WhyChooseUs />
      <FAQ />
      <Contact />
      <Testimonials />
      <LeadForm />
      <DataTransparency />
      <Footer />
    </main>
  );
}