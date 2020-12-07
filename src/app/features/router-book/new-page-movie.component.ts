import { Component } from '@angular/core'
import { Book } from 'src/app/common/models/book.model';

    @Component({
        selector: 'newBook-cmp',
        templateUrl: './new-page-book.component.html'
    })

export class NewPageBookComponent {
    books: Book ={
        title: '',
        author: '',
        price: 0,
        description: '',
        linkImg: ''
    };

    save(): void{
        console.log(this.books)
    }
}    