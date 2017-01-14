import { Component, OnInit } from '@angular/core'

@Component({ selector: 'products', moduleId: module.id, templateUrl: '../html/products.component.html', styleUrls: ['../scss/products.component.css'] })

export class ProductsComponent implements OnInit {
    constructor() { }
    products: Array<string> = new Array<string>();
    ngOnInit() {
        for (let i = 1; i < 21; i++) {
            this.products.push(`product ${i}`)
        }
    }
}