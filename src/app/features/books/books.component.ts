import {Component} from '@angular/core'
import {BOOKS_DATA} from '../../common/models/mocks/books-data.mocks'

    @Component({
        selector: 'books-cmp',
        templateUrl: './book.component.html',
        styleUrls: ['./book.component.scss']
})

export class BooksComponent {
    bookDetail: any;
    booksModel: any = BOOKS_DATA;
    
viewBookDetail(book:any):void{
    this.bookDetail = book;
}
}