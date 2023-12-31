import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Person} from "../interfaces/person";

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  @Input() person: Person = {
    givenName: 'Arxiki timi',
    surName: 'Arxiki timi',
    age: 0,
    email: 'arxiki timi @yahoo.gr',
    address: 'arxiki, timi '
  }
}
