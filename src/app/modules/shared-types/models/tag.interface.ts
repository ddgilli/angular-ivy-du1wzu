import { Course } from './course.interface';
import { SelectItem } from './select-item.interface';

export interface Tag extends SelectItem {
  image: string;

  courses: Partial<Course>[];
}
