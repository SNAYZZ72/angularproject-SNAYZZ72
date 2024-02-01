import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from '../assignments/assignement.model';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-edit-assignment',
  standalone: true,
  imports: [CommonModule, MatButtonModule, FormsModule, MatIconModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatCardContent, MatCardTitle, MatCardHeader, MatCard],
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css'],
})
export class EditAssignmentComponent implements OnInit {
  assignment!: Assignment | undefined;
  nomAssignment!: string;
  dateDeRendu!: Date;

  constructor(
    private assignmentsService: AssignmentsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAssignment();

    /*
    console.log("Query params : ")
    console.log(this.route.snapshot.queryParams);
    console.log("Fragment : ")
    console.log(this.route.snapshot.fragment);
    */

    // on peut aussi souscrire aux changements de paramètres
    // utile pour suivre les changements dans un formulaire
    // par exemple

    this.route.queryParams
      .subscribe((qp) => {
        console.log('Query params : ');
        console.log(qp);
      });

    this.route.fragment
      .subscribe((frag) => {
        console.log('Fragment : ');
        console.log(frag);
      });
  }

  getAssignment() {
    // on récupère l'id dans le snapshot passé par le routeur
    // le "+" force l'id de type string en "number"
    const id = +this.route.snapshot.params['id'];

    this.assignmentsService.getAssignment(id)
      .subscribe((assignment) => {
        if (!assignment) return;
        this.assignment = assignment;
        // Pour pré-remplir le formulaire
        this.nomAssignment = assignment.nom;
        this.dateDeRendu = assignment.dateDeRendu;
      });
  }

  onSaveAssignment() {
    if (!this.assignment) return;

    // on récupère les valeurs dans le formulaire
    this.assignment.nom = this.nomAssignment;
    this.assignment.dateDeRendu = this.dateDeRendu;
    this.assignmentsService
      .updateAssignment(this.assignment)
      .subscribe((message) => {
        console.log(message);

        // navigation vers la home page
        this.router.navigate(['/home']);
      });
  }
}
