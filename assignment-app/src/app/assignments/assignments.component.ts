import {Component, OnInit, ViewChild} from '@angular/core';
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
  MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatToolbar} from "@angular/material/toolbar";
import {MatSort, MatSortModule} from '@angular/material/sort';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule, RenduDirective, MatButtonModule, FormsModule, MatIconModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, AssignmentDetailComponent, MatListModule, MatDividerModule, AddAssignmentComponent, RouterLink, MatColumnDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatTable, MatHeaderRowDef, MatRowDef, MatCellDef, MatHeaderCellDef, MatToolbar, MatSortModule],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent implements OnInit {
  displayedColumns: string[] = ['dateDeRendu', 'nom', 'etat'];
  assignments = new MatTableDataSource<Assignment>();
  // assignments: Assignment[] = [];
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit(): void {
    this.getAssignments();
  }
  ngAfterViewInit() {
    this.assignments.sort = this.sort;
    this.assignments.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'etat': return item.rendu ? 1 : 0;
        default: return item[property];
      }
    };
  }

  getAssignments(): void {
    this.assignmentsService.getAssignments()
      .subscribe(assignments => this.assignments.data = assignments); // Affectation des données
  }
  constructor(private assignmentsService: AssignmentsService) {
  }

}
