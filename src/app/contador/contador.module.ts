
import  {NgModule} from '@angular/core' ;
import { ContaComponent } from './contador/contador.component';

@NgModule({

        declarations: [
            ContaComponent

        ],

        exports:[

            ContaComponent
        ],


})

export class ContadorModule {

}