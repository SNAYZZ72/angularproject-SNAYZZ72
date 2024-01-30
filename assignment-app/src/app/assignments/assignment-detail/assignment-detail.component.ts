import {Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import {Assignment} from "../assignement.model";
import {MatCard, MatCardActions, MatCardContent, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {DatePipe} from "@angular/common";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatButton} from "@angular/material/button";


@Component({
  selector: 'app-assignment-detail',
  standalone: true,
  imports: [
    MatCardContent,
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    DatePipe,
    MatCheckbox,
    MatCardActions,
    MatButton
  ],
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.css'
})
export class AssignmentDetailComponent implements OnInit {
  @Input() assignmentTransmis !: Assignment;
  @Output() deleteRequest = new EventEmitter<Assignment>();

  constructor() { }

  ngOnInit(): void {
  }

  onAssignmentRendu() {
    console.log("Assignment devient rendu chez le composant fils!");
    this.assignmentTransmis.rendu = true
  }

  onDeleteAssignment() {
    console.log("Demande de suppression de l'assignment !");
    this.deleteRequest.emit(this.assignmentTransmis);
  }
}
