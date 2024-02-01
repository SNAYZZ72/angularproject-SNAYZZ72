import {Component, Output, EventEmitter} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {MatFormField, MatSuffix, MatError, MatLabel } from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {Assignment} from "../assignement.model";
import {AssignmentsService} from "../../shared/assignments.service";
import {Router} from "@angular/router";
import {MatNativeDateModule} from "@angular/material/core";
import {MatIcon} from "@angular/material/icon";
import {MatCard, MatCardContent} from "@angular/material/card";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-add-assignment',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatDatepicker,
    MatDatepickerModule,
    MatDatepickerToggle,
    MatNativeDateModule,
    MatFormField,
    MatInput,
    MatSuffix,
    MatIcon,
    MatCardContent,
    MatCard,
    NgIf,
    MatError,
    MatLabel
  ],
  providers: [
    MatNativeDateModule
  ],
  templateUrl: './add-assignment.component.html',
  styleUrl: './add-assignment.component.css'
})
export class AddAssignmentComponent {
  //@Output() newAssignmentEvent = new EventEmitter<Assignment>
  nomDevoir !: string
  dateDeRendu !: Date

  constructor(private assignmentsService: AssignmentsService, private router: Router) { }
  onSubmit() {
    console.log("Devoir ajouté")

    const newAssignment = new Assignment()
    newAssignment.nom = this.nomDevoir
    newAssignment.dateDeRendu = this.dateDeRendu
    newAssignment.rendu = false
    //this.assignments.push(newAssignment)
    //this.newAssignmentEvent.emit(newAssignment)

    this.assignmentsService.addAssignment(newAssignment)
      .subscribe(message => {
        console.log(message);
      });

    this.router.navigate(['/home']);
  }

}
