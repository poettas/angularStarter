import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  constructor() {}

  getBooks() {
    return [
      {
        name: 'clean code',
        author: 'robert c martin',
        image:
          'https://images-eu.ssl-images-amazon.com/images/I/41xShlnTZTL._SX198_BO1,204,203,200_QL40_ML2_.jpg',
        amount: 25,
      },
      {
        name: 'the pragmatic programmer',
        author: 'david thomas',
        image:
          'https://images-na.ssl-images-amazon.com/images/I/51W1sBPO7tL.jpg',
        amount: 30,
      },
      {
        name: 'Clean Architecture',
        author: 'robert c martin',
        image:
          'https://images-na.ssl-images-amazon.com/images/I/41-sN-mzwKL.jpg',
        amount: 15,
      },
      {
        name: 'The Clean Coder',
        author: 'robert c martin',
        image:
          'https://images-na.ssl-images-amazon.com/images/I/51uO-K+V5dL.jpg',
        amount: 25,
      },
    ];
  }
}
