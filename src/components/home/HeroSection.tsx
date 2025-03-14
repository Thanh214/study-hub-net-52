
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
          Khám phá tiềm năng học tập của bạn
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
          EduConnect - Nền tảng học tập trực tuyến kết nối bạn với tri thức và cộng đồng
        </p>
        <div className="flex justify-center gap-4 animate-fade-in">
          <Button size="lg" className="bg-primary hover:bg-primary-600">
            Bắt đầu học ngay
          </Button>
          <Button size="lg" variant="outline">
            Tìm hiểu thêm
          </Button>
        </div>
      </div>
    </section>
  );
};
