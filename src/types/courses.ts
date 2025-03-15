
// Define course types without Supabase dependencies
export interface Course {
  id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  instructor_id: string | null;
  is_published: boolean | null;
  price: number | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface Lesson {
  id: string;
  title: string;
  description: string | null;
  content: string | null;
  course_id: string;
  order_index: number;
  created_at: string | null;
  updated_at: string | null;
}

export interface Enrollment {
  id: string;
  user_id: string;
  course_id: string;
  enrolled_at: string | null;
}

// Additional types that might be needed for the UI
export interface CourseWithInstructor extends Course {
  instructor: {
    id: string;
    full_name: string | null;
    avatar_url: string | null;
  } | null;
  lessonCount?: number;
  enrollmentCount?: number;
}
