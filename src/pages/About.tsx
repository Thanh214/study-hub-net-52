
import React from 'react';
import { Navbar } from '@/components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">Giới thiệu</h1>
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p>
            EduConnect là nền tảng học liệu tích hợp đa phương tiện, kết nối học sinh, 
            sinh viên và giáo viên để chia sẻ kiến thức và tài liệu học tập.
          </p>
          <h2>Sứ mệnh của chúng tôi</h2>
          <p>
            Chúng tôi tin rằng giáo dục chất lượng nên được tiếp cận bởi mọi người. 
            Thông qua nền tảng của mình, chúng tôi mong muốn tạo ra một môi trường học tập 
            hiệu quả và thú vị cho tất cả mọi người.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
