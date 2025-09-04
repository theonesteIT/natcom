import React from 'react';
import { Award, Users, Monitor, Building, Briefcase, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesOverview = () => {
  const services = [
    { icon: Award, title: 'Professional IT Certifications', description: 'Industry-recognized certifications from Cisco, CompTIA, Oracle, Microsoft, and more.', features: ['Hands-on experience', 'Career support', 'Flexible schedules'], color: 'text-brand-600', bgGradient: 'from-brand-50 to-brand-100', iconBg: 'bg-gradient-to-br from-brand-500 to-brand-600' },
    { icon: Users, title: 'Upskilling Programs', description: 'Tailored training programs for existing professionals looking to enhance their technical skills.', features: ['Part-time sessions', 'Industry-specific programs', 'Weekend options'], color: 'text-tech-600', bgGradient: 'from-tech-50 to-tech-100', iconBg: 'bg-gradient-to-br from-tech-500 to-tech-600' },
    { icon: Monitor, title: 'Digital Literacy', description: 'Basic computer and internet skills training for non-IT individuals and beginners.', features: ['Easy-to-follow modules', 'Practical exercises', 'Certification included'], color: 'text-purple-600', bgGradient: 'from-purple-50 to-purple-100', iconBg: 'bg-gradient-to-br from-purple-500 to-purple-600' },
    { icon: Building, title: 'Industrial Attachments', description: 'Real-world experience through partnerships with local businesses and organizations.', features: ['Real projects', 'Industry mentoring', 'Networking opportunities'], color: 'text-orange-600', bgGradient: 'from-orange-50 to-orange-100', iconBg: 'bg-gradient-to-br from-orange-500 to-orange-600' },
    { icon: Briefcase, title: 'IT Consultancy Services', description: 'Custom IT solutions and professional advice for businesses and organizations.', features: ['IT strategy', 'System implementation', 'Ongoing support'], color: 'text-green-600', bgGradient: 'from-green-50 to-green-100', iconBg: 'bg-gradient-to-br from-green-500 to-green-600' },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="section-container">
        <div className="text-center mb-20 relative">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-100 to-tech-100 px-6 py-2 text-sm font-semibold text-brand-700 mb-6">
            <Sparkles className="mr-2 h-4 w-4" />
            Our Premium Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-brand-700 to-tech-600 bg-clip-text text-transparent">Comprehensive IT Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive IT training and consultancy services designed to bridge the technology gap 
            and empower individuals and organizations in the digital economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-current to-transparent rounded-full blur-2xl"></div>
              </div>

              <CardHeader className="relative z-10 pb-4">
                <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
              </CardHeader>

              <CardContent className="relative z-10 flex-1 flex flex-col">
                <ul className="space-y-3 mb-8 flex-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className={`w-2 h-2 ${service.iconBg} rounded-full mr-3 flex-shrink-0 shadow-sm`}></div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-white group-hover:text-gray-900 group-hover:border-gray-300 transition-all duration-300 font-semibold py-3 rounded-xl">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-gray-200 transition-all duration-300"></div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-gradient-to-r from-brand-600 to-tech-600 hover:from-brand-700 hover:to-tech-700 text-white px-8 py-4 text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <span className="flex items-center">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;


