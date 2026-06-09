'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  UserRound, 
  Stethoscope, 
  Clock, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Star,
  ArrowRight,
  Smile,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Section, SectionTitle } from '@/components/Section';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};

const services = [
  {
    title: "Dental Implants",
    description: "Permanent and natural-looking solution for missing teeth using high-grade titanium implants.",
    icon: <Smile size={32} />,
    benefits: ["Natural appearance", "Durability", "Improved speech"]
  },
  {
    title: "Root Canal Treatment",
    description: "Painless procedures to save your natural teeth from infection and decay.",
    icon: <Shield size={32} />,
    benefits: ["Pain relief", "Saved natural tooth", "Efficient results"]
  },
  {
    title: "Braces & Aligners",
    description: "Modern orthodontic solutions including clear aligners for a perfectly straight smile.",
    icon: <CheckCircle2 size={32} />,
    benefits: ["Invisible options", "Perfect alignment", "Confidence boost"]
  },
  {
    title: "Teeth Whitening",
    description: "Professional whitening treatments to brighten your smile in just one visit.",
    icon: <Star size={32} />,
    benefits: ["Instant results", "Safe procedure", "Long-lasting"]
  },
  {
    title: "Smile Makeover",
    description: "Comprehensive aesthetic treatments tailored to create your dream smile.",
    icon: <Heart size={32} />,
    benefits: ["Personalized plan", "Aesthetic perfection", "Full confidence"]
  },
  {
    title: "Pediatric Dentistry",
    description: "Gentle and friendly dental care specifically designed for children's comfort.",
    icon: <UserRound size={32} />,
    benefits: ["Kid-friendly environment", "Gentle care", "Early prevention"]
  }
];

const stats = [
  { label: "Happy Patients", value: "5000+", icon: <UserRound size={24} /> },
  { label: "Years Experience", value: "15+", icon: <Clock size={24} /> },
  { label: "Treatments Done", value: "12,000+", icon: <Stethoscope size={24} /> },
  { label: "Expert Doctors", value: "5+", icon: <Shield size={24} /> },
];

