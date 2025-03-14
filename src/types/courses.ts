
import { Tables } from "@/integrations/supabase/types";

// Use these types that extend from the auto-generated Supabase types
export type Course = Tables<"courses">;
export type Lesson = Tables<"lessons">;
export type Enrollment = Tables<"enrollments">;

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
