import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mycourses',
    loadChildren: () =>
      import('./modules/user-course/user-course.module').then(
        (m) => m.UserCourseModule
      ),
  },
  {
    path: 'course',
    loadChildren: () =>
      import('./modules/course/course.module').then((m) => m.CourseModule),
  },

  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./modules/settings/settings.module').then(
        (m) => m.SettingsModule
      ),
  },

  { path: '**', pathMatch: 'full', redirectTo: 'course' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
