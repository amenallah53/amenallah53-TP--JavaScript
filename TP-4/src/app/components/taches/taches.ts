import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Priority = 'haute'|'moyenne'|'basse';

interface Tache {
  id: number;
  description: string;
  completed: boolean;
  priority: Priority;
}

@Component({
  selector: 'app-taches',
  standalone: true,
  imports: [CommonModule, FormsModule,NgIf,NgFor],
  templateUrl: './taches.html',
  styleUrls: ['./taches.css']
})
export class TachesComponent {
  taches: Tache[] = [
    { id: 1, description: 'Faire le TP Angular', completed: false, priority: 'haute' },
    { id: 2, description: 'Réviser HTML/CSS', completed: false, priority: 'moyenne' },
  ];

  newDescription = '';
  newPriority: Priority = 'moyenne';
  nextId = 3;

  addTache() {
    const desc = this.newDescription.trim();
    if (!desc) return;
    this.taches.push({ id: this.nextId++, description: desc, completed: false, priority: this.newPriority });
    this.newDescription = '';
    this.newPriority = 'moyenne';
  }

  toggleCompleted(t: Tache) {
    t.completed = !t.completed;
  }
}
