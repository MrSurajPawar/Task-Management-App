import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //classes have the properties and these are the properties of the class
  selectedUsers = DUMMY_USERS[randomIndex];

  get imagePath() {
    //to access the property of the same class then you have to use the this keyword
    return 'assets/users/' + this.selectedUsers.avatar;
  }
}
