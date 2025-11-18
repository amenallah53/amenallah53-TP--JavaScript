import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Book } from '../../models/book';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './book-form.html',
  styleUrls: ['./book-form.css'],
})
export class BookForm implements OnChanges {
  @Output() bookAdded = new EventEmitter<Book>();
  @Output() bookUpdated = new EventEmitter<Book>();

  @Input() bookToEdit?: Book;

  categories: string[] = [
    'Roman','Science','Histoire','Informatique','Art','Autres'
  ];

  newBook: Book = this.getEmptyBook();

  // called whenver @Input variables are changed: it is one of angular life-cycle hooks
  ngOnChanges(changes: SimpleChanges) {
    if (changes['bookToEdit'] && this.bookToEdit) {
      // Preload the form with the selected book
      this.newBook = { ...this.bookToEdit };
    }
  }

  getEmptyBook(): Book {
    return {
      id: 0,
      title: '',
      author: '',
      publisherEmail: '',
      publisherPhone: '',
      releaseDate: '',
      category: 'Art',
      isAvailable: false,
      stock: 0
    };
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) return;

    if (this.newBook.id === 0) {
      // Adding a new book
      this.newBook.id = Math.floor(Math.random() * 100000);
      this.bookAdded.emit({ ...this.newBook });
    } else {
      // Updating an existing book
      this.bookUpdated.emit({ ...this.newBook });
    }

    // Reset form to “add” mode
    form.resetForm({
      category: 'Art',
      isAvailable: false
    });
    this.newBook = this.getEmptyBook();
  }
}
