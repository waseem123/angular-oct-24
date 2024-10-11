import { Component, OnInit } from '@angular/core';
import { StudentModule } from '../student/student.module';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-studentdetails',
  standalone: true,
  imports: [StudentModule],
  templateUrl: './studentdetails.component.html',
  styleUrl: './studentdetails.component.css'
})
export class StudentdetailsComponent{
  s: StudentModule = new StudentModule;
  service: StudentService = new StudentService;
  id!: number;
  private sub: any;
  constructor(private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.s = this.service.getstudent(this.id);
      // In a real app: dispatch action to load the details here.
   });
    
  }
  
  
}
