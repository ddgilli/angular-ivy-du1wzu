import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { rawCourseCategory } from './rawData';
import { CourseCategory } from '../../shared-types';

@Injectable({ providedIn: 'root' })
export class CourseCategoryService {
  #categories: BehaviorSubject<Partial<CourseCategory>[]> = new BehaviorSubject<
    Partial<CourseCategory>[]
  >(null);
  categories$: Observable<Partial<CourseCategory>[]> =
    this.#categories.asObservable();

  #category: BehaviorSubject<Partial<CourseCategory>> = new BehaviorSubject<
    Partial<CourseCategory>
  >(null);
  category$: Observable<Partial<CourseCategory>> =
    this.#category.asObservable();

  constructor() {
    this.getAll();
  }

  public getAll(): void {
    this.#categories.next(rawCourseCategory);
  }
}
