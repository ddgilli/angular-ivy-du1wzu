import { Course } from './course.interface';
import { SelectItem } from './select-item.interface';

export interface CourseCategory extends SelectItem {
  image?: string;

  courses?: Partial<Course>[];
}
