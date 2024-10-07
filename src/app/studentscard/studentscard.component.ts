import { Component } from '@angular/core';
import { StudentModule } from '../student/student.module';

@Component({
  selector: 'app-studentscard',
  standalone: true,
  imports: [StudentModule],
  templateUrl: './studentscard.component.html',
  styleUrl: './studentscard.component.css'
})
export class StudentscardComponent {
  student1:StudentModule={
    name: "Ibrahim Peerzade",
    degree: "Bachelors",
    branch: "IT",
    passout: 2024,
    image: "aws.webp"
  };

  student2:StudentModule={
    name: "Ab. Rahiman",
    degree: "HSC",
    branch: "Scince",
    passout: 2025,
    image: "shizuka.png"
  };

  student3:StudentModule={
    name: "Akshay",
    degree: "Bachelors",
    branch: "Computer Applications",
    passout: 2023,
    image: "img1.svg"
  }

  students:StudentModule[]=[
    this.student1, // 0
    this.student2, // 1
    this.student3  // 2
  ]
}
