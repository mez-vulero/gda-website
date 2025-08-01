import React from 'react';
import Image from 'next/image';
import { MapPin, Clock, Mail, Phone } from 'lucide-react';
import Container from '@/components/Container';

// A simple SVG for the 'talk' accent, trying to mimic the two small dashes/sparkles
const TalkAccent = () => (
  <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -top-1 right-0 transform translate-x-1/2 -translate-y-1/2">
    <path d="M2 2L5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7 2L10 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6 text-slate-700" />,
    title: 'Address',
    lines: ['Jemaa Building, 6th Floor, Gabon Street, Meskel Flower,', '10097, Addis Ababa, Ethiopia'],
  },
  {
    icon: <Clock className="w-6 h-6 text-slate-700" />,
    title: 'Office Hours',
    lines: ['Monday - Saturday: 9:00 AM to 5:00 PM'],
  },
  {
    icon: <Mail className="w-6 h-6 text-slate-700" />,
    title: 'Write To US',
    lines: ['support@gdacademy.et', <a key="mail-link" href="mailto:support@gdacademy.et" className="text-purple-600 hover:text-purple-700 underline">Mail Us &rarr;</a>],
  },
  {
    icon: <Phone className="w-6 h-6 text-slate-700" />,
    title: 'Get In Touch',
    lines: [
      <a key="phone1" href="tel:+2517421" className="text-purple-600 hover:text-purple-700">7421</a>,
    ],
  },
];

export default function ContactUsSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with decorative background */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-full">
            {/* Dotted background - using a pseudo-element for simplicity */}
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 182, 193, 0.3) 1px, transparent 0)',
                backgroundSize: '20px 20px',
              }}
            />
            {/* Pink rounded rectangle background */}
            <div className="absolute inset-x-4 sm:inset-x-8 top-4 bottom-4 sm:top-8 sm:bottom-8 lg:left-12 lg:right-0 bg-pink-100/50 rounded-3xl z-10" />
            
            {/* Image */}
            <div className="absolute inset-0 flex items-center justify-center z-20 p-4 sm:p-8">
              <Image
                src="https://via.placeholder.com/450x550/E9D5FF/805AD5?text=Our+Team+at+GlobeDock"
                alt="GlobeDock Team"
                width={450}
                height={550}
                className="object-cover rounded-2xl shadow-xl w-full h-full max-w-md lg:max-w-none"
                style={{ objectPosition: 'center' }}
              />
            </div>
          </div>

          {/* Right Column: Contact Details */}
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-10 sm:mb-12 leading-tight">
              Get in touch with us & 
              <span className="relative inline-block">
                <span className="text-purple-600">let’s talk</span>
                <span className="absolute left-0 bottom-0 w-full h-1 bg-purple-600 transform translate-y-1.5" />
                <TalkAccent />
              </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1.5">{item.title}</h3>
                    {item.lines.map((line, i) => (
                      <p key={i} className="text-sm text-slate-600 leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
