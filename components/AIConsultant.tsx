
import React, { useState, useRef, useEffect } from 'react';
import { generateConsultationResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "您好！我是爱优企服的AI商务顾问。有什么可以帮您？Hello! I'm AIYOU's consultant. How can I assist you with the Russian market today?",
      timestamp: new Date(),
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await generateConsultationResponse(input, "The user is visiting AIYOU's website. AIYOU specializes in helping Chinese companies exhibit in Russia.");
      const modelMsg: ChatMessage = { role: 'model', text: response, timestamp: new Date() };
      setMessages(prev => [...prev, modelMsg]);
    } catch (err) {
      const errorMsg: ChatMessage = { role: 'model', text: "Sorry, I am busy right now. Please try again later.", timestamp: new Date() };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {/* Toggle Button */}
      <button
        id="ai-chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-brand-blue text-white rounded-2xl flex items-center justify-center shadow-2xl hover:scale-105 transition-transform group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="relative">
             <span className="text-2xl">🤖</span>
             <span className="absolute -top-1 -right-1 flex h-3 w-3">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-300"></span>
             </span>
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-[90vw] md:w-[420px] h-[600px] bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden border border-slate-200 animate-in fade-in slide-in-from-bottom-10 duration-300">
          <div className="p-6 bg-brand-blue text-white flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl">🤖</div>
              <div>
                <h3 className="font-black text-sm tracking-wide">AIYOU Consultant</h3>
                <p className="text-[10px] text-blue-200 flex items-center mt-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Online - Gemini Powered
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-6 bg-slate-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-5 py-4 rounded-[1.5rem] text-[15px] leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-brand-blue text-white rounded-tr-none shadow-lg' 
                    : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none px-5 py-4 flex space-x-1 items-center">
                  <div className="w-2 h-2 bg-brand-blue/30 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-brand-blue/30 rounded-full animate-bounce delay-150"></div>
                  <div className="w-2 h-2 bg-brand-blue/30 rounded-full animate-bounce delay-300"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-white border-t border-slate-100">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Russia business..."
                className="w-full pl-6 pr-14 py-4 bg-slate-100 rounded-2xl text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all border border-transparent focus:bg-white"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 p-3 bg-brand-blue text-white rounded-xl disabled:opacity-50 disabled:bg-slate-300 transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIConsultant;
