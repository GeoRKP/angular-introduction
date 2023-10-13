import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Giorgos";
  lastname = 'Kapatsinas'

  person = {
    givenName: 'Giorgos',
    surName: 'Kapatsinas',
    age: '29',
    email: 'georgioskapatsinas@yahoo.gr'
  }
}
