import { User } from './user.interface';
import { Course } from './course.interface';

export interface Enrollment {
  id?: number;
  userId?: number;
  courseId?: number;

  dateEnrolled?: Date;
  dateCompleted?: Date;

  course?: Partial<Course>;
  user?: Partial<User>;

  currentlyEnrolled?: boolean;
}
