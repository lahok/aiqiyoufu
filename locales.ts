
import { Translation, Locale } from './types';

export interface ExtendedTranslation extends Translation {
  industries: {
    title: string;
    list: { title: string; icon: string }[];
  };
}

export const translations: Record<Locale, ExtendedTranslation> = {
  zh: {
    nav: { about: '关于我们', services: '业务领域', exhibitions: '展会计划', contact: '联系我们' },
    hero: { 
      title: '连接中俄市场，助力中国制造', 
      subtitle: '深耕俄罗斯市场，为您提供专业的组展、搭建及一站式商务落地咨询服务。', 
      cta: '立即咨询' 
    },
    services: {
      title: '核心业务',
      list: [
        { title: '海外组展', desc: '组织中国优质企业参加俄罗斯顶级行业展会，拓展海外订单。', icon: '🌍' },
        { title: '展台设计搭建', desc: '莫斯科本地工程团队，提供从设计到落地的一站式搭建服务。', icon: '🏗️' },
        { title: '商务咨询', desc: '中俄双语顾问团队，解决法律、物流、清关及市场准入难题。', icon: '💼' }
      ]
    },
    industries: {
      title: '优势行业',
      list: [
        { title: '工业机械', icon: '⚙️' },
        { title: '电子信息', icon: '📱' },
        { title: '农业机械', icon: '🚜' },
        { title: '能源化工', icon: '🛢️' }
      ]
    },
    exhibitionTable: {
      title: '2025 重点展会计划',
      columns: ['展会名称', '城市', '时间', '状态']
    },
    contact: {
      title: '联系我们',
      email: '企业邮箱',
      address: '办公地址',
      moscow: '莫斯科：Presnenskaya Nab., 12, Moscow City',
      beijing: '北京：北京市朝阳区建国路 88 号'
    }
  },
  en: {
    nav: { about: 'About', services: 'Services', contact: 'Contact' },
    hero: { 
      title: 'Connecting Sino-Russian Markets', 
      subtitle: 'Empowering Chinese manufacturers to explore the Russian market through professional exhibitions and consultancy.', 
      cta: 'Get Started' 
    },
    services: {
      title: 'Core Services',
      list: [
        { title: 'Exhibition Organizing', desc: 'Connecting quality suppliers with top-tier Russian industry events.', icon: '🌍' },
        { title: 'Booth Design', desc: 'Local Moscow engineering team providing turnkey booth solutions.', icon: '🏗️' },
        { title: 'Business Consulting', desc: 'Bilingual experts solving logistics, customs, and market entry issues.', icon: '💼' }
      ]
    },
    industries: {
      title: 'Industry Focus',
      list: [
        { title: 'Industrial Machinery', icon: '⚙️' },
        { title: 'Electronics & IT', icon: '📱' },
        { title: 'Agri-Machinery', icon: '🚜' },
        { title: 'Energy & Chemical', icon: '🛢️' }
      ]
    },
    exhibitionTable: { title: '', columns: [] },
    contact: {
      title: 'Contact Us',
      email: 'Email',
      address: 'Office',
      moscow: 'Moscow: Presnenskaya Nab., 12, Moscow City',
      beijing: 'Beijing: No.88 Jianguo Road, Chaoyang Dist.'
    }
  },
  ru: {
    nav: { about: 'О нас', services: 'Услуги', contact: 'Контакты' },
    hero: { 
      title: 'Ваш мост в бизнес между Китаем и Россией', 
      subtitle: 'Профессиональная организация выставок и бизнес-консалтинг для развития вашего бизнеса.', 
      cta: 'Связаться' 
    },
    services: {
      title: 'Наши Услуги',
      list: [
        { title: 'Организация выставок', desc: 'Содействие китайским компаниям в участии в ведущих выставках РФ.', icon: '🌍' },
        { title: 'Дизайн стендов', desc: 'Собственная строительная бригада в Москве, застройка «под ключ».', icon: '🏗️' },
        { title: 'Консалтинг', desc: 'Юридическая поддержка, логистика и таможенное оформление.', icon: '💼' }
      ]
    },
    industries: {
      title: 'Отраслевой фокус',
      list: [
        { title: 'Пром. оборудование', icon: '⚙️' },
        { title: 'Электроника и ИТ', icon: '📱' },
        { title: 'Сельхозтехника', icon: '🚜' },
        { title: 'Энергетика и Химия', icon: '🛢️' }
      ]
    },
    exhibitionTable: { title: '', columns: [] },
    contact: {
      title: 'Свяжитесь с нами',
      email: 'Email',
      address: 'Адрес',
      moscow: 'Москва: Пресненская наб., 12, Москва-Сити',
      beijing: 'Пекин: No.88 Jianguo Road, Chaoyang Dist.'
    }
  }
};
