import React, { useState } from 'react';
import { Menu, X, Search, BookOpen, Code, Database, Cloud, Shield, Laptop, ChevronRight, Star, Users, Clock, Play } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export default function OnlineLearning() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const categories = [
    { name: "Web Development", icon: Code, color: "bg-blue-900" },
    { name: "Data Science", icon: Database, color: "bg-blue-800" },
    { name: "Cloud Computing", icon: Cloud, color: "bg-blue-900" },
    { name: "Cybersecurity", icon: Shield, color: "bg-blue-800" },
    { name: "IT Fundamentals", icon: Laptop, color: "bg-blue-900" },
  ];

  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      category: "Web Development",
      students: 2543,
      duration: "12 weeks",
      rating: 4.8,
      lessons: 87,
      image: "bg-gradient-to-br from-blue-900 to-blue-700",
      description: "Become a full-stack developer using React, Node, and MongoDB.",
    },
    {
      id: 2,
      title: "Python for Data Analysis",
      category: "Data Science",
      students: 1832,
      duration: "8 weeks",
      rating: 4.9,
      lessons: 64,
      image: "bg-gradient-to-br from-blue-800 to-blue-600",
      description: "Master Python for data manipulation and visualization.",
    },
    {
      id: 3,
      title: "AWS Cloud Practitioner",
      category: "Cloud Computing",
      students: 1654,
      duration: "6 weeks",
      rating: 4.7,
      lessons: 52,
      image: "bg-gradient-to-br from-blue-900 to-blue-700",
      description: "Understand AWS cloud infrastructure and core services.",
    },
    {
      id: 4,
      title: "Ethical Hacking & Security",
      category: "Cybersecurity",
      students: 2103,
      duration: "10 weeks",
      rating: 4.9,
      lessons: 75,
      image: "bg-gradient-to-br from-blue-800 to-blue-600",
      description: "Learn penetration testing and cybersecurity fundamentals.",
    },
    {
      id: 5,
      title: "Network Administration",
      category: "IT Fundamentals",
      students: 987,
      duration: "8 weeks",
      rating: 4.6,
      lessons: 58,
      image: "bg-gradient-to-br from-blue-900 to-blue-700",
      description: "Learn networking, routing, and administration essentials.",
    },
    {
      id: 6,
      title: "React & Modern JavaScript",
      category: "Web Development",
      students: 3201,
      duration: "10 weeks",
      rating: 4.8,
      lessons: 92,
      image: "bg-gradient-to-br from-blue-800 to-blue-600",
      description: "Build dynamic web apps using React and modern JS features.",
    },
  ];

  // ✅ Filter courses by category
  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  // ✅ Handle navigation to module page
  const handleNavigate = (courseId) => {
    // Pass course data via route state
    const selectedCourse = courses.find((c) => c.id === courseId);
    navigate(`/course/${courseId}`, { state: { course: selectedCourse } });
  };
  return (
    <div className="min-h-screen bg-white">
     <Header/>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight">
                Master IT & ICT Skills for the Future
              </h1>
              <p className="text-xl text-blue-200">
                Learn from industry experts and transform your career with our comprehensive online courses
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition flex items-center justify-center">
                  Explore Courses <ChevronRight className="ml-2" />
                </button>
                <button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-semibold transition">
                  Start Free Trial
                </button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-3xl font-bold">10K+</div>
                  <div className="text-blue-300">Students</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-blue-300">Courses</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-blue-300">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-800 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="bg-blue-700 rounded-xl p-6 flex items-center space-x-4">
                    <div className="bg-blue-500 p-3 rounded-lg">
                      <Play className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="font-semibold">Interactive Learning</div>
                      <div className="text-sm text-blue-300">Hands-on projects</div>
                    </div>
                  </div>
                  <div className="bg-blue-700 rounded-xl p-6 flex items-center space-x-4">
                    <div className="bg-blue-500 p-3 rounded-lg">
                      <Users className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="font-semibold">Expert Instructors</div>
                      <div className="text-sm text-blue-300">Industry professionals</div>
                    </div>
                  </div>
                  <div className="bg-blue-700 rounded-xl p-6 flex items-center space-x-4">
                    <div className="bg-blue-500 p-3 rounded-lg">
                      <BookOpen className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="font-semibold">Certificates</div>
                      <div className="text-sm text-blue-300">Recognized credentials</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Course Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`${category.color} hover:opacity-90 text-white p-6 rounded-2xl transition transform hover:scale-105 shadow-lg`}
                >
                  <Icon className="w-12 h-12 mx-auto mb-3" />
                  <div className="font-semibold text-center">{category.name}</div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      {/* Courses Section */}
      <section id="courses" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">
              {selectedCategory === "All" ? "All Courses" : selectedCategory}
            </h2>
            <button
              onClick={() => setSelectedCategory("All")}
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              View All
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden border border-blue-100"
              >
                <div
                  className={`${course.image} h-48 flex items-center justify-center`}
                >
                  <Play className="w-16 h-16 text-white opacity-80 hover:opacity-100 cursor-pointer transition" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-2">
                    {course.category}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-blue-100">
                    <span className="text-sm text-gray-600">
                      {course.lessons} lessons
                    </span>
                    <button
                      onClick={() => handleNavigate(course.id)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition font-semibold flex items-center space-x-2"
                    >
                      <span>View Course</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <div className="text-blue-300">Active Students</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-300">Online Courses</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">25+</div>
              <div className="text-blue-300">Expert Instructors</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-blue-300">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}