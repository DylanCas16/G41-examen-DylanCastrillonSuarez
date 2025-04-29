import { Injectable } from '@angular/core';
import {addDoc, collection, collectionData, Firestore} from '@angular/fire/firestore';
import {Students} from '../modals/students';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private firestore: Firestore) { }
  students: Array<Students> = [];

  addStudent(newStudent: Students) {
    const studentRef = collection(this.firestore , 'students');
    return addDoc(studentRef, newStudent);
  }

  getStudents() {
    const studentRef = collection(this.firestore, 'students');
    return collectionData(studentRef, {idField: 'id'}) as Observable<Students[]>;
  }
}
