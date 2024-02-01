import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { MatListModule } from '@angular/material/list';

import { RenduDirective } from '../shared/rendu.directive';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import {Assignment} from "./assignement.model";
import {AddAssignmentComponent} from "./add-assignment/add-assignment.component";
import {AssignmentsService} from "../shared/assignments.service";
import {Observable, of} from "rxjs";
import {RouterLink} from "@angular/router";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule, RenduDirective, MatButtonModule, FormsModule, MatIconModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, AssignmentDetailComponent, MatListModule, MatDividerModule, AddAssignmentComponent, RouterLink, MatColumnDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatTable, MatHeaderRowDef, MatRowDef, MatCellDef, MatHeaderCellDef, MatToolbar],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent implements OnInit {
  displayedColumns: string[] = ['dateDeRendu', 'nom', 'etat'];
  ngOnInit(): void {
    this.getAssignments();
  }
  getAssignments(): void {
    this.assignmentsService.getAssignments()
      .subscribe(assignments => this.assignments = assignments);
  }

  constructor(private assignmentsService: AssignmentsService) {
  }

  titre = 'mon application sur les assignments'
  assignments: Assignment[] = [];
}
