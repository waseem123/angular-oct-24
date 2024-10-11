import { Routes } from '@angular/router';
import { StudentscardComponent } from './studentscard/studentscard.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';

export const routes: Routes = [
    { path: 'students', component: StudentscardComponent },
    { path: 'student-details/:id', component: StudentdetailsComponent },
    
    // StudentscardComponent,
    // StudentdetailsComponent
];
