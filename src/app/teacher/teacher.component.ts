import {Component, Input, OnInit} from '@angular/core';
import {Teacher} from "../shared/models/Teacher";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  @Input() teacherTitle: string = '';

  @Input() teachers: Teacher[] = [];
  ngOnInit(): void {
  }
  name: string[] = ['Fred', 'Carl', 'Ly', 'James', 'Earl', 'Peter'];
  subjects: string[] = ['Science','Physics','Mathematics','Programming','Java','Python'];
  addTeacher() {
    let teacherName = this.name.at(Math.floor(Math.random() * this.name.length));

    let subject = this.subjects.at(Math.random()*this.subjects.length);
    // @ts-ignore
    this.teachers.push(new Teacher(teacherName, subject));

  }

}
