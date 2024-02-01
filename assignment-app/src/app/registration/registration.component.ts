import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {NgIf} from "@angular/common";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, MatError, NgIf, MatInput, MatLabel, MatButton, MatFormField, MatCardContent, MatCardTitle, MatCardHeader, MatCard], // Importer ReactiveFormsModule pour le formulaire
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private authService: AuthService,
              private router: Router) {}

  onRegister() {
    const { login, password } = this.registrationForm.value;
    const success = this.authService.register(login, password);

    if (success) {
        alert('Inscription réussie !');
      this.router.navigate(['/login']);
    } else {
        alert('Erreur lors de l\'inscription');
    }
  }

  get login() { return this.registrationForm.get('login'); }
}
