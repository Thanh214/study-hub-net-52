
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';

export const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Chức năng đang phát triển",
      description: "Tính năng này sẽ sớm được hoàn thiện",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto bg-card dark:bg-card/80 p-8 rounded-lg shadow-lg border border-border"
        >
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
            {isLogin ? t('auth.login') : t('auth.register')}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-lg text-foreground">
                {t('auth.email')}
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 text-lg bg-background text-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-lg text-foreground">
                {t('auth.password')}
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-12 text-lg bg-background text-foreground"
              />
            </div>
            <Button className="w-full h-12 text-lg font-semibold" type="submit">
              {isLogin ? t('auth.login') : t('auth.register')}
            </Button>
          </form>
          <p className="text-center mt-6 text-muted-foreground">
            {isLogin ? t('auth.noAccount') : t('auth.hasAccount')}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary ml-2 hover:underline font-medium"
            >
              {isLogin ? t('auth.register') : t('auth.login')}
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
};
