import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const containerRef = useRef(null);

  const testimonials = [
    { name: 'Aline Uwase', role: 'TVET Graduate, IT Support', photo: '/testimonial.jpg', message: 'The CompTIA A+ track gave me the confidence and hands-on skills to secure my first helpdesk role.' },
    { name: 'Eric Niyonsenga', role: 'Network Technician', photo: '/testimonial.jpg', message: 'CCNA labs and mentorship were on point. I now manage small office networks reliably.' },
    { name: 'TechCorp Ltd', role: 'Employer Partner', photo: '/testimonial.jpg', message: 'Graduates demonstrate strong fundamentals and practical skills—great additions to our team.' },
    { name: 'Divine I.', role: 'Cloud Intern', photo: '/testimonial.jpg', message: 'Azure fundamentals helped me understand cloud basics and land an internship.' },
  ];

  const scrollByCards = (direction) => {
    const container = containerRef.current;
    if (!container) return;
    const cardWidth = container.firstChild ? container.firstChild.getBoundingClientRect().width : 300;
    container.scrollBy({ left: direction * (cardWidth + 16), behavior: 'smooth' });
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="section-container">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="mb-2">Testimonials & Success Stories</h2>
            <p className="text-muted-foreground">Real feedback from students and hiring partners.</p>
          </div>
          <div className="hidden md:flex gap-2">
            <Button variant="outline" onClick={() => scrollByCards(-1)} aria-label="Previous">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" onClick={() => scrollByCards(1)} aria-label="Next">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative">
          <div ref={containerRef} className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2">
            {testimonials.map((t, i) => (
              <Card key={i} className="min-w-[300px] max-w-[340px] snap-start shrink-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img src={t.photo} alt={t.name} className="h-12 w-12 rounded-full object-cover border" />
                    <div>
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-sm text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">“{t.message}”</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="md:hidden flex justify-center gap-3 mt-6">
            <Button size="sm" variant="outline" onClick={() => scrollByCards(-1)} aria-label="Previous">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="outline" onClick={() => scrollByCards(1)} aria-label="Next">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


