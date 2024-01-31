import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet, RouterModule, Router} from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { AssignmentsComponent } from './assignments/assignments.component';
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatSlideToggle} from "@angular/material/slide-toggle";
import EventEmitter from "node:events";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {OverlayContainer} from "@angular/cdk/overlay";
import {AuthService} from "./shared/auth.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatIconModule, MatDividerModule, AssignmentsComponent, MatToolbar, MatSidenavModule, MatListModule, MatToolbarRow, MatSlideToggle, ReactiveFormsModule, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'assignment-app';
  opened: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (!this.authService.loggedIn) {
      this.authService.logIn();
    }
    else {
      this.authService.logOut();
      this.router.navigate(['/home']);
    }
  }

  switchTheme = new FormControl(false);
  @HostBinding('class') className = '';

  ngOnInit(): void {
    this.switchTheme.valueChanges.subscribe((darkMode) => {
      this.className = darkMode ? 'theme-dark' : 'theme-light';
    });
  }
}
