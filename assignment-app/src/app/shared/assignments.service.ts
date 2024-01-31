import {Injectable, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {Assignment} from "../assignments/assignement.model";
import {LogginService} from "./loggin.service";

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  constructor(private loggingService: LogginService) { }

  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments);
  }

  getAssignment(id: number): Observable<Assignment | undefined> {
    const assignment = this.assignments.find(
      (a) => {
        return a.id === id;
      }
    );
    return of(assignment);
  }

  addAssignment(assignment: Assignment): Observable<string> {
    let newId = this.assignments[this.assignments.length - 1].id + 1;
    assignment.id = newId;
    this.assignments.push(assignment);
    this.loggingService.log(assignment.nom, 'ajouté');
    return of('Service Assignment : assignment ajouté');
  }

  updateAssignment(assignment: Assignment): Observable<string> {
    this.loggingService.log(assignment.nom, 'modifié');
    return of('Service Assignment : assignment modifié');
  }

  deleteAssignment(assignment: Assignment): Observable<string> {
    //this.assignments = this.assignments.filter(a => a !== assignment);
    let index = this.assignments.indexOf(assignment);
    if (index > -1) {
      this.assignments.splice(index, 1);
      this.loggingService.log(assignment.nom, 'supprimé');
      return of('Service Assignment : assignment supprimé');
    }
    else {
      this.loggingService.log(assignment.nom, 'non trouvé');
      return of('Service Assignment : assignment non trouvé');
    }
  }

  assignments : Assignment[]= [
    {
      id:1,
      nom: 'TP Angular 1',
      dateDeRendu: new Date('2024-01-31'),
      rendu: true
    },
    {
      id:2,
      nom: 'TP Angular 2',
      dateDeRendu: new Date('2024-01-07'),
      rendu: false
    },
    {
      id:3,
      nom: 'TP Angular 3',
      dateDeRendu: new Date('2024-02-14'),
      rendu: false
    }
  ]
}
