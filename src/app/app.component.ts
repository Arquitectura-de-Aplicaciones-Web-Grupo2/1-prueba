import { Component } from '@angular/core';

import{Producto}from './models/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productoArray: Producto[]=[
    {id:1, name:"producto1",precio:10},
    {id:2, name:"producto2",precio:20},
    {id:3, name:"producto3",precio:30},
    {id:4, name:"producto4",precio:40},
  ]
}
