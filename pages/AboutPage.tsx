
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
            <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl mb-8 leading-tight">We build technology that speaks your language.</h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Founded in 2020, NovaSphere emerged from a simple observation: enterprise software was too rigid for the dynamic digital age. We set out to create a consultancy that prioritized agility, intelligence, and human-centric design.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Today, we are a global team of developers, data scientists, and strategists dedicated to helping organizations of all sizes leverage the power of Artificial Intelligence to solve their most pressing challenges.
            </p>
          </div>
          <div className="relative">
             <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/seed/about1/400/500" className="rounded-2xl shadow-lg" alt="Team 1" />
                <img src="https://picsum.photos/seed/about2/400/500" className="rounded-2xl shadow-lg mt-8" alt="Team 2" />
             </div>
             <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600 rounded-3xl -z-10 animate-pulse opacity-20"></div>
          </div>
        </div>

        <section className="bg-slate-900 rounded-[3rem] p-12 lg:p-24 text-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-slate-400">What drives us every single day.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Radical Transparency', desc: 'No hidden costs, no black-box AI. We walk you through every line of thought.' },
              { title: 'Incessant Innovation', desc: 'If there is a better way to do it, we will find it. If there is not, we will build it.' },
              { title: 'Global Empathy', desc: 'We build for users across cultures and geographies, ensuring inclusivity at every step.' },
            ].map((value) => (
              <div key={value.title} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
