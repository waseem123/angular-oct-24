import { Component, OnDestroy, OnInit } from '@angular/core';
import { StudentModule } from '../student/student.module';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentscard',
  standalone: true,
  imports: [StudentModule, NgFor, RouterLink],
  templateUrl: './studentscard.component.html',
  styleUrl: './studentscard.component.css'
})
export class StudentscardComponent {
  service: StudentService = new StudentService;
  students: StudentModule[];
  constructor() {
    this.students = this.service.getAllStudents()
  }
}
