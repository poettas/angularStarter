import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Book } from '../../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  //parent to child data flow
  @Input() book: Book = {} as Book;
  isInCart: boolean = false;

  //child to parent data flow, is not needed anymore after using the service
  //@Output() bookEmitter = new EventEmitter<Book>();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart() {
    this.isInCart = true;
    this.cartService.add(this.book);
    //this.bookEmitter.emit(this.book);
  }

  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
  }
}
