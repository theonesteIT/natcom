import React from "react";
import { useNavigate } from "react-router-dom";
import { Clock, Users, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PopularCourses = () => {
  const navigate = useNavigate();

  const courses = [
    { id: "python-data-analysis", title: "Python for Data Analysis", description: "Hands-on analytics with Pandas and NumPy", duration: "4 weeks", students: 180, rating: 4.7, category: "Data", level: "Beginner" },
    { id: "frontend-web-development", title: "Frontend Web Development", description: "React + Tailwind best practices", duration: "6 weeks", students: 220, rating: 4.8, category: "Web", level: "Intermediate" },
    { id: "cybersecurity-essentials", title: "Cybersecurity Essentials", description: "Threats, hardening, and best practices", duration: "5 weeks", students: 140, rating: 4.6, category: "Security", level: "Beginner" },
    { id: "cloud-fundamentals-azure", title: "Cloud Fundamentals (Azure)", description: "Core services and cloud concepts", duration: "4 weeks", students: 160, rating: 4.7, category: "Cloud", level: "Beginner" },
    { id: "networking-ccna", title: "Networking with CCNA", description: "Routing, switching, and labs", duration: "8 weeks", students: 95, rating: 4.9, category: "Networking", level: "Intermediate" },
    { id: "professional-it-support", title: "Professional IT Support", description: "Helpdesk workflows and tooling", duration: "6 weeks", students: 120, rating: 4.8, category: "IT Support", level: "Beginner" },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Popular & Upcoming Courses</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn in-demand skills with hands-on training and industry alignment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="h-2 bg-darkblue from-brand-500 to-tech-500 to bg-gradient-to-r from-darkblue to-blue-600" />
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                    {course.category}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {course.level}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-brand-600 transition-colors">
                  {course.title}
                </CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.students}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    {course.rating}
                  </span>
                </div>
                <Button
                  className="w-full btn-primary"
                  onClick={() => navigate(`/course/${course.id}`)}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
