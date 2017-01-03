import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
    {
        path: 'one-page',
        loadChildren: 'app/one-page/one-page.module#OnePageModule',
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [

    ]
})
export class AppRoutingModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/