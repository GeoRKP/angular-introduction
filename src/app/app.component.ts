import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PersonComponent} from "./person/person.component";
import {Person} from "./interfaces/person";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Giorgos";
  lastname = 'Kapatsinas'


person: Person = {
  givenName: 'Giorgos',
  surName: 'Kapatsinas',
  age: 29,
  email: 'georgioskapatsinas@yahoo.gr',
  address: 'Athens, Greece'
}

  person1: Person = {
    givenName: 'Gaaaaaaiorgos',
    surName: 'Kapaaaatsinas',
    age: 29,
    email: 'georgioskapatsinas@yahoo.gr',
    address: 'Athens, Greece'
  }
}
