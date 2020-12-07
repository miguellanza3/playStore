import { Component, OnInit } from '@angular/core'
import { AppDataService } from 'src/app/common/services/app-data.service';
import {APP_DATA} from '../../common/models/mocks/apps-data.mock'

    @Component({
        selector: 'app-cmp',
        templateUrl: "./app.component.html",
        styleUrls: ['./app.component.scss']
})

export class ApplicationComponent implements OnInit {
    appDetail: any;
    appsModel: any;

    constructor(private appDataService: AppDataService){

    }
        ngOnInit(): void {
            this.appsModel = this.appDataService.getAppData();
            //throw new Error('Method not implemented.');
        }

        viewAppDetail(app:any):void{
        this.appDetail = app;
    }
}