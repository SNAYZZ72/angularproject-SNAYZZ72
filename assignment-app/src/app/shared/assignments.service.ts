import {Injectable, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {Assignment} from "../assignments/assignement.model";
import {LogginService} from "./loggin.service";

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  constructor(private logginService:LogginService) { }



  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments);
  }

  addAssignment(assignement: Assignment): Observable<String> {
    this.assignments.push(assignement);
    this.logginService.log(assignement.nom, "ajouté");
    return of('assignment ajouté');
  }

  updateAssignment(assignment: Assignment): Observable<String> {
    return of('assignment modifié');
  }

  deleteAssignment(assignment: Assignment): Observable<String> {
    let pos = this.assignments.indexOf(assignment);
    if (pos < 0) return of("assignment inexistant");
    this.assignments.splice(pos, 1);

    return of('assignment supprimé');
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
