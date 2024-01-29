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

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule, RenduDirective, MatButtonModule, FormsModule, MatIconModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, AssignmentDetailComponent, MatListModule, MatDividerModule],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent implements OnInit {

  ngOnInit(): void {
    setTimeout( () => {
      this.ajoutActive = true
    }, 2000);
  }

  onSubmit() {
    console.log("Devoir ajouté")

    const newAssignment = new Assignment()
    newAssignment.nom = this.nomDevoir
    newAssignment.dateDeRendu = this.dateDeRendu
    newAssignment.rendu = false
    this.assignments.push(newAssignment)
  }

  assignmentClique(assignment: Assignment) {
    this.assignmentSelectionne = assignment
    console.log("Assignment cliqué : " + assignment.nom)
  }

  titre = 'mon application sur les assignments'
  ajoutActive = false
  nomDevoir!: string
  dateDeRendu!: Date
  assignmentSelectionne!: Assignment

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
