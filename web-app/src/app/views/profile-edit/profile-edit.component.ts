import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Department {
  value: string;
  viewValue: string;
}

interface Groups {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss'],
})
export class ProfileEditComponent implements OnInit {
  id!: any;
  user!: User;
  departments: Department[] = [
    { value: 'Administração', viewValue: 'Administração' },
    { value: 'Financeiro', viewValue: 'Financeiro' },
    { value: 'Direção', viewValue: 'Direção' },
    { value: 'Operacional', viewValue: 'Operacional' },
    { value: 'Infraestrutura', viewValue: 'Infraestrutura' },
    { value: 'Desenvolvimento', viewValue: 'Desenvolvimento' },
    { value: 'Comercial', viewValue: 'Comercial' },
  ];

  groups: Groups[] = [
    { value: 'CLT', viewValue: 'CLT' },
    { value: 'PJ', viewValue: 'PJ' },
    { value: 'Freelancer', viewValue: 'Freelancer' },
    { value: 'Parceiros', viewValue: 'Parceiros' },
    { value: 'Outros', viewValue: 'Outros' },
  ];

  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
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
        github: res.github,
        instagram: res.instagram,
        facebook: res.facebook,
        twitter: res.twitter,
        status: res.status,
      };
      console.log(res);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { id: this.user.id },
    });

    dialogRef.afterClosed().subscribe((confirmed: any) => {
      console.log(confirmed);
    });
  }

  update() {
    this.userService.editUser(this.id, this.user).subscribe((res) => {
      const snack = this.snackBar.open(
        'Perfil atualizado com sucesso!',
        'Fechar'
      );
      this.router.navigate(['']);
    });
  }
}
