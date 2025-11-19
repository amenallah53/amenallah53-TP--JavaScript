import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-produits',
  imports: [NgFor],
  templateUrl: './produits.html',
  styleUrl: './produits.css',
})
export class Produits {
  produits = [
    { nom: "PC Portable", stock: 80 },
    { nom: "Souris", stock: 35 },
    { nom: "Clavier", stock: 10 }
  ];
}
