import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../shared/models/Student";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  ngOnInit(): void {
  }

  @Input() studentTitle: string = '';
  @Input() students: Student[] = [];


  Name: string[] = ['Eva', 'Mari', 'Annika', 'Jane', 'Roberto', 'Thomas'];


  Grade: number[] = [4, 5, 3, 5, 2, 3, 4];

  addStudent() {
    let Name = this.Name.at(Math.floor(Math.random() * this.Name.length));
    let Grade = this.Grade.at(Math.floor(Math.random() * this.Grade.length));

    // @ts-ignore
    this.students.push(new Student(Name, Grade));
  }
}
