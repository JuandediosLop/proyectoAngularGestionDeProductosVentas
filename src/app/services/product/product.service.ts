import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/models/Product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient) { }

  consultarProductos(){
    return this.http.get(`http://localhost:3000/producto/consultarProductos`)
    .pipe(map(resultado =>{
      return resultado;
    }))
  }
  registrarProducto(Producto: any){
    return this.http.post(`http://localhost:3000/producto/registrarProducto`, Producto)
    .pipe(map(resultado =>{
      return resultado;
    }))
  }
  //consultar producto por id
  consultarProductoId(id: any){
    return this.http.get(`http://localhost:3000/producto/consultarProductoId/${id}`)
    .pipe(map(resultado =>{
      return resultado;
    }))
  }
  //modificar producto
  modificarProducto(Producto: any){
    return this.http.put(`http://localhost:3000/producto/actualizarProducto`, Producto)
    .pipe(map(resultado =>{
      return resultado;
    }))
  } 

}
