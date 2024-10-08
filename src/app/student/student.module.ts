import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class StudentModule {
  id!: Number;
  name!: String;
  degree!: String;
  branch!: String;
  passout!: Number;
  image!: String;

  constructor() {
    id: "";
    name: "";
    degree: "";
    branch: "";
    passout: "";
    image: "";
  }
}
