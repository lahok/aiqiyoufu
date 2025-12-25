
export type Locale = 'zh' | 'en' | 'ru';

export interface Translation {
  nav: {
    about: string;
    services: string;
    exhibitions?: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    list: {
      title: string;
      desc: string;
      icon: string;
    }[];
  };
  exhibitionTable: {
    title: string;
    columns: string[];
    list?: Exhibition[];
  };
  contact: {
    title: string;
    email: string;
    phone: string;
    address: string;
  };
}

export interface Exhibition {
  id: number;
  name: string;
  city: string;
  date: string;
  status: string;
  details?: string;
}

/**
 * ChatMessage interface for the AI Consultant component to manage conversation state.
 */
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
