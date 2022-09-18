import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup  } from '@angular/forms';
import { ProductService } from 'src/app/services/product/product.service';
import { Producto } from 'src/app/models/Product/product';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  form: FormGroup;
  producto: Producto;
  constructor(private router: Router,private fb: FormBuilder, private servicio: ProductService) { 
    this.form = this.fb.group({
      nombre: '',
      precio: '',
      cantidad: '',
    });
    this.producto = new Producto()
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.producto.nombre = this.form.value.nombre;
    this.producto.precio = this.form.value.precio;
    this.producto.cantidad = this.form.value.cantidad;
    this.servicio.registrarProducto(this.producto).subscribe(res =>{
      const data: any = res;
      if (data.length == 0){
        alert('Ocurrio un error');
        return;
      } 
      alert('Producto registrado');
      this.router.navigate(['mainProduct']);
      }, err=>{
        console.log(err);
      })
  }
  irMenu(): void {
    this.router.navigate(['mainProduct']);
  }

}
