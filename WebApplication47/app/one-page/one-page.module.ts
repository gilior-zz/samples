import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import * as components from './components-barrel';
import { OnePageRoutingModule } from './one-page-routing.module'


@NgModule({
    imports: [SharedModule, OnePageRoutingModule],
    declarations: [components.AboutComponent, components.ClientsComponent, components.ContactComponent, components.HomeComponent, components.MenuComponent, components.MyAccountComponent, components.ProductsComponent]

})
export class OnePageModule { }
