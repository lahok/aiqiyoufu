
import { Exhibition } from './types';

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Blog', path: '/blog' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
];

/**
 * Core services provided by AIYOU Business Group.
 */
export const SERVICES = [
  {
    id: 1,
    title: 'Overseas Exhibition',
    description: 'Specialized organization for high-impact international industry events.',
    icon: '🌍',
  },
  {
    id: 2,
    title: 'Booth Design & Build',
    description: 'Expert engineering teams delivering custom turnkey booth solutions.',
    icon: '🏗️',
  },
  {
    id: 3,
    title: 'Market Entry Consulting',
    description: 'Navigating regulations, logistics, and strategy for new territories.',
    icon: '💼',
  },
  {
    id: 4,
    title: 'Business Matching',
    description: 'Connecting manufacturers with reliable distributors and partners.',
    icon: '🤝',
  },
];

/**
 * Latest industry insights and blog content.
 */
export const BLOG_POSTS = [
  {
    id: 1,
    title: 'Trade Trends in 2025: China-Russia Outlook',
    excerpt: 'Detailed analysis of emerging opportunities in mechanical and tech sectors.',
    category: 'Strategy',
    date: 'March 15, 2025',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'The Road to Neftegaz 2025',
    excerpt: 'Key preparations for one of the world\'s largest energy exhibitions.',
    category: 'Exhibitions',
    date: 'March 10, 2025',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Navigating Customs and Logistics',
    excerpt: 'Efficient ways to handle cross-border trade between China and CIS markets.',
    category: 'Technology',
    date: 'March 5, 2025',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
  },
];
