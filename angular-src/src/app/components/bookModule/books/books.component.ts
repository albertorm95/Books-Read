import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { BookService } from '../../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
	book: Object;

	constructor(
        private flashMessage: FlashMessagesService,
        private bookService: BookService,
        private router: Router) { }

	ngOnInit() {
		this.bookService.getBooks().subscribe(books => {
			this.book = books;
		});
	}
}
