import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-produit',
  imports: [NgStyle,NgClass],
  templateUrl: './produit.html',
  styleUrl: './produit.css',
  standalone: true
})
export class Produit {
  @Input() nomProduit: string = 'Produit Par Défaut';
  @Input() price: string = '0.00';
  @Output() ajouterAuPanier = new EventEmitter<string>();
  
  imgUrl = 'assets/mbp14-spaceblack-gallery1-202410.jfif'
  enStock = true

  
  afficherAlerte(): void {
    alert("Produit ajouté au panier")
  }
  toggleStock(): void {
    this.enStock = !this.enStock;
  }
  ajouterProduit(): void {
  this.ajouterAuPanier.emit(this.nomProduit);
  }
}
