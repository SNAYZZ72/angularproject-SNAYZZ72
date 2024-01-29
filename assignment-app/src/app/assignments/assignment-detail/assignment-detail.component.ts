import { Component, Input, OnInit } from '@angular/core';
import {Assignment} from "../assignement.model";


@Component({
  selector: 'app-assignment-detail',
  standalone: true,
  imports: [],
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.css'
})
export class AssignmentDetailComponent implements OnInit {
  @Input() assignmentTransmis !: Assignment;

  constructor() { }

  ngOnInit(): void {
  }

}
