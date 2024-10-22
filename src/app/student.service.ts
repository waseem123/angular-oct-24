import { Injectable } from '@angular/core';
import { StudentModule } from './student/student.module';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  s: StudentModule = {
    id: 0,
    name: "",
    degree: "",
    branch: "",
    passout: 0,
    image: ""
  };

  student1: StudentModule = {
    id: 101,
    name: "Ibrahim Peerzade",
    degree: "Bachelors",
    branch: "IT",
    passout: 2024,
    image: "aws.webp"
  };
  student2: StudentModule = {
    id: 102,
    name: "Ab. Rahiman",
    degree: "HSC",
    branch: "Scince",
    passout: 2025,
    image: "shizuka.png"
  };
  student3: StudentModule = {
    id: 103,
    name: "Akshay",
    degree: "Bachelors",
    branch: "Computer Applications",
    passout: 2023,
    image: "img1.svg"
  }
  student4: StudentModule = {
    id: 104,
    name: "Nida Kazi",
    degree: "Masters",
    branch: "Mathematics",
    passout: 2024,
    image: "img2.svg"
  };
  students: StudentModule[] = [];
  constructor() {
    this.students = [
      this.student1, // 0
      this.student2, // 1
      this.student3,  // 2
      this.student4  // 3
    ];
  }


  public getAllStudents(): StudentModule[] {
    return this.students;
  }


  public getstudent(id: number): StudentModule {

    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i]['id'] == id) {
        return this.students[i];
      }
    }
    return this.s;
  }


}
