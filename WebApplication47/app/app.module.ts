import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
//import { OnePageModule} from './one-page/one-page.module'
import 'hammerjs';


@NgModule({
    imports: [BrowserModule, AppRoutingModule, MaterialModule.forRoot()],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
