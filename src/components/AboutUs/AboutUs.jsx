import React from "react";
import { Button } from "@/components/ui/button";
import {
  Users,
  Award,
  Globe,
  Target,
  Play,
  ArrowRight,
  Zap,
  Lightbulb,
  HeartHandshake,
  BookOpen,
  ShieldCheck,
} from "lucide-react";

import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";


// Sample team data
const team = [
  {
    name: "Kevin BAJENEZA",
    role: "N@tcom Services Ltd CEO",
    img: "./ceo.jpg",
  },
  {
    name: "Adrien NKURUNZIZA",
    role: "Trainer Manager ",
    img: "./adrien.jpg",
  },
  // {
  //   name: "",
  //   role: "UI/UX Mentor",
  //   img: "https://randomuser.me/api/portraits/women/68.jpg",
  // },
  // {
  //   name: "David Kim",
  //   role: "Cybersecurity Expert",
  //   img: "https://randomuser.me/api/portraits/men/53.jpg",
  // },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&h=1080&fit=crop"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-indigo-900/80 to-purple-900/90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <Zap className="w-4 h-4 text-yellow-300" />
              <span className="text-white font-medium">
                💡 Discover Our Mission & Vision
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              About Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Learning Community
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
            We are committed to transforming TVET education in Rwanda by bridging
            the gap between traditional learning and modern industry demands.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <Target className="w-5 h-5 mr-2" />
              Our Mission
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 rounded-full px-8 py-4 text-lg font-semibold"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Story
            </Button>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Users, label: "Students Trained", value: "2K+" },
              { icon: Award, label: "Certifications", value: "1.5K+" },
              { icon: Globe, label: "Industry Partners", value: "50+" },
              { icon: Target, label: "Success Rate", value: "90%" },
            ].map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <IconComponent className="w-8 h-8 text-blue-300 mb-3 mx-auto" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">
          Our Mission & Vision
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
            <Lightbulb className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To empower students with modern digital and technical skills that
              align with industry needs.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
            <Target className="w-10 h-10 text-purple-600 mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading hub for TVET transformation and digital
              upskilling across Africa.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
            <HeartHandshake className="w-10 h-10 text-pink-600 mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-3">Our Values</h3>
            <p className="text-gray-600">
              Integrity, collaboration, innovation, and inclusivity in all that
              we do.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-4 gap-10">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
            <BookOpen className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-3">Hands-on Training</h3>
            <p className="text-gray-600">
              Real projects, real skills, preparing you for the real world.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
            <ShieldCheck className="w-10 h-10 text-green-600 mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-3">Industry Recognition</h3>
            <p className="text-gray-600">
              Certifications and partnerships with top companies globally.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
            <Users className="w-10 h-10 text-pink-600 mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-3">Community Support</h3>
            <p className="text-gray-600">
              A strong alumni and mentor network to guide your career journey.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
