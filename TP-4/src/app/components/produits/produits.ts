import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Produit {
  id: number;
  nom: string;
  stock: number;
}

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './produits.html',
  styleUrls: ['./produits.css']
})
export class ProduitsComponent {
  produits: Produit[] = [
    { id: 1, nom: 'Souris', stock: 12 },
    { id: 2, nom: 'Clavier', stock: 65 },
    { id: 3, nom: 'Écran', stock: 40 },
  ];

  adjustStock(p: Produit, delta: number) {
    p.stock = Math.max(0, p.stock + delta);
  }
}
