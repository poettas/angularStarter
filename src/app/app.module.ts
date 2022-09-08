import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { BooksModule } from './books/books.module';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

/* to create an module the decorator NgMoule is needed */
@NgModule({
  declarations: [AppComponent, CartComponent],

  /* to get a connection to the Browser */
  imports: [BrowserModule, BooksModule, AppRoutingModule, AuthModule],

  /* that defines the very first thing to load within the app */
  bootstrap: [AppComponent],
})
export class AppModule {}
