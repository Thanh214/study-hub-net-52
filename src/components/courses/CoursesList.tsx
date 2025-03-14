
import React from 'react';
import { CourseWithInstructor } from '@/types/courses';
import { CourseCard } from './CourseCard';
import { Skeleton } from '@/components/ui/skeleton';

interface CoursesListProps {
  courses: CourseWithInstructor[];
  isLoading: boolean;
}

export const CoursesList: React.FC<CoursesListProps> = ({ courses, isLoading }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex flex-col space-y-3">
            <Skeleton className="h-[200px] w-full rounded-lg" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  if (courses.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-muted-foreground">Không có khóa học nào.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};
