import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  //products = products;
  products : any[] = [
    {"productName":"SHARARA SUIT SET ","price":4199,"image":"https://cdn.shopify.com/s/files/1/2542/7564/products/1_35796c2c-9228-4209-b612-1fd2cbb07bbc_1800x1800.png?v=1630920975","tags":"Color: Aqua Blue Suit Set Fabric: Cotton Dupatta"},
    {"productName":"MEN'S SHOES FASHION ","price":1500,"image":"https://contents.mediadecathlon.com/p2175064/a323df0c88381a47cf8c79a3a38aeb5f/p2175064.jpg?format=auto&quality=70&f=650x0","tags":"Sole: Rubber Closure: Lace-Up Heel Height: 4 inchesShoe"},
    {"productName":"LEATHER BLOCK HEELS ","price":7000,"image":"https://cdn.shopify.com/s/files/1/0254/5883/5510/products/SS_1024x1024.jpg?v=1647089566g","tags":" Leather Lining - Leather Sole - Tunit Heel Height - 4.06 cm"},
    {"productName":"Apple iPhone 14 Plus ","price":89900,"image":"https://m.media-amazon.com/images/I/61YSNhAb00L._SX679_.jpg","tags":"Cinematic mode now in 4K Dolby Vision up to 30 fps.."}
    
  ];
  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/