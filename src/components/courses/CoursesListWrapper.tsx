
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
          instructor_id,
          instructor:profiles(id, full_name, avatar_url)
        `)
        .eq('is_published', true)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    }
  });

  // Error handling
  if (error) {
    console.error("Error loading courses:", error);
  }

  return <CoursesList courses={courses || []} isLoading={isLoading} />;
};
