
import { Card } from "@/components/ui/card";
import { Book, Video, Users, Brain } from "lucide-react";

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

export const FeaturesSection = () => {
  return (
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
  );
};
