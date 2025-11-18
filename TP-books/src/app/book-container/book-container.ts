import { Component } from '@angular/core';
import { BookList } from '../shared/components/book-list/book-list';
import { Book } from '../shared/models/book';
import { BookForm } from '../shared/components/book-form/book-form';

@Component({
  selector: 'app-book-container',
  standalone: true,
  imports: [BookList, BookForm],
  templateUrl: './book-container.html',
  styleUrls: ['./book-container.css'],
})
export class BookContainer {
  books: Book[] = [
    new Book(1,'Le Petit Prince','Antoine de Saint-Exupéry','publisher@example.com','0102030405',
      '1943-01-01','Roman',true,4),
    new Book(2,'Sapiens','Yuval Noah Harari','publisher@example.com','0102030406',
      '2011-01-01','Histoire',true,2),
    new Book(3,'Clean Code','Robert C. Martin','publisher@example.com','0102030407',
      '2008-01-01','Informatique',true,5),
    new Book(4,'Histoire de l\'Art','E.H. Gombrich','publisher@example.com','0102030408',
      '1950-01-01','Art',true,1),
    new Book(5,'Divers Essais','Auteur inconnu','publisher@example.com','0102030409',
      '2000-01-01','Autres',false,0)
  ];
  bookBeingEdited?: Book;

  addBook(newBook: Book) {
    this.books = [...this.books, newBook]; // Reassign to new array
  }

  deleteBook(id: number) {
    console.log('deleteBook called with ID:', id); // DEBUG
    this.books = this.books.filter(b => b.id !== id); // Reassign
  }

  editBook(book: Book): void {
    console.log('editBook called with book:', book); // DEBUG
    this.bookBeingEdited = book;
  }

  updateBook(updatedBook: Book) {
    this.books = this.books.map(b => b.id === updatedBook.id ? updatedBook : b);
    this.bookBeingEdited = undefined; // Reset form to add mode
  }
}
