import { Component } from '@angular/core'
import {App} from '../../common/models/app.model'

    @Component({
        selector: 'newNewApp-cmp',
        templateUrl: './new-page-app.component.html'
    })

export class NewPageComponent{
    aplication: App ={
        name: '',
        manufacturer: '',
        linkImg: '',
        description: ''
    };

    save(): void{
        console.log(this.aplication)
    }
}