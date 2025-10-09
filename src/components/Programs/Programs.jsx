import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Clock, Users, Award, Filter, Search, ChevronDown, Star, 
  Menu, X, BookOpen, GraduationCap, Briefcase, Code, 
  TrendingUp, Shield, Play, ArrowRight, Globe, Mail, 
  Phone, MapPin, Facebook, Twitter, Linkedin, Instagram,
  CheckCircle, Zap, Target, Trophy
} from "lucide-react";

import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const programs = [
  {
    category: "Internship",
    title: "Full-Stack Development Internship",
    desc: "Complete hands-on experience building real applications with modern tech stack, mentorship from senior developers, and guaranteed job placement assistance.",
    duration: "3 months",
    level: "Intermediate",
    students: 245,
    rating: 4.8,
    reviews: 89,
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=240&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "TypeScript"],
    price: "Free",
    originalPrice: "$1200",
    featured: true,
    instructor: "Sarah Johnson",
    outcomes: ["Portfolio Projects", "Job Placement", "Certification"]
  },
  {
    category: "Digital Skills",
    title: "Advanced Web Development Bootcamp",
    desc: "Master modern web development from fundamentals to advanced concepts including React, Next.js, and cloud deployment.",
    duration: "4 months",
    level: "Beginner",
    students: 892,
    rating: 4.9,
    reviews: 234,
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=240&fit=crop",
    tags: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    price: "$299",
    originalPrice: "$599",
    featured: false,
    instructor: "Alex Chen",
    outcomes: ["5 Live Projects", "Industry Certificate", "Career Support"]
  },
  {
    category: "Certification",
    title: "AWS Cloud Solutions Architect",
    desc: "Comprehensive cloud architecture training with hands-on labs, real-world projects, and preparation for AWS certification exam.",
    duration: "6 months",
    level: "Advanced",
    students: 156,
    rating: 4.7,
    reviews: 67,
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=240&fit=crop",
    tags: ["AWS", "Cloud", "DevOps", "Docker", "Kubernetes"],
    price: "$899",
    originalPrice: "$1299",
    featured: true,
    instructor: "Michael Rodriguez",
    outcomes: ["AWS Certification", "Cloud Projects", "Industry Recognition"]
  },
  {
    category: "Digital Skills",
    title: "UI/UX Design Mastery",
    desc: "Learn design thinking, user research, prototyping, and modern design tools to create exceptional user experiences.",
    duration: "3 months",
    level: "Beginner",
    students: 423,
    rating: 4.8,
    reviews: 156,
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=240&fit=crop",
    tags: ["Figma", "Design Systems", "Prototyping", "User Research"],
    price: "$499",
    originalPrice: "$799",
    featured: false,
    instructor: "Emma Thompson",
    outcomes: ["Design Portfolio", "Figma Certification", "Client Projects"]
  },
  {
    category: "Certification",
    title: "Cybersecurity Professional",
    desc: "Advanced cybersecurity training covering ethical hacking, network security, and incident response with industry certifications.",
    duration: "5 months",
    level: "Advanced",
    students: 87,
    rating: 4.9,
    reviews: 43,
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=240&fit=crop",
    tags: ["Ethical Hacking", "Network Security", "Incident Response", "CISSP"],
    price: "$1299",
    originalPrice: "$1899",
    featured: true,
    instructor: "David Kim",
    outcomes: ["Security Certification", "Penetration Testing", "Career Advancement"]
  },
  {
    category: "Internship",
    title: "Data Science & AI Internship",
    desc: "Work with real datasets, build machine learning models, and gain experience in data analysis and artificial intelligence.",
    duration: "4 months",
    level: "Intermediate",
    students: 134,
    rating: 4.6,
    reviews: 78,
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop",
    tags: ["Python", "Machine Learning", "TensorFlow", "Data Analysis"],
    price: "Free",
    originalPrice: "$1500",
    featured: false,
    instructor: "Dr. Lisa Wang",
    outcomes: ["ML Projects", "Data Portfolio", "Industry Mentorship"]
  }
];

