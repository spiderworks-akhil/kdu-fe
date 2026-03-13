import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ClientsSection from "@/components/ClientsSection";
import BlogSection from "@/components/BlogSection";
import PartnersSection from "@/components/PartnersSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>KDU - Serving Expertise & Excellence Globally</title>
        <meta
          name="description"
          content="KDU Marine Equipment Trading & Maintenance LLC - Integrated solutions provider in Navigation, Communication, Electrical and Automation systems"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
      <SolutionsSection />
      <ProductsSection />
      <AboutSection />
      <TestimonialsSection />
      <ClientsSection />
      <BlogSection />
      <PartnersSection />
    </>
  );
}
