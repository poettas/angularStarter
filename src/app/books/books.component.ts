import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  //this way of using a service is called "dependency injection"
  constructor(private booksService: BooksService) {}

  books: Book[] = [];

  cart: Book[] = [];

  //isDisabled: boolean = false;

  //for the ngIf:
  isShowing: boolean = true;

  //the injection itself could be done in the constructor and the onInit
  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }

  /*  last piece of the event emitter, isnt needed anymore
 addToCart(book: Book) {
    console.log(book);
  } */

  /*  handleClick() {
    this.isDisabled = true;
    console.log('click is working');
  }
  inputValue: string = ''; */

  /* funtionality of the inline function in the template
  toggleBooks() {
    if isShowing is true, then make it false
    or isShowing is false, then make it true
    this.isShowing = !this.isShowing; 
  } */
}