const testimonials = [
  {
    name: "Rajesh Patel",
    text: "The best dental experience I've ever had. The staff is professional and the treatment was absolutely painless. Highly recommended!",
    rating: 5,
    role: "Local Resident"
  },
  {
    name: "Sneha Sharma",
    text: "I got my clear aligners from Smile Saga. The results are amazing and the process was very smooth. Thank you, doctors!",
    rating: 5,
    role: "Business Owner"
  },
  {
    name: "Amit Shah",
    text: "Very clean clinic and modern equipment. Dr. and the team explain everything clearly before starting the procedure.",
    rating: 5,
    role: "Teacher"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* Hero Background Placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="w-full h-full bg-soft flex items-center justify-end pr-0 md:pr-20">
             <div className="w-full md:w-1/2 h-full md:h-4/5 bg-primary/5 md:bg-primary/10 rounded-none md:rounded-3xl flex items-center justify-center border-0 md:border-4 md:border-dashed md:border-primary/20">
                <p className="text-primary/20 font-bold text-2xl hidden md:block uppercase tracking-widest">Clinic Visual Placeholder</p>
             </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 font-semibold text-sm">
              <Shield size={16} />
              <span>Leading Dental Clinic in Gota, Ahmedabad</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Your Smile, <br />
              Our <span className="text-primary">Passion.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Experience world-class dental care with state-of-the-art technology. 
              We provide comprehensive treatments to ensure your smile stays healthy and beautiful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#appointment">
                <Button size="lg" className="text-lg w-full sm:w-auto">Book Appointment</Button>
              </a>
              <a href="tel:+911234567890">
                <Button variant="outline" size="lg" className="text-lg gap-2 w-full sm:w-auto">
                  <Phone size={20} />
                  <span>Call +91 12345 67890</span>
                </Button>
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
               <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center text-[10px] text-gray-400 font-bold uppercase">Img</div>
                  ))}
               </div>
               <div>
                  <div className="flex text-accent">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-sm text-gray-500 font-medium">500+ Google Reviews</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <Section className="bg-primary py-12 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              className="text-center text-white space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="mx-auto w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
              <div className="text-primary-foreground/80 font-medium text-sm md:text-base uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-white/50 text-[10px] mt-12 uppercase tracking-[0.2em]">* Sample data for presentation purposes</p>
      </Section>

      {/* About Section */}
      <Section id="about">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="relative"
            {...fadeInUp}
          >
            <div className="aspect-square bg-soft rounded-3xl overflow-hidden border border-gray-100 flex items-center justify-center relative">
               <p className="text-gray-300 font-bold text-xl uppercase tracking-widest">Clinic Interior</p>
               <div className="absolute inset-0 bg-primary/5" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 p-6 bg-white shadow-2xl rounded-2xl border border-gray-100 hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                   DR
                </div>
                <div>
                   <h4 className="font-bold text-gray-900">Dr. Sample Name</h4>
                   <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Chief Dental Surgeon</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 italic leading-relaxed">&quot;Our mission is to provide affordable, high-quality dental care to every patient who walks through our doors.&quot;</p>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Welcome to Smile Saga</h4>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Crafting Beautiful Smiles with Care & Precision.
              </h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Smile Saga Dental Clinic is Gota&apos;s premier destination for advanced dental care. We combine years of expertise with the latest dental technology to provide treatments that are not only effective but also comfortable.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Advanced Diagnostics",
                "Painless Procedures",
                "Hygienic Environment",
                "Patient-Centric Approach",
                "Affordable Pricing",
                "Emergency Services"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <Button size="lg" className="w-fit">Read Our Story</Button>
          </motion.div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" className="bg-soft">
        <SectionTitle 
          title="Our Premium Services" 
          subtitle="Comprehensive dental solutions designed for your unique needs. We use the latest techniques to ensure the best outcomes for your oral health."
        />
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          {services.map((service, i) => (
            <motion.div 
              key={i} 
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-soft rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300 group-hover:text-white text-primary">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.benefits.map((benefit, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <CheckCircle2 size={16} className="text-primary shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300">
                <span>Book Now</span>
                <ArrowRight size={20} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Gallery Section */}
      <Section id="gallery">
        <SectionTitle 
          title="Smile Transformations" 
          subtitle="A glimpse into the beautiful results we've achieved for our patients. Our gallery showcases real transformations from our clinic."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <motion.div 
              key={i}
              className="aspect-square bg-soft rounded-2xl overflow-hidden group relative cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <span className="bg-white text-primary px-4 py-2 rounded-full font-bold text-sm shadow-lg">View Case</span>
              </div>
              <div className="w-full h-full flex items-center justify-center text-gray-300 text-[10px] font-bold uppercase tracking-widest">
                Sample Result {i}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section id="testimonials" className="bg-soft">
        <SectionTitle 
          title="What Our Patients Say" 
          subtitle="Read real stories of transformation and care from patients who have trusted Smile Saga with their dental health."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="flex text-accent mb-6">
                {[...Array(t.rating)].map((_, idx) => <Star key={idx} size={18} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 italic mb-8 flex-grow leading-relaxed">&quot;{t.text}&quot;</p>
              <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-gray-400 text-[10px] mt-12 uppercase tracking-widest italic">* Sample testimonials for presentation purposes</p>
      </Section>

      {/* Appointment Section */}
      <Section id="appointment">
        <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Ready to transform <br />your smile?
              </h2>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Book your appointment today and take the first step towards a healthier, more beautiful smile. Our team is ready to assist you.
              </p>
              <ul className="space-y-4">
                {[
                  "Free Consultation for New Patients",
                  "Digital X-Ray Assessment",
                  "Personalized Treatment Plan",
                  "Insurance Support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                       <CheckCircle2 size={16} />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-8 border-t border-white/10">
                <p className="text-[10px] font-bold text-primary-foreground/60 mb-2 uppercase tracking-widest">Call us directly</p>
                <a href="tel:+911234567890" className="text-3xl font-bold hover:text-accent transition-colors">+91 12345 67890</a>
              </div>
            </div>

            <motion.div 
              className="bg-white rounded-3xl p-8 md:p-10 text-gray-900 shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6">Book an Appointment</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Phone Number</label>
                    <input type="tel" placeholder="+91 00000 00000" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Select Service</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer">
                    <option>General Checkup</option>
                    <option>Dental Implants</option>
                    <option>Root Canal</option>
                    <option>Braces & Aligners</option>
                    <option>Teeth Whitening</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Preferred Date</label>
                  <input type="date" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all cursor-pointer" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Message (Optional)</label>
                  <textarea rows={3} placeholder="Tell us about your concern..." className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"></textarea>
                </div>
                <Button className="w-full py-4 text-lg mt-2">Send Request</Button>
                <p className="text-[9px] text-gray-400 text-center mt-4 uppercase tracking-widest font-bold">
                  * This is a non-functional demo form for presentation purposes.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Contact & Map Section */}
      <Section id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Contact Details</h4>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">Get in touch.</h2>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-soft rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Our Location</h4>
                  <p className="text-gray-600 leading-relaxed max-w-xs">
                    Shop No. 12, Premium Plaza, Gota Cross Road, Gota, Ahmedabad, Gujarat - 382481
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-soft rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Phone & Email</h4>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    +91 12345 67890 <br />
                    info@smilesaga.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-soft rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">Working Hours</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Monday - Saturday: 10:00 AM - 08:00 PM <br />
                    Sunday: Closed / By Appointment
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-soft rounded-3xl border border-primary/10">
               <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-widest text-xs">Why Choose Smile Saga?</h4>
               <ul className="space-y-3">
                 {[
                   "Experienced specialists",
                   "Advanced sterilization protocols",
                   "Child-friendly environment",
                   "Modern treatment facilities"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                     <CheckCircle2 size={16} className="text-primary shrink-0" />
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>

          <div className="h-full min-h-[450px] bg-gray-100 rounded-[3rem] overflow-hidden border border-gray-200 relative group shadow-inner">
             {/* Map Placeholder */}
             <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 p-12 text-center">
                <MapPin size={64} className="mb-4 text-gray-200" />
                <h4 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-tight">Google Maps Embed Placeholder</h4>
                <p className="max-w-xs text-sm leading-relaxed">
                   A real interactive map showing the clinic location in Gota, Ahmedabad would be embedded here.
                </p>
                <Button variant="outline" className="mt-8">Open in Google Maps</Button>
             </div>
             {/* Overlay Decoration */}
             <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/50">
                <div className="flex items-center justify-between">
                   <div>
                      <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Clinic Hub</p>
                      <p className="font-bold text-gray-900">Gota, Ahmedabad</p>
                   </div>
                   <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                         <Phone size={14} />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg">
                         <Smile size={14} />
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
