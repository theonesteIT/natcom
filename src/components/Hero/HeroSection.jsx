import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const stats = [
    { number: '500+', label: 'Students Trained', gradient: 'from-brand-400 to-brand-600' },
    { number: '15+', label: 'Certification Programs', gradient: 'from-tech-400 to-tech-600' },
    { number: '95%', label: 'Success Rate', gradient: 'from-purple-400 to-purple-600' }
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src="/video.mp4" // place your video inside the public/ folder
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Empowering TVET Students & Professionals with Future Digital Skills
          </h1>
          <p className="text-lg lg:text-2xl text-white/90 mb-10">
            Internships, Digital Skills & Professional Certifications for Tomorrow’s Workforce
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              className="text-white border border-white/30 hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Overview
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div
                  className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                >
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
