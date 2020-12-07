import { Component } from '@angular/core'
import { AppDataService } from 'src/app/common/services/app-data.service';
import {App} from '../../common/models/app.model'

    @Component({
        selector: 'newNewApp-cmp',
        templateUrl: './new-page-app.component.html'
    })

export class NewPageComponent{
    aplication: App ={
        num: 0,
        name: '',
        manufacturer: '',
        linkImg: '',
        description: ''
    };

    constructor(private appDataService: AppDataService){}


    save(): void{
        if(this.validate(this.aplication)){
            let result = this.appDataService.addNewApp(this.aplication);
            if(result) console.log("Creado exitosamente");
            else{
                console.log("Error no guardado");
            }
            //console.log(this.aplication)
        }

    }

    validate(apps: App): boolean{
        if(apps.num !== 0) return false;
        if(apps.name === "") return false;
        if(apps.description ==="") return false;
        if(apps.linkImg ==="") return false;
        return true;
    }
}