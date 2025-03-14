
import React from 'react';
import { Link } from 'react-router-dom';
import { CourseWithInstructor } from '@/types/courses';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface CourseCardProps {
  course: CourseWithInstructor;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  // Format price
  const formattedPrice = course.price ? 
    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(course.price) : 
    'Miễn phí';

  // Get instructor initials for avatar fallback
  const getInstructorInitials = () => {
    if (!course.instructor?.full_name) return '?';
    return course.instructor.full_name
      .split(' ')
      .map(name => name[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <Link to={`/courses/${course.id}`}>
        <AspectRatio ratio={16 / 9}>
          {course.image_url ? (
            <img 
              src={course.image_url} 
              alt={course.title} 
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <span className="text-blue-500 text-lg font-medium">{course.title.substring(0, 1)}</span>
            </div>
          )}
        </AspectRatio>
      </Link>
      
      <CardHeader className="p-4">
        <Link 
          to={`/courses/${course.id}`}
          className="font-bold text-lg hover:text-primary transition-colors line-clamp-2"
        >
          {course.title}
        </Link>
      </CardHeader>
      
      <CardContent className="p-4 pt-0">
        {course.description && (
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
            {course.description}
          </p>
        )}
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={course.instructor?.avatar_url || undefined} />
            <AvatarFallback>{getInstructorInitials()}</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">
            {course.instructor?.full_name || 'Giảng viên'}
          </span>
        </div>
        <span className="text-sm font-medium">{formattedPrice}</span>
      </CardFooter>
    </Card>
  );
};
