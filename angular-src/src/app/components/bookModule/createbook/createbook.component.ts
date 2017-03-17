import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { BookService } from '../../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.css']
})
export class CreateBookComponent implements OnInit {
    name: String;
    genre: String;
    isbn: String;
    publishdate: Date;
    author: String;
    cover: String;
    
  	constructor(
        private flashMessage: FlashMessagesService,
        private bookService: BookService,
        private router: Router) { }

  	ngOnInit() {
  	}
  	
    onRegisterSubmit(){
        const book = {
            name: this.name,
            genre: this.genre,
            isbn: this.isbn,
            publishdate: this.publishdate,
            author: this.author,
            cover: this.cover          
        }

        // Required Fields
        if(!this.bookService.validateCreateBook(book)){
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 5000});
            return false;
        }

        // Create book
        this.bookService.createBook(book).subscribe(data => {
            if(data.success){
                this.flashMessage.show('You have now create a book', { cssClass: 'alert-success', timeout: 5000});
                this.router.navigate(['/books']);
            }
            else{
            this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 5000});
                this.router.navigate(['/createbook']);
            }
        });
    }
}
