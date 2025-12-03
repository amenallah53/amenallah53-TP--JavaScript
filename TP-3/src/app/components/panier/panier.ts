import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './panier.html',
  styleUrl: './panier.css',
})
export class Panier {
  @Input() items: string[] = [];
}
