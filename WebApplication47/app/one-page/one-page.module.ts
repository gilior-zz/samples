import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import * as components from './components-barrel';



@NgModule({
    imports: [SharedModule],
    declarations: [components.AboutComponent, components.ClientsComponent, components.ContactComponent, components.HomeComponent, components.MenuComponent, components.MyAccountComponent, components.ProductsComponent]
  
})
export class OnePageModule { }
