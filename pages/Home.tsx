
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, BLOG_POSTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 flex items-center bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
                Elevate Your Enterprise with <span className="gradient-text">NovaSphere AI</span>
              </h1>
              <p className="mt-6 text-lg text-slate-500 sm:max-w-3xl">
                We bridge the gap between complex technology and meaningful business outcomes. Transform your workflow with our bespoke AI solutions and cloud architecture expertise.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start space-x-4">
                <Link
                  to="/services"
                  className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 shadow-xl shadow-blue-200"
                >
                  Explore Services
                </Link>
                <Link
                  to="/about"
                  className="flex items-center justify-center px-8 py-3 border border-slate-200 text-base font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 md:py-4 md:text-lg md:px-10"
                >
                  Our Process
                </Link>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
               <div className="relative mx-auto w-full rounded-2xl shadow-2xl overflow-hidden">
                  <img
                    className="w-full h-auto object-cover"
                    src="https://picsum.photos/seed/office/1200/800"
                    alt="Corporate Office"
                  />
                  <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-10"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Enterprises Served', value: '150+' },
              { label: 'AI Models Deployed', value: '2,000+' },
              { label: 'Efficiency Gain', value: '45%' },
              { label: 'Client Satisfaction', value: '99.9%' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                <p className="text-sm font-medium text-slate-500 mt-1 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Comprehensive Solutions</h2>
            <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">Tailored technology strategies for modern business challenges.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / AI Consultant Section Tease */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to start your digital journey?</h2>
          <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto">Our AI consultant is available 24/7 to help you navigate your options and find the perfect solution for your scale.</p>
          <button 
            onClick={() => {
              const chatToggle = document.getElementById('ai-chat-toggle');
              chatToggle?.click();
            }}
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
          >
            Talk to AI Consultant
          </button>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900">Latest Insights</h2>
              <p className="mt-4 text-slate-500 text-lg">Thinking and innovation from our tech labs.</p>
            </div>
            <Link to="/blog" className="text-blue-600 font-semibold hover:underline flex items-center">
              View all posts <span className="ml-2">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {BLOG_POSTS.map((post) => (
              <div key={post.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="object-cover w-full h-full transform transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-bold rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">{post.title}</h3>
                <p className="text-slate-500 line-clamp-2">{post.excerpt}</p>
                <p className="mt-4 text-xs font-medium text-slate-400 uppercase tracking-widest">{post.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
