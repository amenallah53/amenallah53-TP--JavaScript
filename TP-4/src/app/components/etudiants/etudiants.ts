import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Students, Student } from '../../models/students';

@Component({
  selector: 'app-etudiants',
  standalone: true,
  imports: [CommonModule,NgFor,NgIf],
  templateUrl: './etudiants.html',
  styleUrls: ['./etudiants.css']
})
export class EtudiantsComponent {
  etuds: Student[] = Students;
  selectedEtudiant?: Student;

  onSelect(e: Student) {
    this.selectedEtudiant = e;
  }
}
