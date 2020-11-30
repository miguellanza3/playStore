import { Component, Input } from '@angular/core'

    @Component({
        selector: 'detail-apps',
        templateUrl: './app-detail.component.html',
        styleUrls: ['./app-detail.component.scss']
})

export class AppDetailComponent {
    @Input() app:any;
}