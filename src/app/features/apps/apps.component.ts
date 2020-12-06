import { Component } from '@angular/core'
import {APP_DATA} from '../../common/models/mocks/apps-data.mock'

    @Component({
        selector: 'app-cmp',
        templateUrl: "./app.component.html",
        styleUrls: ['./app.component.scss']
})

export class ApplicationComponent {
    appDetail: any;
    appsModel: any = APP_DATA;

    viewAppDetail(app:any):void{
        this.appDetail = app;
    }
}