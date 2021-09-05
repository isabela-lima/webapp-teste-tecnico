import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss'],
})
export class ProfileViewComponent implements OnInit {
  id!: any;
  user!: any;

  constructor(public userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.findUser(this.id).subscribe((res) => {
      this.user = {
        id: res.id,
        name: `${res.name}`,
        email: res.email,
        age: res.age,
        avatar: res.avatar,
        department: res.department,
        description: res.description,
        files: res.files,
        groups: res.groups,
        login: res.login,
        password: res.password,
        github: res.github,
        instagram: res.instagram,
        facebook: res.facebook,
        twitter: res.twitter,
        status: res.status,
      };
      console.log(res);
    });
  }
}
