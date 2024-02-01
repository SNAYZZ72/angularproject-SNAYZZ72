import { Component } from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {FormControl, FormGroup, FormsModule, Validators} from "@angular/forms";
import {AuthService} from "../shared/auth.service";
import {Router, RouterLink} from "@angular/router";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSnackBar} from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCheckbox} from "@angular/material/checkbox";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatLabel,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    ReactiveFormsModule,
    MatCheckbox,
    RouterLink,
    MatCardContent,
    MatCardTitle,
    MatCard,
    MatCardHeader

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  onSubmit() {
    if (this.loginForm.valid) {
      const { login, password } = this.loginForm.value;
      if (this.authService.logIn(login, password)) {
        this.router.navigate(['/home']);
      } else {
        this.snackBar.open('Login ou mot de passe incorrect', 'Fermer', {
          duration: 3000,
        });
      }
    } else {
      this.snackBar.open('Veuillez remplir tous les champs requis', 'Fermer', {
        duration: 3000,
      });
    }
  }

}
