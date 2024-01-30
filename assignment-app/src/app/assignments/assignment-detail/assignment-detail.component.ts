import { Component, Input, OnInit } from '@angular/core';
import {Assignment} from "../assignement.model";
import {MatCard, MatCardContent, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {DatePipe} from "@angular/common";
import {MatCheckbox} from "@angular/material/checkbox";


@Component({
  selector: 'app-assignment-detail',
  standalone: true,
  imports: [
    MatCardContent,
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    DatePipe,
    MatCheckbox
  ],
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.css'
})
export class AssignmentDetailComponent implements OnInit {
  @Input() assignmentTransmis !: Assignment;

  constructor() { }

  ngOnInit(): void {
  }

  onAssignmentRendu() {
    console.log("Assignment devient rendu chez le composant fils!");
    this.assignmentTransmis.rendu = true
  }

}
