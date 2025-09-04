
import React from 'react';
import Header from '@/components/Layout/Header.jsx';
import Footer from '@/components/Layout/Footer.jsx';
import HeroSection from '@/components/Hero/HeroSection.jsx';
import ServicesOverview from '@/components/Services/ServicesOverview.jsx';
import FeaturedCourses from '@/components/Courses/FeaturedCourses.jsx';
import ContactForm from '@/components/Contact/ContactForm.jsx';
import PopularCourses from '@/components/Courses/PopularCourses.jsx';
import Testimonials from '@/components/Testimonials/Testimonials.jsx';
import Partners from '@/components/Partners/Partners.jsx';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PopularCourses />
        <ServicesOverview />
        <FeaturedCourses />
        <Testimonials />
        <Partners />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