const Programs = () => {
  const [levelFilter, setLevelFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const levels = ["All", "Beginner", "Intermediate", "Advanced"];
  const categories = ["All", "Internship", "Digital Skills", "Certification"];

  const filteredPrograms = programs.filter((program) => {
    const matchesLevel = levelFilter === "All" || program.level === levelFilter;
    const matchesCategory = categoryFilter === "All" || program.category === categoryFilter;
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesLevel && matchesCategory && matchesSearch;
  });

  const sortedPrograms = [...filteredPrograms].sort((a, b) => {
    switch (sortBy) {
      case "featured":
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.students - a.students;
      case "popular":
        return b.students - a.students;
      case "rating":
        return b.rating - a.rating;
      case "price-low":
        const priceA = a.price === "Free" ? 0 : parseInt(a.price.replace('$', ''));
        const priceB = b.price === "Free" ? 0 : parseInt(b.price.replace('$', ''));
        return priceA - priceB;
      default:
        return 0;
    }
  });

  const getLevelColor = (level) => {
    switch (level) {
      case "Beginner":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "Intermediate":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "Advanced":
        return "bg-rose-100 text-rose-800 border-rose-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const stats = [
    { icon: Users, label: "Active Students", value: "10K+" },
    { icon: Award, label: "Certificates Issued", value: "5K+" },
    { icon: Trophy, label: "Success Rate", value: "95%" },
    { icon: Globe, label: "Countries", value: "50+" }
  ];

  const calculateSavings = (price, originalPrice) => {
    if (!originalPrice) return 0;
    const currentPrice = price === "Free" ? 0 : parseInt(price.replace('$', ''));
    const original = parseInt(originalPrice.replace('$', ''));
    return Math.round((1 - currentPrice / original) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
    <Header/>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop"
            alt="Students learning"
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
              <span className="text-white font-medium">🔥 New Programs Available Now</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Master Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Future Skills
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
            Join thousands of students advancing their careers with industry-leading training programs. 
            From coding bootcamps to professional certifications, unlock your potential today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <BookOpen className="w-5 h-5 mr-2" />
              Explore Programs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 rounded-full px-8 py-4 text-lg font-semibold">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-blue-300 mb-3 mx-auto" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative z-10 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Sidebar */}
            <div className="lg:w-80 space-y-6">
              <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-md">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                      <Filter className="w-4 h-4 text-white" />
                    </div>
                    Smart Filters
                  </h3>
                  
                  {/* Search */}
                  <div className="mb-8">
                    <label className="block text-sm font-semibold mb-3 text-gray-800">Search Programs</label>
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search by title, skills, or instructor..."
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-gray-800 placeholder-gray-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Level Filter */}
                  <div className="mb-8">
                    <label className="block text-sm font-semibold mb-4 text-gray-800">Difficulty Level</label>
                    <div className="space-y-3">
                      {levels.map((level) => (
                        <button
                          key={level}
                          onClick={() => setLevelFilter(level)}
                          className={`w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] ${
                            levelFilter === level
                              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl"
                              : "bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 text-gray-700 shadow-lg"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-semibold">{level}</span>
                            {level !== "All" && (
                              <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                                levelFilter === level 
                                  ? "bg-white/20 text-white border border-white/30" 
                                  : getLevelColor(level)
                              }`}>
                                {programs.filter(p => level === "All" || p.level === level).length}
                              </span>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="mb-8">
                    <label className="block text-sm font-semibold mb-4 text-gray-800">Program Type</label>
                    <div className="space-y-3">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setCategoryFilter(category)}
                          className={`w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] ${
                            categoryFilter === category
                              ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl"
                              : "bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 text-gray-700 shadow-lg"
                          }`}
                        >
                          <span className="font-semibold">{category}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sort Options */}
                  <div>
                    <label className="block text-sm font-semibold mb-4 text-gray-800">Sort By</label>
                    <div className="relative">
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full px-5 py-4 border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 appearance-none bg-white text-gray-800 font-medium shadow-lg"
                      >
                        <option value="featured">🌟 Featured First</option>
                        <option value="popular">🔥 Most Popular</option>
                        <option value="rating">⭐ Highest Rated</option>
                        <option value="price-low">💰 Price: Low to High</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Premium Training Programs
                  </h2>
                  <p className="text-gray-600 text-lg">
                    {sortedPrograms.length} world-class programs available
                  </p>
                </div>
              </div>

              {/* Programs Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {sortedPrograms.map((program, idx) => (
                  <Card key={idx} className="group shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 bg-white/95 backdrop-blur-md overflow-hidden transform hover:scale-[1.02] relative">
                    {/* Featured Badge */}
                    {program.featured && (
                      <div className="absolute top-4 left-4 z-10">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                          ⭐ Featured
                        </div>
                      </div>
                    )}
                    
                    <div className="relative overflow-hidden">
                      <img
                        src={program.img}
                        alt={program.title}
                        className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="absolute top-4 right-4 space-y-2">
                        <span className={`block px-4 py-2 rounded-full text-sm font-bold border-2 backdrop-blur-sm ${getLevelColor(program.level)}`}>
                          {program.level}
                        </span>
                      </div>
                      
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <Button className="w-full bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white hover:text-gray-900 rounded-xl font-semibold">
                          <Play className="w-4 h-4 mr-2" />
                          Preview Course
                        </Button>
                      </div>
                    </div>
                    
                    <CardContent className="p-8">
                      <div className="mb-4">
                        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-2 rounded-full">
                          {program.category}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                        {program.title}
                      </h3>
                      
                      <p className="text-gray-600 text-base mb-6 leading-relaxed">
                        {program.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {program.tags.slice(0, 4).map((tag, tagIdx) => (
                          <span key={tagIdx} className="text-sm bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-2 rounded-lg font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Outcomes */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-800 mb-3">What You'll Achieve:</h4>
                        <div className="space-y-2">
                          {program.outcomes.map((outcome, outcomeIdx) => (
                            <div key={outcomeIdx} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Instructor */}
                      <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Instructor</p>
                            <p className="font-semibold text-gray-900">{program.instructor}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span className="font-medium">{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span className="font-medium">{program.students} students</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="font-medium">{program.rating} ({program.reviews})</span>
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <span className="text-3xl font-bold text-gray-900">
                            {program.price}
                          </span>
                          {program.originalPrice && (
                            <span className="text-lg text-gray-500 line-through ml-2">
                              {program.originalPrice}
                            </span>
                          )}
                        </div>
                        {program.originalPrice && (
                          <div className="text-right">
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                              Save {calculateSavings(program.price, program.originalPrice)}%
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl font-bold py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                        <Target className="w-5 h-5 mr-2" />
                        Enroll Now
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* No Results */}
              {sortedPrograms.length === 0 && (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No programs found</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
                  <Button
                    onClick={() => {
                      setLevelFilter("All");
                      setCategoryFilter("All");
                      setSearchTerm("");
                    }}
                    variant="outline"
                    className="rounded-xl"
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Programs;