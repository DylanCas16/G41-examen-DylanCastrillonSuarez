import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import("./components/index/index.component")
        .then(m =>m.IndexComponent)
  },
  {
    path: 'students',
    loadComponent: () =>
      import("./components/students/students.component")
        .then(m =>m.StudentsComponent)
  },
  {
    path: 'grades',
    loadComponent: () =>
      import("./components/grades/grades.component")
        .then(m =>m.GradesComponent)
  },
  {
    path: 'subjects',
    loadComponent: () =>
      import("./components/subjects/subjects.component")
        .then(m =>m.SubjectsComponent)
  }
];
