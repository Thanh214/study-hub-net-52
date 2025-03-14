
import React, { createContext, useContext, useState } from 'react';

type Language = 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  vi: {
    'auth.login': 'Đăng nhập',
    'auth.register': 'Đăng ký',
    'auth.email': 'Email',
    'auth.password': 'Mật khẩu',
    'auth.noAccount': 'Chưa có tài khoản?',
    'auth.hasAccount': 'Đã có tài khoản?',
    'footer.about': 'Về chúng tôi',
    'footer.contact': 'Liên hệ',
    'footer.terms': 'Điều khoản',
    'footer.privacy': 'Bảo mật',
    'app.title': 'Khám phá tiềm năng học tập của bạn',
    'app.subtitle': 'EduConnect - Nền tảng học tập trực tuyến kết nối bạn với tri thức và cộng đồng',
    'app.startLearning': 'Bắt đầu học ngay',
    'app.learnMore': 'Tìm hiểu thêm',
    'nav.courses': 'Khóa học',
    'nav.community': 'Cộng đồng',
    'nav.about': 'Giới thiệu',
    'features.title': 'Tính năng nổi bật',
    'features.library': 'Thư viện học liệu',
    'features.libraryDesc': 'Kho tài liệu đa dạng từ sách, video đến bài tập tương tác',
    'features.ai': 'AI cá nhân hóa',
    'features.aiDesc': 'Gợi ý học tập thông minh dựa trên trình độ của bạn',
    'features.community': 'Cộng đồng học tập',
    'features.communityDesc': 'Kết nối với giáo viên và học sinh trên toàn quốc',
    'features.online': 'Học trực tuyến',
    'features.onlineDesc': 'Tham gia các lớp học trực tuyến chất lượng cao',
  },
  en: {
    'auth.login': 'Login',
    'auth.register': 'Register',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.noAccount': "Don't have an account?",
    'auth.hasAccount': 'Already have an account?',
    'footer.about': 'About Us',
    'footer.contact': 'Contact',
    'footer.terms': 'Terms',
    'footer.privacy': 'Privacy',
    'app.title': 'Discover Your Learning Potential',
    'app.subtitle': 'EduConnect - An online learning platform connecting you with knowledge and community',
    'app.startLearning': 'Start Learning Now',
    'app.learnMore': 'Learn More',
    'nav.courses': 'Courses',
    'nav.community': 'Community',
    'nav.about': 'About',
    'features.title': 'Featured Functions',
    'features.library': 'Learning Library',
    'features.libraryDesc': 'Diverse materials from books and videos to interactive exercises',
    'features.ai': 'AI Personalization',
    'features.aiDesc': 'Smart learning suggestions based on your level',
    'features.community': 'Learning Community',
    'features.communityDesc': 'Connect with teachers and students nationwide',
    'features.online': 'Online Learning',
    'features.onlineDesc': 'Join high-quality online classes',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('vi');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['vi']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
