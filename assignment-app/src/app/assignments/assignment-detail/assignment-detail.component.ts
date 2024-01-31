import {Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import {Assignment} from "../assignement.model";
import {MatCard, MatCardActions, MatCardContent, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {DatePipe} from "@angular/common";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatButton} from "@angular/material/button";
import {AssignmentsService} from "../../shared/assignments.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../shared/auth.service";


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
  //@Input() assignmentTransmis !: Assignment ;
  //@Output() deleteRequest = new EventEmitter<Assignment>();

  assignmentTransmis !: Assignment;

  constructor(private assignmentsService: AssignmentsService,
             private  activatedRoute: ActivatedRoute,
             private router: Router,
             private authService: AuthService) { }

  ngOnInit(): void {
    this.getAssignment()
  }

  getAssignment(): void {
    const id = Number(this.activatedRoute.snapshot.params['id']);
    this.assignmentsService.getAssignment(id)
      .subscribe(a => {
        if (a) {
          this.assignmentTransmis = a;
        }
      });
  }
  onAssignmentRendu() {
    this.assignmentTransmis.rendu = true;

    this.assignmentsService.updateAssignment(this.assignmentTransmis)
      .subscribe(message => {
        console.log(message);
      });

    this.router.navigate(['/home'])
  }

/*  onDeleteAssignment() {
    console.log("Demande de suppression de l'assignment !");
    this.deleteRequest.emit(this.assignmentTransmis);
  }*/

  onDelete() {
    /*    this.assignmentsService.deleteAssignment(this.assignmentTransmis)
          .subscribe(message => {
            console.log(message);
          });

        this.assignmentTransmis = null;
      }*/
    this.assignmentsService.deleteAssignment(this.assignmentTransmis)
      .subscribe(message => {
        console.log(message);
      });
    this.router.navigate(['/home'])
  }

  onClickEdit() {
    this.router.navigate(
      ['/assignment', this.assignmentTransmis.id, 'edit'],
      {
        queryParams: { nom: this.assignmentTransmis.nom },
        fragment: 'edition'
      }
    );
  }

  isAdmin() {
    return this.authService.loggedIn;
  }

}
