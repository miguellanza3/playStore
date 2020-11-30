import { Component, Input } from '@angular/core'

    @Component({
        selector: 'detail-movie',
        templateUrl: './movies-detail.component.html',
        styleUrls: ['./movies-detail.component.scss']
})

export class MovieDetailComponent {
    @Input() movie:any;
}