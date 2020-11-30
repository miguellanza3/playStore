import {Component, Input} from '@angular/core'

    @Component({
        selector: 'book-detail',
        templateUrl: "./book-detail.component.html",
        styleUrls: ["./book-detail.component.scss"]
})

export class BookDetailComponent {
    @Input() book: any;
}