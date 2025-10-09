import React, { useState } from "react";
import {
  CheckCircle,
  Timer,
  Send,
  FileText,
  Users,
  Star,
  ExternalLink,
  GraduationCap,
  Trophy,
  TrendingUp,
  Rocket,
  Code,
  Network,
  Monitor,
  Video,
  Smartphone,
  Globe,
  Database,
  Shield,
  Settings,
  Briefcase,
  MapPin,
  Clock,
  Award,
  BookOpen,
  Phone,
  Mail,
  ChevronRight,
  Building2,
  Calendar
} from "lucide-react";

import Header from "@/components/Layout/Header";

const ModernInternshipPlatform = () => {
  const [activeTab, setActiveTab] = useState("programs");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // TVET Programs
  const tvetPrograms = [
    {
      id: 1,
      title: "Software Development",
      icon: Code,
      description: "Learn programming languages, frameworks, and development methodologies",
      duration: "6 months",
      positions: 25,
      skills: ["Python", "Java", "JavaScript", "React", "Node.js"],
      level: "TVET Level 4-6",
      companies: ["TechCorp Rwanda", "Digital Solutions Ltd", "CodeCraft"]
    },
    {
      id: 2,
      title: "Networking & Internet Technology",
      icon: Network,
      description: "Master network infrastructure, cybersecurity, and internet protocols",
      duration: "4 months",
      positions: 20,
      skills: ["Cisco Networking", "TCP/IP", "Network Security", "Firewall Management"],
      level: "TVET Level 4-6",
      companies: ["NetSecure Rwanda", "ConnectTech", "InfoSys Networks"]
    },
    {
      id: 3,
      title: "Computer System Architecture",
      icon: Monitor,
      description: "Understand hardware systems, computer organization, and system design",
      duration: "5 months",
      positions: 15,
      skills: ["Hardware Troubleshooting", "System Design", "Assembly Language", "Microprocessors"],
      level: "TVET Level 4-6",
      companies: ["HardTech Solutions", "SystemCorp", "TechRepair Plus"]
    },
    {
      id: 4,
      title: "Multimedia Production",
      icon: Video,
      description: "Create digital content, video production, and graphic design",
      duration: "4 months",
      positions: 18,
      skills: ["Adobe Creative Suite", "Video Editing", "3D Animation", "Web Design"],
      level: "TVET Level 4-6",
      companies: ["MediaWorks", "Creative Digital", "VisualArts Studio"]
    }
  ];

  // University Programs
  const universityPrograms = [
    {
      id: 5,
      title: "Software Engineering",
      icon: Code,
      description: "Advanced software development, system architecture, and project management",
      duration: "6-12 months",
      positions: 30,
      skills: ["Full-Stack Development", "DevOps", "Microservices", "Cloud Computing"],
      level: "Bachelor's/Master's",
      companies: ["Google Rwanda", "Microsoft", "Amazon Web Services", "Local Tech Startups"]
    },
    {
      id: 6,
      title: "Web Development",
      icon: Globe,
      description: "Modern web technologies, responsive design, and user experience",
      duration: "6 months",
      positions: 35,
      skills: ["React", "Vue.js", "Angular", "Node.js", "MongoDB", "PostgreSQL"],
      level: "Bachelor's",
      companies: ["WebCraft Rwanda", "Digital Agency", "E-commerce Solutions"]
    },
    {
      id: 7,
      title: "Mobile App Development",
      icon: Smartphone,
      description: "iOS, Android, and cross-platform mobile application development",
      duration: "6 months",
      positions: 28,
      skills: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      level: "Bachelor's",
      companies: ["MobileTech", "App Innovations", "StartupHub Rwanda"]
    },
    {
      id: 8,
      title: "Data Science & Analytics",
      icon: Database,
      description: "Big data processing, machine learning, and business intelligence",
      duration: "8 months",
      positions: 22,
      skills: ["Python", "R", "Machine Learning", "SQL", "Tableau", "Power BI"],
      level: "Bachelor's/Master's",
      companies: ["DataCorp", "Analytics Rwanda", "Business Intelligence Ltd"]
    },
    {
      id: 9,
      title: "Cybersecurity",
      icon: Shield,
      description: "Information security, ethical hacking, and risk management",
      duration: "6 months",
      positions: 20,
      skills: ["Penetration Testing", "Security Auditing", "Risk Assessment", "Incident Response"],
      level: "Bachelor's/Master's",
      companies: ["SecureTech", "CyberDefense Rwanda", "InfoSec Solutions"]
    },
    {
      id: 10,
      title: "IT Infrastructure & Cloud",
      icon: Settings,
      description: "Cloud computing, system administration, and infrastructure management",
      duration: "6 months",
      positions: 25,
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "Linux", "Windows Server"],
      level: "Bachelor's",
      companies: ["CloudTech Rwanda", "Infrastructure Plus", "SystemAdmin Corp"]
    }
  ];

  const allPrograms = [...tvetPrograms, ...universityPrograms];
  const filteredPrograms = selectedCategory === "all" ? allPrograms : 
                          selectedCategory === "tvet" ? tvetPrograms : universityPrograms;

  const partnerCompanies = [
    { name: "Google Rwanda", logo: "🏢", sector: "Technology", interns: 45 },
    { name: "Microsoft", logo: "🏢", sector: "Software", interns: 38 },
    { name: "MTN Rwanda", logo: "📱", sector: "Telecommunications", interns: 52 },
    { name: "Bank of Kigali", logo: "🏦", sector: "Fintech", interns: 28 },
    { name: "Rwanda Development Board", logo: "🏛️", sector: "Government", interns: 35 },
    { name: "Zipline", logo: "🚁", sector: "Logistics Tech", interns: 22 }
  ];

  const successStories = [
    {
      name: "Jean-Baptiste K.",
      role: "Full-Stack Developer",
      program: "Software Development (TVET)",
      company: "TechCorp Rwanda",
      image: "👨‍💻",
      story: "Started from TVET Level 5, now leading a development team of 8 engineers."
    },
    {
      name: "Grace M.",
      role: "Network Security Analyst",
      program: "Networking & Internet Technology",
      company: "MTN Rwanda",
      image: "👩‍💼",
      story: "My TVET internship opened doors to cybersecurity. Now protecting critical infrastructure."
    },
    {
      name: "Patrick R.",
      role: "Mobile App Developer",
      program: "Mobile Development (University)",
      company: "Startup Hub",
      image: "👨‍🎓",
      story: "Built 3 successful apps during internship. Now running my own tech startup."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      {/* Hero Section */}
    {/* Hero Section */}
    <section className="relative bg-gradient-to-br from-blue-800 via-blue-900 to-gray-900 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* N@tcom Branding */}
              <div className="mb-6 inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <span className="text-white font-semibold">Powered by N@tcom</span>
              </div>

              <h1 className="text-5xl font-bold mb-6 leading-tight">
                <span className="text-white">Launch Your ICT Career with</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-cyan-400">
                  Premium Internships
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Connect TVET students and university graduates with Rwanda's leading tech companies. 
                From software development to cybersecurity - we've got your path covered through N@tcom's proven methodology.
              </p>
              
              <div className="flex gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
                  Find Internships
                </button>
                <button className="border-2 border-cyan-400/50 hover:border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-2xl font-semibold text-lg transition-all">
                  Partner With Us
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex items-center gap-6 text-sm text-blue-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span>Ministry Approved</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span>Industry Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span>TVET Accredited</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Platform Impact</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="text-3xl font-bold text-orange-400 mb-1">3,250+</div>
                  <p className="text-blue-200 text-sm">Students Placed</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">180+</div>
                  <p className="text-blue-200 text-sm">Partner Companies</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="text-3xl font-bold text-red-400 mb-1">92%</div>
                  <p className="text-blue-200 text-sm">Success Rate</p>
                </div>
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">4.9★</div>
                  <p className="text-blue-200 text-sm">Average Rating</p>
                </div>
              </div>

              {/* N@tcom Methodology Badge */}
              <div className="mt-6 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl p-4 border border-orange-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-orange-400" />
                  <span className="text-orange-400 font-semibold">N@tcom Methodology</span>
                </div>
                <p className="text-blue-100 text-sm">
                  Proven learning framework embracing digital possibilities for career advancement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b z-50 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center gap-8">
            <button
              onClick={() => setActiveTab("programs")}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all ${
                activeTab === "programs"
                  ? "bg-emerald-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-emerald-600 hover:bg-emerald-50"
              }`}
            >
              <BookOpen className="w-5 h-5 inline mr-2" />
              Programs
            </button>
            <button
              onClick={() => setActiveTab("partners")}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all ${
                activeTab === "partners"
                  ? "bg-emerald-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-emerald-600 hover:bg-emerald-50"
              }`}
            >
              <Building2 className="w-5 h-5 inline mr-2" />
              Partners
            </button>
            <button
              onClick={() => setActiveTab("success")}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all ${
                activeTab === "success"
                  ? "bg-emerald-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-emerald-600 hover:bg-emerald-50"
              }`}
            >
              <Trophy className="w-5 h-5 inline mr-2" />
              Success Stories
            </button>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      {activeTab === "programs" && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Internship Programs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from specialized ICT programs designed for TVET students and university graduates
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex justify-center gap-4 mb-12">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all ${
                  selectedCategory === "all"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                All Programs
              </button>
              <button
                onClick={() => setSelectedCategory("tvet")}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all ${
                  selectedCategory === "tvet"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                TVET Programs
              </button>
              <button
                onClick={() => setSelectedCategory("university")}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all ${
                  selectedCategory === "university"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                University Programs
              </button>
            </div>

            {/* Programs Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {filteredPrograms.map((program) => {
                const IconComponent = program.icon;
                return (
                  <div
                    key={program.id}
                    className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="bg-gradient-to-br from-emerald-100 to-blue-100 p-4 rounded-2xl">
                        <IconComponent className="w-8 h-8 text-emerald-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                        <p className="text-gray-600 mb-4">{program.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {program.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {program.positions} positions
                          </div>
                          <div className="flex items-center gap-1">
                            <GraduationCap className="w-4 h-4" />
                            {program.level}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Skills You'll Learn:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Partner Companies */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Partner Companies:</h4>
                      <div className="text-sm text-gray-600">
                        {program.companies.join(", ")}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-2xl font-semibold transition-all">
                        Apply Now
                      </button>
                      <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-2xl font-semibold transition-all">
                        Learn More
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Application Process */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 mt-16 text-white">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Simple Application Process</h3>
                <p className="text-xl text-blue-100">Get started in just 4 easy steps</p>
              </div>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Choose Program</h4>
                  <p className="text-blue-100 text-sm">Select your preferred ICT specialization</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Submit Application</h4>
                  <p className="text-blue-100 text-sm">Complete online form with documents</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Assessment</h4>
                  <p className="text-blue-100 text-sm">Technical evaluation and interview</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">4</span>
                  </div>
                  <h4 className="font-semibold mb-2">Start Internship</h4>
                  <p className="text-blue-100 text-sm">Begin your professional journey</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Partners Section */}
      {activeTab === "partners" && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Industry Partners</h2>
              <p className="text-xl text-gray-600">Leading companies partnering with us to shape Rwanda's ICT future</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {partnerCompanies.map((company, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{company.logo}</div>
                    <div>
                      <h3 className="text-xl font-bold">{company.name}</h3>
                      <p className="text-emerald-600 font-medium">{company.sector}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Active Interns</span>
                      <span className="font-bold text-emerald-600">{company.interns}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Partnership Since</span>
                      <span className="font-medium">2019</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Success Rate</span>
                      <span className="font-medium text-green-600">94%</span>
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-emerald-50 hover:bg-emerald-100 text-emerald-600 py-3 rounded-2xl font-semibold transition-all">
                    View Opportunities
                  </button>
                </div>
              ))}
            </div>

            {/* Partnership Benefits */}
            <div className="bg-gray-900 rounded-3xl p-12 text-white">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6">Why Partner With Us?</h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold">Pre-screened Talent Pool</h4>
                        <p className="text-gray-300">Access to Rwanda's best ICT students and graduates</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold">Structured Programs</h4>
                        <p className="text-gray-300">Comprehensive mentorship and evaluation frameworks</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold">Direct Hiring Pipeline</h4>
                        <p className="text-gray-300">Convert top performers into full-time employees</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-2xl p-8">
                  <h4 className="text-2xl font-bold mb-6 text-center">Partnership Impact</h4>
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-emerald-400">180+</div>
                      <p className="text-gray-300">Companies</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-400">3,250+</div>
                      <p className="text-gray-300">Interns Placed</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-400">87%</div>
                      <p className="text-gray-300">Conversion Rate</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-yellow-400">4.8★</div>
                      <p className="text-gray-300">Avg Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Success Stories */}
      {activeTab === "success" && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600">Meet our alumni who are now leading Rwanda's tech transformation</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {successStories.map((story, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{story.image}</div>
                    <div>
                      <h3 className="text-xl font-bold">{story.name}</h3>
                      <p className="text-emerald-600 font-semibold">{story.role}</p>
                      <p className="text-gray-500 text-sm">{story.company}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {story.program}
                    </span>
                  </div>
                  <blockquote className="text-gray-600 italic">
                    "{story.story}"
                  </blockquote>
                </div>
              ))}
            </div>

            {/* Success Metrics */}
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-3xl p-12">
              <h3 className="text-3xl font-bold text-center mb-12">Program Success Metrics</h3>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <GraduationCap className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-emerald-600 mb-2">96%</div>
                  <p className="text-gray-700 font-medium">Completion Rate</p>
                  <p className="text-sm text-gray-500">Students finishing programs</p>
                </div>
                <div>
                  <Trophy className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-blue-600 mb-2">87%</div>
                  <p className="text-gray-700 font-medium">Job Placement</p>
                  <p className="text-sm text-gray-500">Within 3 months</p>
                </div>
                <div>
                  <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-purple-600 mb-2">45%</div>
                  <p className="text-gray-700 font-medium">Salary Increase</p>
                  <p className="text-sm text-gray-500">Average post-internship</p>
                </div>
                <div>
                  <Rocket className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-orange-600 mb-2">3,250+</div>
                  <p className="text-gray-700 font-medium">Alumni Network</p>
                  <p className="text-sm text-gray-500">Growing community</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-emerald-400" />
                <span className="font-bold text-xl">ICT Internships Rwanda</span>
              </div>
              <p className="text-gray-400 mb-6">
                Bridging the gap between ICT education and industry through quality internship programs.
              </p>
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />
                <Mail className="w-6 h-6 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />
                <ExternalLink className="w-6 h-6 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">TVET Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Software Development</li>
                <li>Networking & Internet Tech</li>
                <li>Computer System Architecture</li>
                <li>Multimedia Production</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">University Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Software Engineering</li>
                <li>Web Development</li>
                <li>Mobile App Development</li>
                <li>Data Science & Analytics</li>
                <li>Cybersecurity</li>
                <li>IT Infrastructure & Cloud</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Apply Now</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Partner Companies</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 ICT Internships Rwanda. Empowering the next generation of tech professionals.
              </p>
              <div className="flex gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-emerald-400 transition-colors">Support</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernInternshipPlatform;