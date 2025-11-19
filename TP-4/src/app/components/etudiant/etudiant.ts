import { Component } from '@angular/core';
import { Student, Students } from './TypeStudent';

@Component({
  selector: 'app-etudiant',
  imports: [],
  templateUrl: './etudiant.html',
  styleUrl: './etudiant.css',
})
export class Etudiant {
  etuds = Students;
  selectedEtudiant?: Student;

  onSelect(e: Student) {
    this.selectedEtudiant = e;
  }
}
