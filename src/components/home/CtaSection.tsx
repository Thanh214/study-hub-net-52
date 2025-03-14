
import { Button } from "@/components/ui/button";

export const CtaSection = () => {
  return (
    <section className="py-20 px-4 bg-primary/5">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Sẵn sàng để bắt đầu hành trình học tập?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Tham gia cùng hàng nghìn học viên đang phát triển mỗi ngày trên EduConnect
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary-600">
          Đăng ký miễn phí
        </Button>
      </div>
    </section>
  );
};
