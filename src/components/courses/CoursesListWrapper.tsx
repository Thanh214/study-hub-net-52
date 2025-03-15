
import React from 'react';
import { CoursesList } from './CoursesList';
import { CourseWithInstructor } from '@/types/courses';

export const CoursesListWrapper = () => {
  // Static course data instead of fetching from Supabase
  const mockCourses: CourseWithInstructor[] = [
    {
      id: '1',
      title: 'Toán học cơ bản',
      description: 'Khóa học toán cơ bản dành cho học sinh THPT',
      image_url: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      instructor_id: null,
      is_published: true,
      price: 299000,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      instructor: null,
      lessonCount: 12,
      enrollmentCount: 45
    },
    {
      id: '2',
      title: 'Ngữ văn lớp 12',
      description: 'Khóa học ngữ văn lớp 12 chuẩn bị cho kỳ thi tốt nghiệp',
      image_url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      instructor_id: null,
      is_published: true,
      price: 349000,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      instructor: null,
      lessonCount: 10,
      enrollmentCount: 32
    },
    {
      id: '3',
      title: 'Tiếng Anh giao tiếp',
      description: 'Khóa học tiếng Anh giao tiếp cho người mới bắt đầu',
      image_url: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      instructor_id: null,
      is_published: true,
      price: 499000,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      instructor: null,
      lessonCount: 20,
      enrollmentCount: 67
    },
    {
      id: '4',
      title: 'Kỹ năng thuyết trình',
      description: 'Học cách thuyết trình tự tin và hiệu quả',
      image_url: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      instructor_id: null,
      is_published: true,
      price: 199000,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      instructor: null,
      lessonCount: 8,
      enrollmentCount: 29
    },
    {
      id: '5',
      title: 'Vật lý THPT',
      description: 'Khóa học vật lý cơ bản và nâng cao cho học sinh THPT',
      image_url: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      instructor_id: null,
      is_published: true,
      price: 349000,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      instructor: null,
      lessonCount: 14,
      enrollmentCount: 38
    },
    {
      id: '6',
      title: 'Lập trình Python',
      description: 'Học lập trình Python từ cơ bản đến nâng cao',
      image_url: 'https://images.unsplash.com/photo-1526379879527-8559ecfd8bf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      instructor_id: null,
      is_published: true,
      price: 599000,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      instructor: null,
      lessonCount: 25,
      enrollmentCount: 105
    }
  ];

  // Always return the static courses data
  return <CoursesList courses={mockCourses} isLoading={false} />;
};
