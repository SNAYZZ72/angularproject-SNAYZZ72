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

import { RenduDirective } from '../../shared/rendu.directive';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import {Assignment} from "./assignement.model";
import {AddAssignmentComponent} from "./add-assignment/add-assignment.component";

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule, RenduDirective, MatButtonModule, FormsModule, MatIconModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, AssignmentDetailComponent, MatListModule, MatDividerModule, AddAssignmentComponent],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent implements OnInit {
  ngOnInit(): void {
  }

  onAddAssignment() {
    this.formVisible = true
  }

  onNouvelAssignment(event: Assignment) {
    this.assignments.push(event)
    this.formVisible = false
  }


  assignmentClique(assignment: Assignment) {
    this.assignmentSelectionne = assignment
    console.log("Assignment cliqué : " + assignment.nom)
  }

  titre = 'mon application sur les assignments'
  formVisible = false


  assignmentSelectionne!: Assignment

  handleDelete(assignment: Assignment) {
    console.log('Suppression de l\'assignment', assignment.nom);
    const index = this.assignments.indexOf(assignment);
    this.assignments.splice(index, 1);

    //enlever la selection
    this.assignmentSelectionne = this.assignments[-1];
  }

  assignments : Assignment[]= [
    {
      nom: 'TP Angular 1',
      dateDeRendu: new Date('2024-01-31'),
      rendu: true
    },
    {
      nom: 'TP Angular 2',
      dateDeRendu: new Date('2024-01-07'),
      rendu: false
    },
    {
      nom: 'TP Angular 3',
      dateDeRendu: new Date('2024-02-14'),
      rendu: false
    }
  ]

}
