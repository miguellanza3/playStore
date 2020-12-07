import {APP_DATA} from '../models/mocks/apps-data.mock'
import { Injectable } from '@angular/core';
import { App } from '../models/app.model';


    @Injectable({providedIn: 'root'})
export class AppDataService {
    constructor(){}

     getAppData(): any {
        return APP_DATA;
    } 
    

    addNewApp(apps: App): boolean{
        try {
            let lastId = APP_DATA.apps.length === 0 ? 0: APP_DATA.apps[APP_DATA.apps.length - 1].num;
            apps.num = lastId + 1;

            APP_DATA.apps.push(apps);
            return true;
        } catch (err) {
            console.error(err);
            return false;
        }
        
    }
}