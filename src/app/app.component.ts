import {Component, OnInit} from '@angular/core';
import {Student} from "./shared/models/Student";
import {Teacher} from "./shared/models/Teacher";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.students = this.fetchStudents();
    this.teachers = this.fetchTeachers();
  }
  title = 'Student-teacher task';

  studentsTitle = 'List of students';
  teacherTitle = 'List of teachers';

  students: Student[] = [];

  fetchStudents(): Student[] {
    let students: Student[] = [];

    students.push(new Student('Peters',  5));
    students.push(new Student('Anya',  4));
    students.push(new Student('Joel',  5));
    students.push(new Student('Liza',  4));


    return students;
  }

  teachers: Teacher[] = [];

  fetchTeachers(): Teacher[] {
    let teachers: Teacher[] = [];

    teachers.push(new Teacher('Trey', 'Science'));
    teachers.push(new Teacher('Bree', 'Mathematics'));
    teachers.push(new Teacher('Samantha',  'Python'));
    teachers.push(new Teacher('Bree',  'Java'));

    return teachers;
  }


}
