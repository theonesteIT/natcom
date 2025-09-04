import React, { useMemo, useState } from 'react';
import Header from '@/components/Layout/Header.jsx';
import Footer from '@/components/Layout/Footer.jsx';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

const ALL_PROGRAMS = [
  // Internship Programs
  { id: 'intern-dev', category: 'Internship', level: 'Beginner', durationCategory: '3–6 months', duration: '3 months', title: 'Internship: Software Development', description: 'Hands-on software projects for TVET students.', image: '/placeholder.svg' },
  { id: 'intern-systems', category: 'Internship', level: 'Intermediate', durationCategory: '3–6 months', duration: '4 months', title: 'Internship: Computer Systems & Architecture', description: 'Practical systems assembly and troubleshooting.', image: '/placeholder.svg' },
  { id: 'intern-network', category: 'Internship', level: 'Intermediate', durationCategory: '3–6 months', duration: '4 months', title: 'Internship: Networking & Internet Technology', description: 'Real networking labs and routing basics.', image: '/placeholder.svg' },
  // Digital Skills
  { id: 'ds-web-basics', category: 'Digital Skills', level: 'Beginner', durationCategory: 'Short-term', duration: '4 weeks', title: 'Web Development Basics', description: 'HTML, CSS, and intro to interactivity.', image: '/placeholder.svg' },
  { id: 'ds-office', category: 'Digital Skills', level: 'Beginner', durationCategory: 'Short-term', duration: '3 weeks', title: 'Office Productivity Tools', description: 'Docs, spreadsheets, and presentations.', image: '/placeholder.svg' },
  { id: 'ds-literacy', category: 'Digital Skills', level: 'Beginner', durationCategory: 'Short-term', duration: '2 weeks', title: 'Digital Literacy & Online Safety', description: 'Safe, effective computer and internet use.', image: '/placeholder.svg' },
  // Certifications
  { id: 'cert-ccna', category: 'Certifications', level: 'Intermediate', durationCategory: '3–6 months', duration: '8 weeks', title: 'CCNA (Networking)', description: 'Routing, switching, and network fundamentals.', image: '/placeholder.svg' },
  { id: 'cert-comptia-a', category: 'Certifications', level: 'Beginner', durationCategory: '3–6 months', duration: '6 weeks', title: 'CompTIA A+', description: 'Foundations in IT support and troubleshooting.', image: '/placeholder.svg' },
  { id: 'cert-cyber', category: 'Certifications', level: 'Beginner', durationCategory: '3–6 months', duration: '6 weeks', title: 'Cybersecurity Foundations', description: 'Security basics, threats, and mitigation.', image: '/placeholder.svg' },
  { id: 'cert-iot', category: 'Certifications', level: 'Intermediate', durationCategory: '3–6 months', duration: '6 weeks', title: 'IoT Development', description: 'Sensors, devices, and data flow essentials.', image: '/placeholder.svg' },
  { id: 'cert-aiml', category: 'Certifications', level: 'Beginner', durationCategory: 'Short-term', duration: '4 weeks', title: 'AI & ML Basics', description: 'Core concepts and simple models.', image: '/placeholder.svg' },
];

