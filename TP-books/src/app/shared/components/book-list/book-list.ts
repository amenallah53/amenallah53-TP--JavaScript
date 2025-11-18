import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../models/book';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './book-list.html',
  styleUrls: ['./book-list.css'],
})
export class BookList {
  @Input() books: Book[] = [];
  @Output() bookDeleted = new EventEmitter<number>();
  @Output() bookEdited = new EventEmitter<Book>();

  // trackBy function for ngFor
  trackByBookId(index: number, book: Book): number {
    return book.id;
  }

  deleteAction(bookId: number): void {
    console.log('deleteAction called with ID:', bookId); // DEBUG
    this.bookDeleted.emit(bookId);
  }

  editAction(book: Book): void {
    console.log('editedAction called with book', book);
    this.bookEdited.emit(book);
  }

  // search
  searchTerm: string = '';
  sortType: string = '';
  filteredBooks(): Book[] {
    let result = [...this.books];

    // Filtering
    if (this.searchTerm.trim()) {
      const t = this.searchTerm.toLowerCase();
      result = result.filter(b =>
        b.title.toLowerCase().includes(t) ||
        b.author.toLowerCase().includes(t) ||
        b.category.toLowerCase().includes(t)
      );
    }

    // Sorting
    if (this.sortType === 'category') {
      result.sort((a, b) => a.category.localeCompare(b.category));
    }

    if (this.sortType === 'available') {
      result.sort((a, b) => Number(b.isAvailable) - Number(a.isAvailable));
    }

    return result;
  }


}
