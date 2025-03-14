
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { CoursesList } from '@/components/courses/CoursesList';

const Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">Khóa học</h1>
        <CoursesList />
      </div>
    </div>
  );
};

export default Courses;
