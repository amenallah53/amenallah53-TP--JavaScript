import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  imports: [],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class Articles {
  articles = [
    { titre: 'Laptop Asus', contenu: 'Contenu 1', importance: 'élevée' },
    { titre: 'Laptop Gaming', contenu: 'Contenu 2', importance: 'moyenne' },
    { titre: 'Laptop HP', contenu: 'Contenu 3', importance: 'faible' }
  ];

  newTitle = "";
  newContent = "";
  newImportance = "moyenne";

  addArticle() {
    if (!this.newTitle || !this.newContent) return;

    this.articles.push({
      titre: this.newTitle,
      contenu: this.newContent,
      importance: this.newImportance
    });

    this.newTitle = "";
    this.newContent = "";
    this.newImportance = "moyenne";
  }
}
