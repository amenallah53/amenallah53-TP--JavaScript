import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Importance = 'élevée' | 'moyenne' | 'faible';

interface Article {
  titre: string;
  contenu: string;
  importance: Importance;
}

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './articles.html',
  styleUrls: ['./articles.css']
})
export class ArticlesComponent {
  articles: Article[] = [
    { titre: 'LapTop Asus', contenu: "Contenu de l'article 1", importance: 'élevée' },
    { titre: 'Laptop Gaming', contenu: "Contenu de l'article 2", importance: 'moyenne' },
    { titre: 'Laptop HP', contenu: "Contenu de l'article 3", importance: 'faible' }
  ];

  newTitle = '';
  newContent = '';
  newImportance: Importance = 'moyenne';
  message = '';

  addArticle() {
    const title = this.newTitle.trim();
    const content = this.newContent.trim();
    if (!title || !content) {
      this.message = 'Titre et contenu requis';
      return;
    }
    if (this.articles.some(a => a.titre.toLowerCase() === title.toLowerCase())) {
      this.message = 'Un article avec ce titre existe déjà';
      return;
    }
    this.articles.push({ titre: title, contenu: content, importance: this.newImportance });
    this.newTitle = ''; this.newContent = ''; this.newImportance = 'moyenne';
    this.message = '';
  }
}
