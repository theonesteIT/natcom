// onlineModule.jsx
import React, { useState } from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

import {
  BookOpen,
  Menu,
  X,
  Star,
  Users,
  Clock,
  CheckCircle,
  ChevronRight,
  Play,
  Code,
  Laptop,
  Cloud,
  MessageSquare,
  Target,
  Lock,
  Video,
  Award,
  Trophy,
} from "lucide-react";

function OnlineModule({ navigate, courseId }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedModule, setExpandedModule] = useState(null);

  // Course Data
  const coursesData = {
    1: {
      title: "Full Stack Web Development Bootcamp",
      instructor: "Dr. Sarah Johnson",
      rating: 4.8,
      students: 15234,
      duration: "12 weeks",
      level: "Intermediate",
      lastUpdated: "October 2025",
      price: "$89.99",
      enrolled: true,
      progress: 35,
    },
    2: {
      title: "Python for Data Analysis",
      instructor: "Prof. Michael Chen",
      rating: 4.9,
      students: 12500,
      duration: "8 weeks",
      level: "Beginner",
      lastUpdated: "October 2025",
      price: "$79.99",
      enrolled: true,
      progress: 20,
    },
  };

  const courseData = coursesData[courseId] || coursesData[1];

  // Curriculum data
  const curriculum = [
    {
      id: 1,
      title: "Module 1: Introduction to Web Development",
      duration: "2 weeks",
      lessons: 12,
      completed: 8,
      locked: false,
      items: [
        { id: 1, title: "What is Web Development?", type: "video", duration: "15:30", completed: true },
        { id: 2, title: "Setting Up Your Development Environment", type: "video", duration: "22:45", completed: true },
        { id: 3, title: "HTML Fundamentals", type: "video", duration: "35:20", completed: false },
        { id: 4, title: "HTML Practical Exercise", type: "practice", duration: "45 min", completed: false },
        { id: 5, title: "CSS Basics and Styling", type: "video", duration: "28:15", completed: true },
        { id: 6, title: "CSS Layout Challenge", type: "task", duration: "60 min", completed: false },
      ],
    },
    {
      id: 2,
      title: "Module 2: JavaScript Programming",
      duration: "3 weeks",
      lessons: 18,
      completed: 3,
      locked: false,
      items: [
        { id: 13, title: "JavaScript Fundamentals", type: "video", duration: "40:00", completed: false },
        { id: 14, title: "Variables and Data Types", type: "video", duration: "25:30", completed: false },
      ],
    },
  ];

  const practicalAreas = [
    { title: "Coding Labs", description: "Interactive coding environment with real-time feedback", icon: Code, color: "bg-blue-900" },
    { title: "Live Projects", description: "Build real-world applications from scratch", icon: Laptop, color: "bg-blue-800" },
    { title: "Virtual Labs", description: "Access to cloud-based development environments", icon: Cloud, color: "bg-blue-900" },
    { title: "Code Reviews", description: "Get feedback from instructors and peers", icon: MessageSquare, color: "bg-blue-800" },
  ];

  const getTypeIcon = (type) => {
    const icons = {
      video: <Video className="w-4 h-4" />,
      practice: <Code className="w-4 h-4" />,
      task: <Target className="w-4 h-4" />,
      project: <Laptop className="w-4 h-4" />,
    };
    return icons[type] || <BookOpen className="w-4 h-4" />;
  };

  const getTypeColor = (type) => {
    const colors = {
      video: "text-blue-600",
      practice: "text-green-600",
      task: "text-orange-600",
      project: "text-purple-600",
    };
    return colors[type] || "text-gray-600";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
    

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <button onClick={() => navigate("home")} className="text-blue-300 mb-4 hover:text-white flex items-center">
            ← Back to Courses
          </button>
          <h1 className="text-4xl font-bold mb-3">{courseData.title}</h1>
          <p className="text-blue-200 mb-5">Master modern web development with real-world projects</p>

          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span>{courseData.rating}</span>
              <span className="text-blue-300">({courseData.students.toLocaleString()} students)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Instructor: {courseData.instructor}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>{courseData.duration}</span>
            </div>
          </div>

          <div className="bg-blue-800 rounded-full h-3 w-full max-w-md">
            <div className="bg-blue-400 h-3 rounded-full" style={{ width: `${courseData.progress}%` }}></div>
          </div>
          <p className="text-blue-300 text-sm mt-1">{courseData.progress}% Complete</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Tabs */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b overflow-x-auto">
              {["overview", "lessons", "reviews"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 font-semibold whitespace-nowrap ${
                    activeTab === tab
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="p-6 space-y-6">
                <h2 className="text-2xl font-bold text-blue-900 mb-2">Course Description</h2>
                <p className="text-gray-700">
                  This bootcamp will take you from beginner to professional developer with practical projects and real-world skills.
                </p>

                <h3 className="text-xl font-bold text-blue-900 mt-6 mb-2">What You'll Learn</h3>
                <ul className="grid md:grid-cols-2 gap-2">
                  {[
                    "Build responsive websites with HTML & CSS",
                    "Master JavaScript and ES6+ features",
                    "Create dynamic UIs with React",
                    "Develop RESTful APIs with Node.js",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold text-blue-900 mt-6 mb-2">Practical Learning Areas</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {practicalAreas.map((area, idx) => {
                    const Icon = area.icon;
                    return (
                      <div key={idx} className={`${area.color} text-white p-6 rounded-xl`}>
                        <Icon className="w-10 h-10 mb-2" />
                        <h4 className="font-bold">{area.title}</h4>
                        <p className="text-blue-200 text-sm">{area.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Lessons Tab */}
            {activeTab === "lessons" && (
              <div className="p-6 space-y-4">
                {curriculum.map((module) => (
                  <div key={module.id} className="border rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                      className="w-full flex justify-between p-4 bg-gray-50 hover:bg-gray-100"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            module.locked ? "bg-gray-300" : "bg-blue-900"
                          } text-white font-bold`}
                        >
                          {module.locked ? <Lock /> : module.id}
                        </div>
                        <div>
                          <h3 className="font-bold text-blue-900">{module.title}</h3>
                          <div className="flex items-center gap-3 text-sm text-gray-600">
                            <span>{module.lessons} lessons</span>
                            <span>{module.duration}</span>
                            <span className="text-green-600">
                              {module.completed}/{module.lessons} done
                            </span>
                          </div>
                        </div>
                      </div>
                      <ChevronRight className={`transition ${expandedModule === module.id ? "rotate-90" : ""}`} />
                    </button>
                    {expandedModule === module.id && (
                      <div className="p-4 space-y-2 bg-white">
                        {module.items.map((item) => (
                          <div
                            key={item.id}
                            className={`flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 ${
                              item.completed ? "bg-green-50" : ""
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              {item.completed ? (
                                <CheckCircle className="w-5 h-5 text-green-600" />
                              ) : (
                                <div className={`w-5 h-5 ${getTypeColor(item.type)}`}>
                                  {getTypeIcon(item.type)}
                                </div>
                              )}
                              <div>
                                <div className="font-medium">{item.title}</div>
                                <div className="text-sm text-gray-500">
                                  {item.type} • {item.duration}
                                </div>
                              </div>
                            </div>
                            <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                              {item.completed ? "Review" : "Start"}
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === "reviews" && (
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-bold text-blue-900">Student Reviews</h2>
                <p className="text-gray-600">
                  ⭐⭐⭐⭐⭐ "Excellent course! The instructor is great and the content is very practical."
                </p>
                <p className="text-gray-600">
                  ⭐⭐⭐⭐ "Good structure and explanations. Could use more advanced projects."
                </p>
                <p className="text-gray-600">
                  ⭐⭐⭐⭐⭐ "Loved the projects and real-world examples!"
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="aspect-video bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                <Play className="w-20 h-20 text-white opacity-80 cursor-pointer" />
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition">
                Continue Learning
              </button>
              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <div className="flex justify-between"><span>Total Modules:</span><span>6</span></div>
                <div className="flex justify-between"><span>Total Lessons:</span><span>86</span></div>
                <div className="flex justify-between"><span>Certificate:</span><span className="text-green-600 font-semibold">Yes</span></div>
              </div>
            </div>

            {/* Instructor */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-gray-900 mb-3">Your Instructor</h3>
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  SJ
                </div>
                <div>
                  <h4 className="font-bold">{courseData.instructor}</h4>
                  <p className="text-sm text-gray-600">Senior Full Stack Developer</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">15+ years of experience in web development.</p>
            </div>

            {/* Progress */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-gray-900 mb-3">Your Progress</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Lessons Completed</span>
                  <span className="font-semibold text-blue-900">30/86</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "35%" }}></div>
                </div>
              </div>
              <div className="mt-6 border-t pt-4 text-sm text-gray-600">
                <div className="flex items-center justify-between mb-1">
                  <span>Learning Streak</span>
                  <span className="text-2xl">🔥</span>
                </div>
                <div className="text-3xl font-bold text-blue-900 mb-1">7 Days</div>
                <p>Keep it up! You're doing great.</p>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-gray-900 mb-4">Recent Achievements</h3>
              <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">First Module</div>
                  <div className="text-xs text-gray-600">Completed Module 1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Footer */}
    <Footer/>
    </div>
  );
}

export default OnlineModule;