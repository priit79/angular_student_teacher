import { Component } from '@angular/core';
import {Teacher} from "../shared/models/Teacher";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent {

  teachers: Teacher[] = [];
  name: string = '';
  tSubject: string = '';



  addTeacher(teacherForm: NgForm) {
    this.teachers.push(new Teacher(this.name, this.tSubject));
    teacherForm.reset();
  }
}
