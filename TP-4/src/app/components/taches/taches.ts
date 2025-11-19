import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-taches',
  imports: [NgIf,NgClass,NgStyle],
  templateUrl: './taches.html',
  styleUrl: './taches.css',
})
export class Taches {
  
  taches = [
    { description: "Faire les courses", complete: false, priorite: 'haute' },
    { description: "Réviser Angular", complete: true, priorite: 'moyenne' },
    { description: "Faire du sport", complete: false, priorite: 'basse' }
  ];

  toggle(t: any) {
    t.complete = !t.complete;
  }
}
