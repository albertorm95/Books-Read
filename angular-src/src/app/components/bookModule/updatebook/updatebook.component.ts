import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { BookService } from '../../../services/book.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
  id: any;
  book: any;
  name: String;
  author: String;
  isbn: String;
  cover: String;
  genre: String;
  publishdate: Date;

  constructor(
    private flashMessage: FlashMessagesService,
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.bookService.getBook(id).subscribe(book => {
      this.book = book;
    });
  }

  onUpdateSubmit(){
    const id = this.route.snapshot.params['id'];
    const book = {
      name: this.name,
      author: this.author,
      isbn: this.isbn,
      cover: this.cover,
      genre: this.genre,
      publishdate: this.publishdate
    }
    console.log(id);
    console.log(book.name);
    console.log(book.author);
    console.log(book.genre);
    console.log(book.isbn);
    console.log(book.publishdate);
    console.log(book.cover);

    // Required Fields
    if(!this.bookService.validateBook(book)){
      this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    // Update book
    this.bookService.updateBook(id, book).subscribe(data => {
      if(data.success){
        this.flashMessage.show('Book updated!', { cssClass: 'alert-success', timeout: 5000});
        this.router.navigate(['/book/'+id]);
      }
      else{
        this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 5000});
        this.router.navigate(['/book/'+id]);
      }
    });
  }

}
