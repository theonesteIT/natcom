import React from 'react';
import { Clock, Users, Star, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FeaturedCourses = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="mb-4">Featured Courses</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our most popular IT certification courses designed by industry experts 
            to help you advance your career in technology.
          </p>
        </div>

        {/* Grid of course cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* CompTIA A+ Certification */}
          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="aspect-video relative bg-gray-200 flex items-center justify-center">
              {/* Replace with your image later */}
              <img src="/comptia.png" alt="CompTIA A+ Certification" className="w-full h-full object-cover" /> 
             
              <div className="absolute top-4 left-4">
              <Badge
  variant="secondary"
  className="bg-blue-900 text-white hover:bg-blue-900/80 transition duration-300"
>
  IT Support
</Badge>
              </div>
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="bg-white/90 border-white/90 text-gray-900">Beginner</Badge>
              </div>
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg group-hover:text-brand-600 transition-colors">
                CompTIA A+ Certification
              </CardTitle>
              <CardDescription className="text-sm">
                Complete foundation course for IT support professionals
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>6 weeks</span></div>
                <div className="flex items-center space-x-1"><Users className="h-4 w-4" /><span>120</span></div>
                <div className="flex items-center space-x-1"><Star className="h-4 w-4 text-yellow-500 fill-current" /><span>4.8</span></div>
              </div>
              <div className="flex justify-end">
                <Button size="sm" className="btn-primary">Enroll Now</Button>
              </div>
            </CardContent>
          </Card>

          {/* Cisco CCNA Networking */}
          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="aspect-video relative bg-gray-200 flex items-center justify-center">
            <img src="/ccna.png" alt="CompTIA A+ Certification" className="w-full h-full object-cover" /> 
              <div className="absolute top-4 left-4">
              <Badge
  variant="secondary"
  className="bg-blue-900 text-white hover:bg-blue-900/80 transition duration-300"
>
  Networking
</Badge>
              </div>
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="bg-white/90 border-white/90 text-gray-900">Intermediate</Badge>
              </div>
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg group-hover:text-brand-600 transition-colors">
                Cisco CCNA Networking
              </CardTitle>
              <CardDescription className="text-sm">
                Professional networking certification for network administrators
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>8 weeks</span></div>
                <div className="flex items-center space-x-1"><Users className="h-4 w-4" /><span>95</span></div>
                <div className="flex items-center space-x-1"><Star className="h-4 w-4 text-yellow-500 fill-current" /><span>4.9</span></div>
              </div>
              <div className="flex justify-end">
                <Button size="sm" className="btn-primary">Enroll Now</Button>
              </div>
            </CardContent>
          </Card>

          {/* Microsoft Azure Fundamentals */}
          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="aspect-video relative bg-gray-200 flex items-center justify-center">
            <img src="/azure.jpg" alt="CompTIA A+ Certification" className="w-full h-full object-cover" /> 
              <div className="absolute top-4 left-4">
              <Badge
  variant="secondary"
  className="bg-blue-900 text-white hover:bg-blue-900/80 transition duration-300"
>
  Cloud Computing
</Badge>

              </div>
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="bg-white/90 border-white/90 text-gray-900">Beginner</Badge>
              </div>
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg group-hover:text-brand-600 transition-colors">
                Microsoft Azure Fundamentals
              </CardTitle>
              <CardDescription className="text-sm">
                Cloud computing essentials and Azure services overview
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>4 weeks</span></div>
                <div className="flex items-center space-x-1"><Users className="h-4 w-4" /><span>150</span></div>
                <div className="flex items-center space-x-1"><Star className="h-4 w-4 text-yellow-500 fill-current" /><span>4.7</span></div>
              </div>
              <div className="flex justify-end">
                <Button size="sm" className="btn-primary">Enroll Now</Button>
              </div>
            </CardContent>
          </Card>

          {/* Cyber Security Essentials */}
          <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="aspect-video relative bg-gray-200 flex items-center justify-center">
            <img src="/cybersecurity.jpg" alt="CompTIA A+ Certification" className="w-full h-full object-cover" /> 
              <div className="absolute top-4 left-4">
              <Badge
  variant="secondary"
  className="bg-blue-900 text-white hover:bg-blue-900/80 transition duration-300"
>
 Cyber Security
</Badge>
              </div>
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="bg-white/90 border-white/90 text-gray-900">Beginner</Badge>
              </div>
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg group-hover:text-brand-600 transition-colors">
                Cyber Security Essentials
              </CardTitle>
              <CardDescription className="text-sm">
                Learn the fundamentals of cybersecurity, threats, and protection methods
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>5 weeks</span></div>
                <div className="flex items-center space-x-1"><Users className="h-4 w-4" /><span>180</span></div>
                <div className="flex items-center space-x-1"><Star className="h-4 w-4 text-yellow-500 fill-current" /><span>4.8</span></div>
              </div>
              <div className="flex justify-end">
                <Button size="sm" className="btn-primary">Enroll Now</Button>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Button className="btn-secondary">
            View All Courses
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
