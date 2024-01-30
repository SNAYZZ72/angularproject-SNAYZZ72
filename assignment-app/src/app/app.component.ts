import {Component, HostBinding, Input, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
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





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatIconModule, MatDividerModule, AssignmentsComponent, MatToolbar, MatSidenavModule, MatListModule, MatToolbarRow, MatSlideToggle, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'assignment-app';
  opened: boolean = false;

  switchTheme = new FormControl(false);
  @HostBinding('class') className = '';

  ngOnInit(): void {
    this.switchTheme.valueChanges.subscribe((darkMode) => {
      this.className = darkMode ? 'theme-dark' : 'theme-light';
    });
  }
}
