
import React from 'react';
import { SERVICES } from '../constants';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl mb-6 tracking-tight">Expertise for the Next Era</h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
            We deliver sophisticated technical solutions that drive operational excellence. From infrastructure to intelligent interfaces, we've got you covered.
          </p>
        </div>

        <div className="space-y-24">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <div className="bg-slate-100 rounded-3xl aspect-square flex items-center justify-center text-9xl shadow-inner relative overflow-hidden">
                   <img src={`https://picsum.photos/seed/${service.id}/800/800`} className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale" alt={service.title} />
                   <span className="relative z-10 drop-shadow-lg">{service.icon}</span>
                </div>
              </div>
              <div className="lg:w-1/2 text-left">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{service.title}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {service.description} We specialize in high-end implementations that prioritize security, scalability, and user experience. Our team of senior engineers works closely with your stakeholders to ensure seamless integration.
                </p>
                <ul className="space-y-4">
                  {['Enterprise Scalability', 'Dedicated Support', 'Future-proof Tech'].map((item) => (
                    <li key={item} className="flex items-center text-slate-700">
                      <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 text-sm">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <button className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
