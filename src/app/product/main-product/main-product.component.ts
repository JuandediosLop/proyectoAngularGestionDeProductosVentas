import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/Product/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css']
})
export class MainProductComponent implements OnInit {
  public productos:any;


  constructor( private router:Router, private servicio: ProductService ) { }

  ngOnInit(): void {

    this.servicio.consultarProductos().subscribe(res =>{
      const data: any = res;
      if (data.length == 0){
        alert('Ocurrio un error');
        return;
      } 
      localStorage.setItem('productos', JSON.stringify(data));
      }, err=>{
        console.log(err);
      })
  
      this.productos = JSON.parse(localStorage.getItem('productos') || '{}');

  }

  irConsultar(): void {
    this.router.navigate(['showProducts']);
  }
  irNuevoProducto():void{
    this.router.navigate(['newProduct']);
  }
  irCambiarProducto():void{
    this.router.navigate(['changeProduct']);
  }
}
