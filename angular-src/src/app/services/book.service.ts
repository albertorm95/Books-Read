import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {
	book: any;
	constructor(private http: Http) {}

	// Validate Service to require the Book's name
	validateBook(book) {
		if (book.name == undefined) return false; 
		else return true;
	};

	// Service in charge of create the book
	createBook(book) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post('http://localhost:3000/book/create', book, {headers: headers})
			.map(res => res.json())
	};

	// Service in charge of updating the book information
	updateBook(id, book) {
		console.log(id);
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.put('http://localhost:3000/book/update/'+id, book, {headers: headers})
			.map(res => res.json());
	};
	
	// Retrieve all Books Service
	getBooks() {
		return this.http.get('http://localhost:3000/books')
			.map(res => res.json());
	};

	// Retrive single Book information Service
	getBook(id) {
		return this.http.get('http://localhost:3000/book/'+id)
			.map(res => res.json());
	};

	// Delete Book Service
	deleteBook(id) {
		return this.http.delete('http://localhost:3000/book/delete/'+id)
			.map(res => res.json());
	};
}