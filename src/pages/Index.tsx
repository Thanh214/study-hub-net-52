
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Book, Video, Users, Brain } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Book,
      title: "Thư viện học liệu",
      description: "Kho tài liệu đa dạng từ sách, video đến bài tập tương tác",
    },
    {
      icon: Brain,
      title: "AI cá nhân hóa",
      description: "Gợi ý học tập thông minh dựa trên trình độ của bạn",
    },
    {
      icon: Users,
      title: "Cộng đồng học tập",
      description: "Kết nối với giáo viên và học sinh trên toàn quốc",
    },
    {
      icon: Video,
      title: "Học trực tuyến",
      description: "Tham gia các lớp học trực tuyến chất lượng cao",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
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

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Tính năng nổi bật
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
    </div>
  );
};

export default Index;
