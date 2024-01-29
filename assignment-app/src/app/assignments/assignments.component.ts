import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent {
  titre = 'mon application sur les assignments'
  assignments = [
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