const Filters = ({ value, onChange }) => {
  const update = (patch) => onChange({ ...value, ...patch });
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Input placeholder="Search programs..." value={value.q} onChange={(e) => update({ q: e.target.value })} />
      <Select value={value.category} onValueChange={(v) => update({ category: v })}>
        <SelectTrigger><SelectValue placeholder="Category" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="">All Categories</SelectItem>
          <SelectItem value="Internship">Internship</SelectItem>
          <SelectItem value="Digital Skills">Digital Skills</SelectItem>
          <SelectItem value="Certifications">Certifications</SelectItem>
        </SelectContent>
      </Select>
      <Select value={value.level} onValueChange={(v) => update({ level: v })}>
        <SelectTrigger><SelectValue placeholder="Level" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="">All Levels</SelectItem>
          <SelectItem value="Beginner">Beginner</SelectItem>
          <SelectItem value="Intermediate">Intermediate</SelectItem>
          <SelectItem value="Advanced">Advanced</SelectItem>
        </SelectContent>
      </Select>
      <Select value={value.durationCategory} onValueChange={(v) => update({ durationCategory: v })}>
        <SelectTrigger><SelectValue placeholder="Duration" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="">All Durations</SelectItem>
          <SelectItem value="Short-term">Short-term</SelectItem>
          <SelectItem value="3–6 months">3–6 months</SelectItem>
          <SelectItem value="1 year">1 year</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

const ProgramsGrid = ({ programs, onApply }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {programs.map((p) => (
      <Card key={p.id} className="overflow-hidden hover:shadow-lg transition">
        <div className="aspect-video bg-gray-100 relative">
          <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="bg-gray-100 text-gray-800">{p.category}</Badge>
            <Badge variant="outline">{p.level}</Badge>
          </div>
          <CardTitle className="text-lg">{p.title}</CardTitle>
          <CardDescription>{p.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
            <span>Duration: {p.duration}</span>
          </div>
          <Button className="w-full btn-primary" onClick={() => onApply(p)}>Apply Now</Button>
        </CardContent>
      </Card>
    ))}
  </div>
);

const ApplyDialog = ({ open, onOpenChange, program }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', school: '', payment: 'Mobile Money' });
  const set = (k, v) => setForm((s) => ({ ...s, [k]: v }));
  const submit = (e) => {
    e.preventDefault();
    // Placeholder: Integrate payment or submission here
    console.log('Apply form submitted', { program: program?.title, ...form });
    onOpenChange(false);
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Apply: {program?.title}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <p className="text-sm text-muted-foreground mb-2">{program?.description}</p>
            <div className="text-sm text-gray-600">Duration: {program?.duration}</div>
          </div>
          <Input placeholder="Full Name" value={form.name} onChange={(e) => set('name', e.target.value)} />
          <Input type="email" placeholder="Email" value={form.email} onChange={(e) => set('email', e.target.value)} />
          <Input placeholder="Phone" value={form.phone} onChange={(e) => set('phone', e.target.value)} />
          <Input placeholder="School/Institution" value={form.school} onChange={(e) => set('school', e.target.value)} />
          <div className="md:col-span-2">
            <Select value={form.payment} onValueChange={(v) => set('payment', v)}>
              <SelectTrigger><SelectValue placeholder="Payment Option" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Mobile Money">Mobile Money</SelectItem>
                <SelectItem value="Bank Transfer">Bank Transfer</SelectItem>
                <SelectItem value="Card">Card</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="md:col-span-2">
            <Button className="w-full btn-primary" onClick={submit}>Submit</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Programs = () => {
  const [filters, setFilters] = useState({ q: '', category: '', level: '', durationCategory: '' });
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const filteredPrograms = useMemo(() => {
    return ALL_PROGRAMS.filter((p) => {
      const matchesQ = !filters.q || p.title.toLowerCase().includes(filters.q.toLowerCase());
      const matchesCat = !filters.category || p.category === filters.category;
      const matchesLevel = !filters.level || p.level === filters.level;
      const matchesDuration = !filters.durationCategory || p.durationCategory === filters.durationCategory;
      return matchesQ && matchesCat && matchesLevel && matchesDuration;
    });
  }, [filters]);

  const apply = (program) => {
    setSelected(program);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative">
          <div className="h-[320px] w-full relative">
            <img src="/placeholder.svg" alt="Programs banner" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60" />
            <div className="section-container h-full relative z-10 flex flex-col items-center justify-center text-center text-white">
              <h1 className="text-4xl lg:text-5xl font-extrabold mb-3">Our Training Programs</h1>
              <p className="max-w-3xl text-white/90">Choose from internships, digital skills, or professional certifications to build your career.</p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="section-padding bg-white border-b">
          <div className="section-container">
            <Filters value={filters} onChange={setFilters} />
          </div>
        </section>

        {/* Programs Grid */}
        <section className="section-padding">
          <div className="section-container">
            <ProgramsGrid programs={filteredPrograms} onApply={apply} />
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gray-50">
          <div className="section-container text-center">
            <h3 className="text-2xl font-bold mb-3">Can’t decide which program fits you?</h3>
            <p className="text-muted-foreground mb-6">Contact us and we’ll guide you.</p>
            <Button className="btn-secondary">Contact Us</Button>
          </div>
        </section>
      </main>
      <Footer />

      <ApplyDialog open={open} onOpenChange={setOpen} program={selected} />
    </div>
  );
};

export default Programs;


