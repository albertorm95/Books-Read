import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { BookService } from '../../../services/book.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-book',
	templateUrl: './book.component.html',
	styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
	id: any;
	book: any;

	constructor(
		private flashMessage: FlashMessagesService,
		private bookService: BookService,
		private router: Router,
		private route: ActivatedRoute,
	) {
		this.id = this.route.snapshot.params['id'];
	}

	ngOnInit() {
		this.bookService.getBook(this.id).subscribe(book => {
			this.book = book;
		});
	}

	onDeleteSubmit(){
		this.bookService.deleteBook(this.id).subscribe(data => {
			if(data.success){
				this.flashMessage.show('Success! Book deleted.', { cssClass: 'alert-success', timeout: 5000});
				this.router.navigate(['/books']);
			}
			else{
				this.flashMessage.show('Fail! Book no deleted.', { cssClass: 'alert-danger', timeout: 5000});
				this.router.navigate(['/book/'+this.id]);
			}
		});
	}

}