import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Star, Clock, Users, Play, CheckCircle, BookOpen, Trophy } from "lucide-react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

// ✅ Mock course data (later replace with API/DB)
const courseData = {
    "python-data-analysis": {
      title: "Python for Data Analysis",
      description: "Master data analytics with Python, Pandas, and NumPy in this comprehensive hands-on course",
      category: "Data Science",
      rating: 4.8,
      reviews: 2847,
      students: 18420,
      price: 8,
      originalPrice: 50,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=500&fit=crop",
      instructor: {
        name: "THEONESTE ISHIMWE",
        role: "Senior Data Scientist at Natcom",
        bio: "Bachelor Degree in Computer Science with 10+ years of experience in data analytics, machine learning, and statistical modeling. Published researcher with 50+ papers.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hakim&backgroundColor=ffd93d,6bcf7f,74d0f1",
        rating: 4.9,
        courses: 12,
        students: 45000,
      },
      outcomes: [
        "Master data manipulation and analysis with Pandas",
        "Perform advanced numerical computations with NumPy",
        "Build real-world data analysis and visualization projects",
        "Apply statistical methods and machine learning basics",
        "Create professional data reports and dashboards",
        "Handle large datasets efficiently and effectively"
      ],
      features: [
        "24/7 Support",
        "Certificate of Completion",
        "Lifetime Access",
        "Mobile & Desktop",
        "Downloadable Resources",
        "Project-Based Learning"
      ],
      levels: {
        Beginner: [
          { title: "Introduction to Python & Environment Setup", duration: "2h 30m", lessons: 8, preview: true },
          { title: "Python Fundamentals for Data Science", duration: "3h 15m", lessons: 12 },
          { title: "Getting Started with Pandas", duration: "4h", lessons: 15 },
        ],
        Intermediate: [
          { title: "Advanced Data Cleaning & Preprocessing", duration: "4h 45m", lessons: 18 },
          { title: "Exploratory Data Analysis Techniques", duration: "3h 30m", lessons: 14 },
          { title: "Data Visualization with Matplotlib & Seaborn", duration: "5h", lessons: 20 },
        ],
        Expert: [
          { title: "Machine Learning Integration with Scikit-learn", duration: "6h 15m", lessons: 24 },
          { title: "Advanced Statistical Analysis", duration: "4h 30m", lessons: 16 },
          { title: "Capstone: End-to-End Data Analytics Project", duration: "8h", lessons: 12 },
        ],
      },
    },
  
    "frontend-web-development": {
      title: "Frontend Web Development",
      description: "Build modern, responsive web applications with React, TypeScript, and Tailwind CSS",
      category: "Web Development",
      rating: 4.6,
      reviews: 1923,
      students: 12340,
      price: 8,
      originalPrice: 12,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=500&fit=crop",
      instructor: {
        name: "Obed UWIHANGANYE",
        role: "Senior Frontend Engineer at Natcom",
        bio: "Fullstack engineer specializing in React ecosystem, TypeScript, and modern frontend architecture. Former tech lead with 8+ years of experience.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hakim&backgroundColor=ffd93d,6bcf7f,74d0f1",
        rating: 4.8,
        courses: 8,
        students: 28500,
      },
      outcomes: [
        "Build modern React applications with TypeScript",
        "Master responsive design with Tailwind CSS",
        "Implement advanced state management patterns",
        "Create reusable, scalable UI component libraries",
        "Deploy production-ready applications",
        "Follow industry best practices and patterns"
      ],
      features: [
        "24/7 Support",
        "Certificate of Completion", 
        "Lifetime Access",
        "Mobile & Desktop",
        "Downloadable Resources",
        "Project-Based Learning"
      ],
      levels: {
        Beginner: [
          { title: "Modern HTML5 & CSS3 Fundamentals", duration: "3h", lessons: 10, preview: true },
          { title: "JavaScript ES6+ Essentials", duration: "4h 30m", lessons: 16 },
          { title: "Introduction to React & JSX", duration: "3h 45m", lessons: 14 },
        ],
        Intermediate: [
          { title: "React Hooks & State Management", duration: "5h 15m", lessons: 20 },
          { title: "Component Architecture & Design Patterns", duration: "4h", lessons: 16 },
          { title: "Styling with Tailwind CSS", duration: "3h 30m", lessons: 12 },
        ],
        Expert: [
          { title: "Advanced React Patterns & Performance", duration: "6h", lessons: 22 },
          { title: "TypeScript Integration & Best Practices", duration: "4h 45m", lessons: 18 },
          { title: "Production Deployment & CI/CD", duration: "3h 15m", lessons: 10 },
        ],
      },
    },
  
    "cybersecurity-essentials": {
      title: "Cybersecurity Essentials",
      description: "Learn to secure systems, protect networks, and defend against cyber threats in this practical, hands-on cybersecurity course.",
      category: "Cybersecurity",
      rating: 4.7,
      reviews: 1342,
      students: 10250,
      price: 10,
      originalPrice: 15,
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=1200&h=500&fit=crop",
      instructor: {
        name: "Dr. Michael Reed",
        role: "Cybersecurity Specialist & Ethical Hacker",
        bio: "Over 12 years of experience in cybersecurity, ethical hacking, and threat analysis. Certified CISSP & CEH. Passionate about teaching security best practices and real-world defense strategies.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hakim&backgroundColor=ffd93d,6bcf7f,74d0f1",
        rating: 4.9,
        courses: 10,
        students: 35000,
      },
      outcomes: [
        "Understand core cybersecurity concepts and principles",
        "Identify and mitigate common security threats and vulnerabilities",
        "Implement network security measures and firewalls",
        "Perform ethical hacking and penetration testing",
        "Secure operating systems, web applications, and cloud environments",
        "Gain hands-on experience with security tools and monitoring systems"
      ],
      features: [
        "24/7 Support",
        "Certificate of Completion",
        "Lifetime Access",
        "Mobile & Desktop",
        "Downloadable Resources",
        "Hands-On Labs & Projects"
      ],
      levels: {
        Beginner: [
          { title: "Introduction to Cybersecurity", duration: "2h 30m", lessons: 6, preview: true },
          { title: "Cyber Threat Landscape", duration: "3h", lessons: 8 },
          { title: "Basic Networking Security", duration: "3h 45m", lessons: 10 },
        ],
        Intermediate: [
          { title: "Vulnerability Assessment & Penetration Testing", duration: "5h", lessons: 14 },
          { title: "Network Defense & Firewalls", duration: "4h 30m", lessons: 12 },
          { title: "Operating System Security", duration: "4h", lessons: 10 },
        ],
        Expert: [
          { title: "Advanced Ethical Hacking", duration: "6h 30m", lessons: 18 },
          { title: "Web Application Security & OWASP", duration: "5h 45m", lessons: 16 },
          { title: "Incident Response & Forensics", duration: "6h", lessons: 12 },
        ],
      },
    },
  
    "cloud-fundamentals-azure": {
      title: "Cloud Fundamentals (Azure)",
      description: "Learn the core concepts of cloud computing and Microsoft Azure services with hands-on labs and real-world examples.",
      category: "Cloud Computing",
      rating: 4.7,
      reviews: 1530,
      students: 11250,
      price: 10,
      originalPrice: 15,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=500&fit=crop",
      instructor: {
        name: "Sarah Williams",
        role: "Cloud Solutions Architect",
        bio: "Expert in Microsoft Azure with 10+ years in cloud architecture, migration, and infrastructure design. Certified Azure Solutions Architect Expert.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hakim&backgroundColor=ffd93d,6bcf7f,74d0f1",
        rating: 4.8,
        courses: 9,
        students: 42000,
      },
      outcomes: [
        "Understand cloud computing concepts and deployment models",
        "Master core Azure services like VMs, Storage, and Networking",
        "Deploy and manage cloud resources in Azure",
        "Implement security and identity management",
        "Monitor, optimize, and troubleshoot cloud environments",
        "Prepare for Azure Fundamentals certification"
      ],
      features: [
        "24/7 Support",
        "Certificate of Completion",
        "Lifetime Access",
        "Mobile & Desktop",
        "Hands-on Labs",
        "Downloadable Resources"
      ],
      levels: {
        Beginner: [
          { title: "Introduction to Cloud Computing", duration: "2h", lessons: 5, preview: true },
          { title: "Getting Started with Azure", duration: "3h", lessons: 8 },
          { title: "Azure Core Services Overview", duration: "3h 30m", lessons: 10 },
        ],
        Intermediate: [
          { title: "Azure Networking & Security Basics", duration: "4h", lessons: 12 },
          { title: "Storage Solutions & Databases", duration: "4h 15m", lessons: 10 },
          { title: "Resource Management & Monitoring", duration: "3h 45m", lessons: 8 },
        ],
        Expert: [
          { title: "Advanced Cloud Architecture", duration: "5h 30m", lessons: 12 },
          { title: "Cost Optimization & Governance", duration: "4h 30m", lessons: 10 },
          { title: "Azure Certification Prep", duration: "3h 45m", lessons: 6 },
        ],
      },
    },
  
    "networking-ccna": {
      title: "Networking with CCNA",
      description: "Master networking fundamentals, routing, switching, and prepare for CCNA certification with practical labs.",
      category: "Networking",
      rating: 4.6,
      reviews: 1820,
      students: 9700,
      price: 10,
      originalPrice: 15,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=500&fit=crop",
      instructor: {
        name: "John Carter",
        role: "Network Engineer & CCNA Trainer",
        bio: "CCNA certified with 12+ years of experience in network administration, routing, and switching. Experienced in training IT professionals and students.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hakim&backgroundColor=ffd93d,6bcf7f,74d0f1",
        rating: 4.7,
        courses: 7,
        students: 25000,
      },
      outcomes: [
        "Understand network fundamentals and topologies",
        "Configure routers and switches effectively",
        "Implement IP addressing and subnetting",
        "Manage VLANs and routing protocols",
        "Troubleshoot network issues",
        "Prepare for CCNA certification"
      ],
      features: [
        "24/7 Support",
        "Certificate of Completion",
        "Lifetime Access",
        "Hands-on Labs",
        "Downloadable Resources",
        "Project-Based Learning"
      ],
      levels: {
        Beginner: [
          { title: "Networking Fundamentals & Protocols", duration: "2h 30m", lessons: 6, preview: true },
          { title: "IP Addressing & Subnetting", duration: "3h 15m", lessons: 8 },
          { title: "Basic Router & Switch Configuration", duration: "4h", lessons: 10 },
        ],
        Intermediate: [
          { title: "VLANs & Inter-VLAN Routing", duration: "4h 45m", lessons: 12 },
          { title: "Dynamic Routing Protocols (RIP, OSPF)", duration: "5h", lessons: 14 },
          { title: "Network Security Basics", duration: "3h 30m", lessons: 8 },
        ],
        Expert: [
          { title: "Advanced Routing & Switching Labs", duration: "6h", lessons: 12 },
          { title: "WAN Technologies & Troubleshooting", duration: "5h 15m", lessons: 10 },
          { title: "CCNA Certification Prep Labs", duration: "4h 30m", lessons: 6 },
        ],
      },
    },
  
    "professional-it-support": {
      title: "Professional IT Support",
      description: "Learn IT support essentials, troubleshooting, helpdesk workflows, and industry-standard tools for a professional IT career.",
      category: "IT Support",
      rating: 4.5,
      reviews: 980,
      students: 8100,
      price: 10,
      originalPrice: 14,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=500&fit=crop",
      instructor: {
        name: "Emma Thompson",
        role: "IT Support Specialist",
        bio: "Experienced IT support engineer with 8+ years providing helpdesk, troubleshooting, and system administration for businesses of all sizes.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hakim&backgroundColor=ffd93d,6bcf7f,74d0f1",
        rating: 4.6,
        courses: 6,
        students: 20000,
      },
      outcomes: [
        "Understand IT support workflows and best practices",
        "Troubleshoot hardware, software, and network issues",
        "Use helpdesk tools and ticketing systems efficiently",
        "Manage Windows & Linux environments",
        "Provide professional customer support",
        "Implement basic cybersecurity measures"
      ],
      features: [
        "24/7 Support",
        "Certificate of Completion",
        "Lifetime Access",
        "Hands-on Labs",
        "Downloadable Resources",
        "Project-Based Learning"
      ],
      levels: {
        Beginner: [
          { title: "IT Support Fundamentals", duration: "2h 15m", lessons: 5, preview: true },
          { title: "Operating Systems Basics", duration: "3h", lessons: 7 },
          { title: "Hardware Troubleshooting", duration: "3h 45m", lessons: 9 },
        ],
        Intermediate: [
          { title: "Software & Network Troubleshooting", duration: "4h 30m", lessons: 12 },
          { title: "Helpdesk Tools & Ticketing", duration: "3h 30m", lessons: 10 },
          { title: "System Administration Basics", duration: "4h", lessons: 8 },
        ],
        Expert: [
          { title: "Advanced IT Support Labs", duration: "5h 45m", lessons: 12 },
          { title: "Enterprise Support & Security", duration: "5h", lessons: 10 },
          { title: "IT Support Certification Prep", duration: "4h 30m", lessons: 6 },
        ],
      },
    },
  };
  

  

