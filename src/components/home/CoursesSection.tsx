
import { Card, CardContent } from "@/components/ui/card";

const courseCategories = [
  {
    title: "Phổ thông",
    description: "Các môn học cơ bản từ lớp 1-12",
    image: "/images/high-school.jpg"
  },
  {
    title: "Đại học",
    description: "Kiến thức chuyên ngành đại học",
    image: "/images/university.jpg"
  },
  {
    title: "Ngoại ngữ",
    description: "Các khóa học ngoại ngữ",
    image: "/images/language.jpg"
  },
  {
    title: "Kỹ năng mềm",
    description: "Phát triển kỹ năng cá nhân",
    image: "/images/soft-skills.jpg"
  }
];

export const CoursesSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Khóa học đa dạng
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courseCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gray-200">
                {/* Add actual images later */}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
