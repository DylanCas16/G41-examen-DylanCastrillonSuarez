import {Component, inject, OnInit, signal} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {StudentsService} from '../../services/students.service';
import {Students} from '../../modals/students';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-students',
  imports: [
    ReactiveFormsModule,
    NgClass,
    NgForOf
  ],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit {
  studentForm: FormGroup;
  studentService = inject(StudentsService);

  studentsData = signal<Array<Students>>([])
  ngOnInit(): void {
    this.studentService.getStudents().subscribe((studentsList: Students[]) => this.studentsData.set(studentsList))
  }

  constructor(private formBuilder: FormBuilder) {
    this.studentForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get name() {return this.studentForm.get('name');}
  get email() { return this.studentForm.get('email'); }

  async onFormSubmit() {
    await this.studentService.addStudent(this.studentForm.value);
  }

  editModal(student: Students) {
    return this.studentService.updateStudent(student);
  }

  deleteModal(student: Students) {
    return this.studentService.deleteStudent(student);
  }
}
