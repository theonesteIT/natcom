import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-brand-900 to-tech-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-tech-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-tech-400 rounded-xl blur-lg opacity-30"></div>
                <img src="/lovable-uploads/0b2a15ea-c81d-4b9d-bc16-c6f60e6aa20e.png" alt="N@tcom Services Ltd" className="relative h-12 w-auto object-contain" />
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Bridging the technology gap in the digital economy through professional IT training, certifications, and consultancy services. 
              Empowering the next generation of IT professionals.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: '#', color: 'hover:text-blue-400' },
                { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
                { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
                { icon: Instagram, href: '#', color: 'hover:text-pink-400' }
              ].map(({ icon: Icon, href, color }, index) => (
                <a key={index} href={href} className={`p-3 bg-white/5 hover:bg-white/10 rounded-xl text-gray-400 ${color} transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10`}>
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold bg-gradient-to-r from-white to-tech-200 bg-clip-text text-transparent">Services</h3>
            <ul className="space-y-3">
              {['Professional Training', 'IT Certifications', 'Digital Literacy', 'Industrial Attachments', 'IT Consultancy'].map((service, index) => (
                <li key={index}>
                  <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium hover:translate-x-1 inline-block">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold bg-gradient-to-r from-white to-tech-200 bg-clip-text text-transparent">Contact Us</h3>
            <div className="space-y-4">
              {[
                { icon: Mail, text: 'info@natcomservices.com', color: 'text-tech-400' },
                { icon: Phone, text: '+250 788 647 718', color: 'text-brand-400' },
                { icon: Phone, text: '+250 739 348 631', color: 'text-green-400' },
                { icon: MapPin, text: 'Convention Center Road – Kimihurura – Rugando, Kigali, Rwanda', color: 'text-purple-400' }
              ].map(({ icon: Icon, text, color }, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <Icon className={`h-5 w-5 ${color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">{text}</span>
                </div>
              ))}
            </div>

            <Button onClick={scrollToTop} className="bg-gradient-to-r from-brand-600 to-tech-600 hover:from-brand-700 hover:to-tech-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group">
              <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
              Back to Top
            </Button>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">&copy; 2024 N@tcom Services Ltd. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


