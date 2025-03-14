
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";
import { CoursesList } from './CoursesList';
import { CourseWithInstructor } from '@/types/courses';

export const CoursesListWrapper = () => {
  const { data: courses, isLoading, error } = useQuery({
    queryKey: ['courses'],
    queryFn: async (): Promise<CourseWithInstructor[]> => {
      const { data, error } = await supabase
        .from('courses')
        .select(`
          *,
          instructor:profiles(id, full_name, avatar_url)
        `)
        .eq('is_published', true)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      
      // Transform data to match CourseWithInstructor type
      return (data || []).map(course => ({
        ...course,
        instructor: course.instructor ? {
          id: course.instructor.id,
          full_name: course.instructor.full_name,
          avatar_url: course.instructor.avatar_url
        } : null
      }));
    }
  });

  // Error handling
  if (error) {
    console.error("Error loading courses:", error);
  }

  return <CoursesList courses={courses || []} isLoading={isLoading} />;
};
