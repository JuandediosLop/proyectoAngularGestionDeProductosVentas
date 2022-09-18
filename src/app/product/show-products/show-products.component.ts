import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/Product/product';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  //guardar en una variable los datos 
  public productos:any;
  public fechaCorta:any [] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  //consultar datos de la api
    this.productos = JSON.parse(localStorage.getItem('productos') || '{}');
    this.productos.map((producto: Producto) => {
      //obtener la fecha de creacion corta
      let fecha = new Date(producto.fechaCreacion);
      let dia = fecha.getDate();
      let mes = fecha.getMonth() + 1;
      let anio = fecha.getFullYear();

      let fechaCor = dia + '-' + mes + '-' + anio;
      this.fechaCorta.push(fechaCor);
      //ingresar al array fechaCor al array fechaCorta

      
      this.productos = this.productos.map((item, indice) => ({...item, fechaCorta: this.fechaCorta[indice]}))
      
      //subir los cambios al localstorage
      localStorage.setItem('productos', JSON.stringify(this.productos));

    })
  }  
}
