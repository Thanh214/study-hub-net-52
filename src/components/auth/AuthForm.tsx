
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

export const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Chức năng đang phát triển",
      description: "Tính năng này sẽ sớm được hoàn thiện",
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">
        {isLogin ? 'Đăng nhập' : 'Đăng ký'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Mật khẩu</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button className="w-full" type="submit">
          {isLogin ? 'Đăng nhập' : 'Đăng ký'}
        </Button>
      </form>
      <p className="text-center mt-4">
        {isLogin ? 'Chưa có tài khoản?' : 'Đã có tài khoản?'}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-primary ml-2 hover:underline"
        >
          {isLogin ? 'Đăng ký' : 'Đăng nhập'}
        </button>
      </p>
    </div>
  );
};
