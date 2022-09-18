import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup  } from '@angular/forms';
import { ProductService } from 'src/app/services/product/product.service';
import { Producto } from 'src/app/models/Product/product';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent implements OnInit {
  form: FormGroup;
  producto: Producto;
  parametros: FormGroup;
  productoFinal: Producto;

  constructor(private router: Router,private fb: FormBuilder, private servicio: ProductService, private fbP: FormBuilder) { 
    this.form = this.fb.group({
      nombre: '',
      precio: null,
      cantidad: null,
      estado: null,
    });
    this.parametros = this.fbP.group({
      id: '',
      // nombre: '',
    });
    this.producto = new Producto()
    this.productoFinal = new Producto();
  }

  ngOnInit(): void {
  }
  traerProducto(): void{
    //consultar ProductoId
    console.log(this.parametros.value.id);
    
    this.servicio.consultarProductoId(this.parametros.value.id).subscribe((resultado: any) =>{ 
      this.producto = resultado;
      console.log(this.producto);
      //ingresar al formulario los datos del producto
      this.form.controls['nombre'].setValue(this.producto[0].nombre);
      this.form.controls['precio'].setValue(this.producto[0].precio);
      this.form.controls['cantidad'].setValue(this.producto[0].cantidad);
      this.form.controls['estado'].setValue(this.producto[0].estado);
      }, err=>{
        console.log(err);
      }
      );
  }

  submit():void{
    
    this.productoFinal.idProducto = this.producto[0].idProducto;
    this.productoFinal.nombre = this.form.value.nombre;
    this.productoFinal.precio = this.form.value.precio;
    this.productoFinal.cantidad = this.form.value.cantidad;
    this.productoFinal.estado = this.form.value.estado;
    
    console.log(this.form.value.cantidad);
    console.log(this.form.value.estado);
    console.log(this.productoFinal);
    
    this.servicio.modificarProducto(this.productoFinal).subscribe((resultado: any) =>{
      console.log(resultado);
      if(resultado.affectedRows == 1 ){
        this.router.navigate(['/mainProduct']);
      }
      
    }, err=>{
      console.log(err);
    }
    );

  }

}
