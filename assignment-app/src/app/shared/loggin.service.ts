import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogginService {

  constructor() { }

  log(assignmentName ,action) {
    console.log("Assignment" + assignmentName + " : " + action);
  }
}
