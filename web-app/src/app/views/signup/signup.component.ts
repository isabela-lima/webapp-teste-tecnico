import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

interface Department {
  value: string;
  viewValue: string;
}

interface Groups {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  user: User = {
    id: '',
    name: '',
    avatar: '',
    email: '',
    age: null,
    login: '',
    password: '',
    status: false,
    department: '',
    groups: '',
    github: '',
    instagram: '',
    facebook: '',
    twitter: '',
    description: '',
    files: '',
  };

  departments: Department[] = [
    { value: 'adminstracao', viewValue: 'Adminstração' },
    { value: 'financeiro', viewValue: 'Financeiro' },
    { value: 'direcao', viewValue: 'Direção' },
    { value: 'operacional', viewValue: 'Operacional' },
    { value: 'infraestrutura', viewValue: 'Infraestrutura' },
    { value: 'desenvolvimento', viewValue: 'Desenvolvimento' },
    { value: 'comercial', viewValue: 'Comercial' },
  ];

  groups: Groups[] = [
    { value: 'clt', viewValue: 'CLT' },
    { value: 'pj', viewValue: 'PJ' },
    { value: 'freelancer', viewValue: 'Freelancer' },
    { value: 'parceiro', viewValue: 'Parceiros' },
    { value: 'outros', viewValue: 'Outros' },
  ];

  constructor(
    private service: UserService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}

  sendUser(): void {
    this.service.createUser(this.user).subscribe((user) => {
      const snack = this.snackBar.open('Perfil criado com sucesso', 'Fechar');
      this.router.navigate(['']);
    });
  }
}
