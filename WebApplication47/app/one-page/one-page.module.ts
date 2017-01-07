import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import * as components from './components-barrel';
import * as directives from './directives-barrel';
import { OnePageRoutingModule } from './one-page-routing.module'
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
    imports: [SharedModule, OnePageRoutingModule, MaterialModule, FlexLayoutModule],
    declarations: [components.AboutComponent, components.ClientsComponent, components.ContactComponent, components.HomeComponent, components.MenuComponent, components.MyAccountComponent, components.ProductsComponent, components.PressComponent, directives.HoverDirectiveComponent]

})
export class OnePageModule { }
