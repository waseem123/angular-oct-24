import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { StudentscardComponent } from "./studentscard/studentscard.component";
import { StudentdetailsComponent } from "./studentdetails/studentdetails.component";
import { UserformComponent } from "./userform/userform.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NavbarComponent, FooterComponent, StudentscardComponent, StudentdetailsComponent, UserformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Waseem';
  firstnum = 1000;
  secondnum = 2000;

  firstname = "Waseem";
  lastname = "Attar";
student: any;
}