const CourseDetailsPage = () => {
  const { id } = useParams();
  const course = courseData[id];
  const [selectedLevel, setSelectedLevel] = useState("Beginner");
  const [enrollOpen, setEnrollOpen] = useState(false);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100">
        <div className="text-center p-8">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-red-800 mb-2">Course not found</h1>
          <p className="text-red-600">The course you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const totalLessons = Object.values(course.levels).flat().reduce((acc, module) => acc + module.lessons, 0);
  const totalDuration = Object.values(course.levels).flat().reduce((acc, module) => {
    const hours = parseFloat(module.duration);
    return acc + hours;
  }, 0);

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 min-h-screen">
      {/* Header */}
      <Header />

      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-indigo-900/70 z-10"></div>
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-96 lg:h-[500px] object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="max-w-4xl">
              <Badge className="mb-4 bg-blue-600/90 hover:bg-blue-600 text-white border-blue-500 text-sm px-3 py-1">
                {course.category}
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {course.title}
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl">
                {course.description}
              </p>
              
              {/* Stats Row */}
              <div className="flex flex-wrap gap-6 lg:gap-8 text-white/90">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-sm">({course.reviews.toLocaleString()} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span className="text-sm">{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm">{Math.round(totalDuration)}h total</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  <span className="text-sm">{totalLessons} lessons</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Course Highlights */}
            <section className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Trophy className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                  <p className="font-semibold text-slate-800">Certificate</p>
                  <p className="text-sm text-slate-600 mt-1">Upon completion</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                  <p className="font-semibold text-slate-800">Self-paced</p>
                  <p className="text-sm text-slate-600 mt-1">Learn at your speed</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <p className="font-semibold text-slate-800">Community</p>
                  <p className="text-sm text-slate-600 mt-1">Join thousands</p>
                </CardContent>
              </Card>
            </section>

            {/* Level Selection */}
            <section className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-2">Choose Your Learning Path</h2>
                <p className="text-slate-600">Select the level that matches your current experience</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                {["Beginner", "Intermediate", "Expert"].map((level) => (
                  <Card
                    key={level}
                    className={`cursor-pointer transition-all duration-300 border-2 hover:scale-105 hover:shadow-lg ${
                      selectedLevel === level 
                        ? "border-blue-500 shadow-lg bg-blue-50/50 ring-2 ring-blue-200" 
                        : "border-slate-200 hover:border-blue-300 bg-white/80"
                    }`}
                    onClick={() => setSelectedLevel(level)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center ${
                        selectedLevel === level ? "bg-blue-500" : "bg-slate-100"
                      }`}>
                        <div className={`w-6 h-6 rounded-full ${
                          selectedLevel === level ? "bg-white" : "bg-slate-400"
                        }`}></div>
                      </div>
                      <h3 className="font-bold text-lg text-slate-800">{level}</h3>
                      <p className="text-sm text-slate-600 mt-1">
                        {course.levels[level].length} modules
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Course Modules */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800">
                {selectedLevel} Level Curriculum
              </h3>
              
              <div className="space-y-4">
                {course.levels[selectedLevel].map((module, idx) => (
                  <Card key={idx} className="border-0 shadow-md bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm">
                              {idx + 1}
                            </div>
                            <h4 className="font-semibold text-lg text-slate-800 group-hover:text-blue-600 transition-colors">
                              {module.title}
                            </h4>
                            {module.preview && (
                              <Badge variant="secondary" className="bg-green-100 text-green-700">
                                Free Preview
                              </Badge>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-6 text-sm text-slate-600 ml-11">
                            <div className="flex items-center gap-1">
                              <BookOpen className="w-4 h-4" />
                              <span>{module.lessons} lessons</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{module.duration}</span>
                            </div>
                          </div>
                        </div>
                        
                        {module.preview && (
                          <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                            <Play className="w-4 h-4 mr-1" />
                            Preview
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Learning Outcomes */}
            <section className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">What You'll Learn</h3>
                <p className="text-slate-600">Key skills and knowledge you'll gain from this course</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {course.outcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-white/60 rounded-lg hover:bg-white/80 transition-colors">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{outcome}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Instructor */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800">Meet Your Instructor</h3>
              
              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="relative">
                      <img
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-3 border-white flex items-center justify-center">
                        <Star className="w-4 h-4 text-white fill-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-slate-800 mb-1">
                        {course.instructor.name}
                      </h4>
                      <p className="text-blue-600 font-medium mb-3">
                        {course.instructor.role}
                      </p>
                      
                      <div className="flex items-center gap-6 mb-4 text-sm text-slate-600">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{course.instructor.rating}</span>
                        </div>
                        <div>{course.instructor.courses} courses</div>
                        <div>{course.instructor.students.toLocaleString()} students</div>
                      </div>
                      
                      <p className="text-slate-700 leading-relaxed">
                        {course.instructor.bio}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Enhanced Sidebar */}
          <aside className="lg:sticky lg:top-24 h-fit">
            <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-bold">${course.price}</span>
                  <span className="text-lg line-through text-blue-200">${course.originalPrice}</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-blue-200">({course.reviews.toLocaleString()} reviews)</span>
                  <span className="text-blue-200">Registration Only</span>
                </div>
                
                <Button
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setEnrollOpen(true)}
                >
                  Enroll Now
                </Button>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="text-center text-sm text-slate-600 mb-4">
                  30-day money-back guarantee
                </div>
                
                <div className="space-y-3">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </aside>
        </div>
      </div>

      {/* Enhanced Enrollment Modal */}
      <Dialog open={enrollOpen} onOpenChange={setEnrollOpen}>
        <DialogContent className="max-w-lg rounded-2xl shadow-2xl border-0">
          <DialogHeader className="pb-6">
            <DialogTitle className="text-2xl font-bold text-slate-800 text-center">
              Enroll in {course.title}
            </DialogTitle>
            <p className="text-slate-600 text-center mt-2">
              Start your learning journey today!
            </p>
          </DialogHeader>
          
          <form className="space-y-5">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-600">Course Price:</span>
                <span className="font-semibold text-slate-800">${course.price}</span>
              </div>
              <div className="text-xs text-slate-500">
                Includes lifetime access and certificate
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Complete Registration - {course.price}
            </Button>
            
            <p className="text-xs text-center text-slate-500">
              By enrolling, you agree to our Terms of Service and Privacy Policy
            </p>
          </form>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CourseDetailsPage;