import React, { useState, useEffect } from "react";
import { Calendar, Tag, ArrowRight, Mail, Facebook, Twitter, Linkedin, Youtube, ChevronLeft, ChevronRight, Play, Zap, Users, Award, Globe, Target } from "lucide-react";

import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
// Hero slideshow images
const heroSlides = [
  {
    url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&h=1080&fit=crop",
    title: "Empowering Digital Excellence",
    subtitle: "Transform your future with cutting-edge TVET programs"
  },
  {
    url: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&h=1080&fit=crop",
    title: "Industry-Ready Skills",
    subtitle: "Bridge the gap between education and professional success"
  },
  {
    url: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&h=1080&fit=crop",
    title: "Innovation in Learning",
    subtitle: "Experience next-generation technical education"
  }
];

const news = [
  {
    title: "New CCNA Batch Starts September 2025",
    desc: "Registration is now open for the next Cisco CCNA Certification training. Secure your spot today and join Rwanda's leading network professionals.",
    date: "Sep 1, 2025",
    tag: "News",
    img: "https://images.unsplash.com/photo-1581091870633-1a62f8d8d0c3?w=600&h=400&fit=crop",
    featured: true
  },
  {
    title: "Internship Placements Released",
    desc: "TVET students can now check their internship placements for 2025 across partner industries including telecommunications, IT, and engineering sectors.",
    date: "Aug 20, 2025",
    tag: "Update",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop",
    featured: false
  },
  {
    title: "Upcoming Tech Bootcamp – October 2025",
    desc: "Join our intensive bootcamp to master digital transformation skills and industry best practices with hands-on projects and expert mentorship.",
    date: "Oct 5, 2025",
    tag: "Event",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
    featured: false
  },
  {
    title: "Partnership with Microsoft Azure",
    desc: "N@tcom announces strategic partnership with Microsoft to offer Azure cloud certification programs for students across Rwanda.",
    date: "Aug 15, 2025",
    tag: "Partnership",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    featured: false
  },
  {
    title: "Student Success Stories 2025",
    desc: "Meet our graduates who are now leading digital transformation initiatives in major corporations across East Africa.",
    date: "Jul 30, 2025",
    tag: "Success",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    featured: false
  },
  {
    title: "New Digital Labs Inaugurated",
    desc: "State-of-the-art digital laboratories equipped with latest technology opened to enhance practical learning experience for all students.",
    date: "Jul 10, 2025",
    tag: "Infrastructure",
    img: "https://images.unsplash.com/photo-1581092334516-1a62f8d8d0c4?w=600&h=400&fit=crop",
    featured: false
  }
];

const features = [
  { 
    title: "AI-Powered Learning Dashboard", 
    desc: "Track your progress with intelligent analytics and personalized learning recommendations.",
    icon: "🎯"
  },
  { 
    title: "Multilingual Experience", 
    desc: "Seamlessly switch between English, Kinyarwanda, and French with real-time translation.",
    icon: "🌐"
  },
  { 
    title: "Mobile-First Design", 
    desc: "Optimized experience across all devices with offline learning capabilities.",
    icon: "📱"
  },
  { 
    title: "Smart Internship Matching", 
    desc: "AI-powered matching system connects you with the perfect internship opportunities.",
    icon: "🤝"
  }
];

const events = [
  { 
    date: "Oct 15, 2025", 
    title: "Digital Skills Summit", 
    desc: "Industry leaders discuss the future of digital transformation in Rwanda.",
    type: "Summit"
  },
  { 
    date: "Nov 12, 2025", 
    title: "Cisco Global Certification Day", 
    desc: "Special certification event with international networking opportunities.",
    type: "Certification"
  },
  { 
    date: "Dec 18, 2025", 
    title: "Annual Graduation Ceremony", 
    desc: "Celebrating the achievements of our exceptional TVET graduates.",
    type: "Ceremony"
  }
];

const stats = [
  { icon: Users, number: "2,500+", label: "Students Graduated" },
  { icon: Award, number: "25+", label: "Global Certifications" },
  { icon: Target, number: "98%", label: "Employment Rate" },
  { icon: Globe, number: "50+", label: "Industry Partners" }
];

const ModernNewsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const categories = ["All", "News", "Update", "Event", "Partnership", "Success", "Infrastructure"];
  const filteredNews = selectedCategory === "All" ? news : news.filter(item => item.tag === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
     <br/> <br/>

      {/* Hero Slideshow */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.url}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-semibold">Latest News & Updates</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">{heroSlides[currentSlide].title.split(' ').slice(0, -1).join(' ')}</span>
            <br />
            <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              {heroSlides[currentSlide].title.split(' ').slice(-1)}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12">
            {heroSlides[currentSlide].subtitle}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <IconComponent className="w-8 h-8 text-blue-300 mb-3 mx-auto group-hover:scale-110 transition-transform" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full p-3 transition-all duration-300 group"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full p-3 transition-all duration-300 group"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* News Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Latest Updates
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about the latest developments, programs, and opportunities at N@tcom
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Featured Article */}
            <div className="lg:col-span-2">
              {filteredNews
                .filter(item => item.featured)
                .slice(0, 1)
                .map((item, idx) => (
                  <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute top-6 left-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Featured
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Tag className="w-4 h-4" />
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                            {item.tag}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{item.desc}</p>
                      <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                        Read Full Story 
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
            </div>

            {/* Regular Articles */}
            <div className="space-y-6">
              {filteredNews
                .filter(item => !item.featured)
                .slice(0, 4)
                .map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <div className="flex gap-4">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-24 h-24 object-cover rounded-xl flex-shrink-0" 
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                          <Calendar className="w-3 h-3" />
                          <span>{item.date}</span>
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                            {item.tag}
                          </span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Platform Innovations
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the cutting-edge features that make N@tcom the premier choice for digital education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Timeline */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Upcoming Events
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Join us for exciting events and opportunities throughout the year
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
            
            <div className="space-y-12">
              {events.map((event, idx) => (
                <div key={idx} className="relative flex items-start gap-8">
                  <div className="absolute left-6 w-5 h-5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg"></div>
                  <div className="ml-16 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group w-full">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                            {event.date}
                          </span>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {event.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{event.desc}</p>
                      </div>
                      <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 self-start md:self-center">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay in the Loop
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Get the latest updates on programs, events, and opportunities delivered straight to your inbox
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              Join 2,500+ students and professionals in our community
            </p>
          </div>
        </div>
      </section>

    <Footer/>
    </div>
  );
};

export default ModernNewsPage;