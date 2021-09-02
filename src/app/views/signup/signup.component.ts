import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  userData: User = {
    id: '',
    name: '',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
    email: '',
    age: 0,
    login: '',
    password: '',
    status: false,
    department: [],
    groups: [],
    socialMedia: [],
    description: '',
    files: '',
  };

  constructor(private service: UserService) {}

  ngOnInit(): void {}

  sendUser(): void {
    this.service
      .createUser(this.userData)
      .subscribe((user) => console.log(user));
  }
}
