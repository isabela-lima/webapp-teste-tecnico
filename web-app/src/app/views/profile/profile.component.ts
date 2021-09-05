import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  id!: any;
  user!: User;

  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

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
        socialMedia: res.socialMedia,
        status: res.status,
      };
      console.log(res);
    });
  }

  update() {
    this.userService.editUser(this.id, this.user).subscribe((res) => {
      alert('Perfil atualizado.');
    });
  }

  delete() {
    this.userService.deleteUser(this.id).subscribe((res) => {
      alert('Removido com sucesso');
      this.router.navigate(['']);
    });
  }
}
