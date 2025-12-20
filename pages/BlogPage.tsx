
import React from 'react';
import { BLOG_POSTS } from '../constants';

const BlogPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Insights & Innovation</h1>
            <p className="text-slate-500 text-lg">Exploring the frontier of digital business.</p>
          </div>
          <div className="mt-6 md:mt-0 flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            {['All', 'Technology', 'Strategy', 'Management', 'Case Studies'].map((cat) => (
              <button key={cat} className="px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors whitespace-nowrap">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold text-blue-600 uppercase tracking-widest">{post.category}</span>
                </div>
              </div>
              <div className="p-8 flex-grow">
                <p className="text-slate-400 text-xs font-semibold mb-3 uppercase tracking-widest">{post.date}</p>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 hover:text-blue-600 cursor-pointer">{post.title}</h2>
                <p className="text-slate-500 mb-6 leading-relaxed line-clamp-3">{post.excerpt}</p>
                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-blue-600 font-bold hover:underline cursor-pointer">Read more</span>
                  <div className="flex items-center">
                    <img src={`https://i.pravatar.cc/100?u=${post.id}`} className="w-8 h-8 rounded-full mr-2" alt="author" />
                    <span className="text-xs font-medium text-slate-500">NovaSphere Lab</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
