import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent implements OnInit {
  messageDelete: string = 'Você tem certeza que quer deletar esse perfil?';
  confirmButtonText: string = 'Sim';
  cancelButtonText: string = 'Não';
  user!: User;
  id!: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: string },
    private DialogRef: MatDialogRef<ConfirmDialogComponent>,
    private snackBar: MatSnackBar,
    private userService: UserService,
    private router: Router
  ) {
    console.log(this.data);
  }

  ngOnInit(): void {}

  onConfirmClick(): void {
    this.delete();

    this.DialogRef.close();
  }

  delete() {
    this.userService.deleteUser(this.data.id).subscribe((res) => {
      const snack = this.snackBar.open(
        'Perfil deletado com sucesso!',
        'Fechar'
      );
      this.router.navigate(['']);
    });
  }
}
