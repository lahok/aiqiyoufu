
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Locale, Exhibition } from './types';
import { translations } from './locales';
import { SITE_CONFIG } from './siteConfig';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  const [locale, setLocale] = useState<Locale>('zh');
  const [toast, setToast] = useState<{ message: string; visible: boolean }>({ message: '', visible: false });
  const [selectedExhibition, setSelectedExhibition] = useState<Exhibition | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [certOffset, setCertOffset] = React.useState(0);
  const t = translations[locale];

  const credentials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCertOffset((prev) => (prev + 1) % credentials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);




  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const showToast = (message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast({ message: '', visible: false }), 3000);
  };

  const handleSocialAction = (social: typeof SITE_CONFIG.socials[0]) => {
    if (social.type === 'link' && social.url) {
      window.open(social.url, '_blank');
    } else {
      // For 'copy' type or if URL is missing
      navigator.clipboard.writeText(social.id).then(() => {
        const msg = locale === 'zh' 
          ? `已复制 ${social.platform} 账号: ${social.id}` 
          : locale === 'en' 
          ? `Copied ${social.platform} ID: ${social.id}`
          : `Скопировано ${social.platform} ID: ${social.id}`;
        showToast(msg);
      }).catch(() => {
        showToast('Error copying to clipboard');
      });
    }
  };

  return (
    <div className="min-h-screen selection:bg-blue-100 relative">
      {/* Toast Notification */}
      {toast.visible && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[200] animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="bg-brand-blue text-white px-6 py-3 rounded-2xl shadow-2xl font-bold flex items-center space-x-3 border border-white/20 backdrop-blur-md">
            <span>✨</span>
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="glass-header fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src="/logo.png" alt="AUCHIEF EXPO" className="h-11 w-auto object-contain" />
              <div className="hidden sm:block ml-4">
                <span className="text-xl font-bold text-slate-800 tracking-tight">
                  {SITE_CONFIG.companyName[locale]}
                </span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-10">
              <button onClick={() => scrollTo('about')} className="text-sm font-bold text-slate-600 hover:text-brand-blue transition-colors uppercase tracking-widest">{t.nav.about}</button>
              <button onClick={() => scrollTo('services')} className="text-sm font-bold text-slate-600 hover:text-brand-blue transition-colors uppercase tracking-widest">{t.nav.services}</button>
              {locale === 'zh' && (
                <button onClick={() => scrollTo('exhibitions')} className="text-sm font-bold text-slate-600 hover:text-brand-blue transition-colors uppercase tracking-widest">{t.nav.exhibitions}</button>
              )}
              <button onClick={() => scrollTo('contact')} className="text-sm font-bold text-slate-600 hover:text-brand-blue transition-colors uppercase tracking-widest">{t.nav.contact}</button>
              
              <div className="relative group">
                <select 
                  value={locale} 
                  onChange={(e) => setLocale(e.target.value as Locale)}
                  className="appearance-none bg-slate-100 border border-slate-200 px-5 py-2 pr-10 rounded-full text-xs font-bold focus:ring-2 focus:ring-brand-blue outline-none cursor-pointer hover:bg-slate-200 transition-colors"
                >
                  <option value="zh">ZH 中文</option>
                  <option value="en">EN English</option>
                  <option value="ru">RU Русский</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[10px] text-slate-500">▼</div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-gradient pt-48 pb-32 flex items-center text-white relative">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl">
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] animate-in slide-in-from-bottom-8 duration-1000">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-50/90 mb-12 font-light leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => scrollTo('contact')}
                className="bg-white text-brand-blue px-12 py-5 rounded-full font-black text-lg hover:bg-blue-50 transition-all shadow-2xl hover:scale-105 active:scale-95"
              >
                {t.hero.cta}
              </button>
              <button 
                onClick={() => scrollTo('services')}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                {t.nav.services}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* About Section - Comprehensive Brand Identity */}
      <section id="about" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-20 items-stretch mb-32">
            <div className="flex flex-col justify-center">
              <span className="text-brand-blue font-black uppercase tracking-[0.2em] text-sm mb-6 block">{t.nav.about}</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                {SITE_CONFIG.companyName[locale]}
              </h2>
              <p className="text-slate-600 text-xl leading-relaxed font-light italic border-l-4 border-brand-blue pl-6">
                {t.aboutDescription}
              </p>
            </div>

            <div className="relative group flex flex-col">
              <div className="absolute -inset-10 bg-brand-blue/5 rounded-[3rem] blur-3xl pointer-events-none"></div>
              <div className="relative flex-1 min-h-[400px]">
                {credentials.map((char, index) => (
                  <div 
                    key={char} 
                    onClick={() => setSelectedImage(`/credential/${char}.png`)}
                    className={`absolute inset-0 transition-all duration-1000 transform ${
                      index === certOffset 
                        ? 'opacity-100 scale-100 z-20' 
                        : 'opacity-0 scale-95 z-10 pointer-events-none'
                    }`}
                  >
                    <div className="w-full h-full bg-white p-6 rounded-[2.5rem] shadow-2xl border border-slate-200 hover:border-brand-blue/30 cursor-zoom-in group/cert flex items-center justify-center overflow-hidden">
                      <img 
                        src={`/credential/${char}.png`} 
                        alt="Credential" 
                        className="max-w-full max-h-full object-contain drop-shadow-xl transition-transform duration-700 group-hover/cert:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>

              
              {/* Pagination Dots */}
              <div className="flex justify-center space-x-2 mt-8">
                {credentials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCertOffset(index)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${certOffset === index ? 'bg-brand-blue w-5' : 'bg-slate-300 hover:bg-slate-400'}`}
                  />
                ))}
              </div>
            </div>


          </div>

          {/* Advantages Grid */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-black text-slate-900 mb-4">{t.advantages.title}</h3>
              <div className="h-1 w-16 bg-brand-blue mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.advantages.list.map((item, i) => (
                <div key={i} className="p-10 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all group">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-black mb-4 text-slate-900">{item.title}</h4>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Exhibition Snaps Carousel */}

          <div>
            <div className="text-center mb-16">
              <h3 className="text-3xl font-black text-slate-900 mb-4">{(t as any).exhibitionsSnap?.title}</h3>
              <div className="h-1 w-16 bg-brand-blue mx-auto rounded-full"></div>
            </div>
            <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
              <div className="animate-scroll-reverse flex space-x-6 px-8 hover:[animation-play-state:paused] cursor-pointer">
                {[...['a', 'b', 'c', 'd', 'e'], ...['a', 'b', 'c', 'd', 'e']].map((char, idx) => (
                  <div 
                    key={`${char}-${idx}`}
                    onClick={() => setSelectedImage(`/exhisnaps/${char}.png`)}
                    className="flex-shrink-0 w-72 md:w-96 bg-white p-3 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl transition-all cursor-zoom-in group/item"
                  >
                    <div className="aspect-video overflow-hidden rounded-xl bg-slate-100">
                      <img 
                        src={`/exhisnaps/${char}.png`} 
                        alt={`Exhibition Snap ${char}`} 
                        className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>



      {/* Services Section */}
      <section id="services" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-brand-blue font-black uppercase tracking-[0.2em] text-sm mb-4 block">{t.nav.services}</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">{t.services.title}</h2>
            <div className="h-1.5 w-24 bg-brand-blue mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {t.services.list.map((item, i) => (
              <div key={i} className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all group">
                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-6 text-slate-900">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}


      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">{t.industries.title}</h2>
            <div className="h-1.5 w-24 bg-brand-blue mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {t.industries.list.map((ind, i) => (
              <div key={i} className="relative group overflow-hidden rounded-[2rem] h-64 bg-slate-900">
                <img 
                  src={i === 0 ? '/industries/machinery.jpg' : i === 1 ? '/industries/electronics.jpg' : i === 2 ? '/industries/agriculture.jpg' : '/industries/energy.jpg'} 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                  alt={ind.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <span className="text-3xl mb-2 block">{ind.icon}</span>
                  <h3 className="text-white text-xl font-black">{ind.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibition Table - ZH Only */}
      {locale === 'zh' && (
        <section id="exhibitions" className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">{t.exhibitionTable.title}</h2>
              <div className="h-1.5 w-24 bg-brand-blue mx-auto rounded-full"></div>
            </div>
            <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 shadow-2xl bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-brand-blue text-white">
                    <tr>
                      {t.exhibitionTable.columns.map(col => (
                        <th key={col} className="px-10 py-6 font-bold text-xs uppercase tracking-[0.2em]">{col}</th>
                      ))}
                      <th className="px-10 py-6"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {t.exhibitionTable.list?.map((ex) => (
                      <tr key={ex.id} className="hover:bg-blue-50/50 transition-colors">
                        <td className="px-10 py-8 font-black text-slate-900 text-lg">{ex.name}</td>
                        <td className="px-10 py-8 text-slate-600 font-medium">{ex.city}</td>
                        <td className="px-10 py-8 text-slate-600 font-medium">{ex.date}</td>
                        <td className="px-10 py-8">
                          <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase">
                            {ex.status}
                          </span>
                        </td>
                        <td className="px-10 py-8 text-right">
                          <button 
                            onClick={() => setSelectedExhibition(ex)} 
                            className="text-brand-blue font-black text-sm hover:underline decoration-2 underline-offset-4 tracking-tighter"
                          >
                            了解详情
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section - Simplified & Professional */}
      <section id="contact" className="py-24 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Brand & Direct Contact */}
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-8">
                {t.contact.title}
              </h2>
              
              <div className="space-y-8">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{t.contact.phone}</p>
                  <a href={`tel:${SITE_CONFIG.phone}`} className="text-2xl font-black hover:text-brand-blue transition-colors">
                    {SITE_CONFIG.phone}
                  </a>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{t.contact.email}</p>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-2xl font-black hover:text-brand-blue transition-colors underline decoration-brand-blue underline-offset-8">
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              {/* Socials - Compact */}
              <div className="flex gap-4 mt-12">
                {SITE_CONFIG.socials.map((social) => (
                  <button 
                    key={social.platform}
                    onClick={() => handleSocialAction(social)}
                    className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all"
                    title={social.platform}
                  >
                    <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Office Addresses - Clean List */}
            <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2.5rem] backdrop-blur-sm">
              <h4 className="text-sm font-black text-brand-blue uppercase tracking-widest mb-8">{t.contact.address}</h4>
              <div className="space-y-8">
                {SITE_CONFIG.offices.map((office) => (
                  <div key={office.id} className="flex space-x-4">
                    <span className="text-xl mt-1">📍</span>
                    <div>
                      <h5 className="font-bold text-white mb-1">{office.city[locale]}</h5>
                      <p className="text-slate-400 text-sm leading-relaxed font-light">{office.address[locale]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-white/5 text-center text-slate-600 text-xs font-light">
            © 2025 {SITE_CONFIG.companyName[locale]}. All Rights Reserved.
          </div>
        </div>
      </section>


      {SITE_CONFIG.features?.aiConsultant && <AIConsultant />}

      {/* Exhibition Detail Modal */}
      {selectedExhibition && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setSelectedExhibition(null)}
          ></div>
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] shadow-2xl relative z-10 overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">
            <div className="px-10 py-8 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h3 className="text-2xl font-black text-slate-900 leading-tight pr-8">
                {selectedExhibition.name}
              </h3>
              <button 
                onClick={() => setSelectedExhibition(null)}
                className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-blue hover:border-brand-blue transition-all group shrink-0"
              >
                <span className="text-2xl group-hover:rotate-90 transition-transform duration-300">×</span>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-10 py-10">
              <div className="prose prose-slate max-w-none prose-lg">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {selectedExhibition.details}
                </ReactMarkdown>
              </div>
            </div>
            <div className="px-10 py-8 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="flex items-center space-x-6">
                <div className="text-sm">
                  <span className="text-slate-400 uppercase tracking-widest block mb-1">举办城市</span>
                  <span className="font-bold text-slate-900">{selectedExhibition.city}</span>
                </div>
                <div className="w-px h-8 bg-slate-200"></div>
                <div className="text-sm">
                  <span className="text-slate-400 uppercase tracking-widest block mb-1">举办时间</span>
                  <span className="font-bold text-slate-900">{selectedExhibition.date}</span>
                </div>
              </div>
              <button 
                onClick={() => {
                  setSelectedExhibition(null);
                  scrollTo('contact');
                }}
                className="bg-brand-blue text-white px-10 py-4 rounded-2xl font-black hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 flex items-center space-x-2"
              >
                <span>立即咨询参展</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Image Preview Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setSelectedImage(null)}
          ></div>
          <div className="relative z-10 max-w-4xl max-h-[90vh] animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-16 right-0 text-white hover:text-brand-blue transition-colors p-4"
            >
              <span className="text-4xl">×</span>
            </button>
            <img 
              src={selectedImage} 
              alt="Preview" 
              className="w-full h-full object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>

  );
};

export default App;
