import { Component } from '@angular/core';
import { FormControl,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-userform',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './userform.component.html',
  styleUrl: './userform.component.css'
})
export class UserformComponent {
  name = new FormControl("");
}