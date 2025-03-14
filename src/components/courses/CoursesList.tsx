
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const courses = [
  {
    id: 1,
    title: 'Toán học lớp 12',
    description: 'Khóa học toàn diện về chương trình Toán 12',
    image: '/placeholder.svg',
  },
  {
    id: 2,
    title: 'Luyện thi IELTS',
    description: 'Chiến lược và phương pháp đạt điểm cao IELTS',
    image: '/placeholder.svg',
  },
  {
    id: 3,
    title: 'Lập trình Web',
    description: 'Từ cơ bản đến nâng cao với HTML, CSS, JavaScript',
    image: '/placeholder.svg',
  },
];

export const CoursesList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <Card key={course.id} className="hover:shadow-lg transition-shadow">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-48 object-cover"
          />
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-600">{course.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
