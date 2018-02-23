import { Component, OnInit, Input } from '@angular/core';
import { RegistrationUser } from '../shared/registration-user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  @Input() users: RegistrationUser[];
  title :string = "List of Users"
  constructor() { }

  ngOnInit() {
  }

}
