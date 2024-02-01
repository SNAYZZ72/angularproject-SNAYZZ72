import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from '../shared/assignments.service';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-delete-assignment',
  standalone: true,
  imports: [
    MatCardContent,
    MatCardTitle,
    MatCardHeader,
    MatCard,
    MatButton
  ],
  templateUrl: './delete-assignment.component.html',
  styleUrls: ['./delete-assignment.component.css']
})
export class DeleteAssignmentComponent {
  assignmentId: number;

  constructor(
    private route: ActivatedRoute,
    private assignmentsService: AssignmentsService,
    private router: Router
  ) {
    this.assignmentId = +this.route.snapshot.paramMap.get('id');
  }

  onDelete(): void {
    this.assignmentsService. getAssignment(this.assignmentId).subscribe(assignment => {
      this.assignmentsService.deleteAssignment(assignment).subscribe(() => {
        // Redirection après la suppression
        this.router.navigate(['/assignments']);
      });
    });
  }

  onCancel(): void {
    this.router.navigate(['/assignments']);
  }
}
