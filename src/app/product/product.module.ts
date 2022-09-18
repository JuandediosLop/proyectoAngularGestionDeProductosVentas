import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { HomeModule } from '../home/home.module';
import { ShowProductsComponent } from './show-products/show-products.component';
import { MainProductComponent } from './main-product/main-product.component';
import { ProductService } from '../services/product/product.service';
import { NewProductComponent } from './new-product/new-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModifyProductComponent } from './modify-product/modify-product.component';

@NgModule({
  declarations: [
    ProductComponent,
    ShowProductsComponent,
    MainProductComponent,
    NewProductComponent,
    ModifyProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule
  ], 
  providers: [ProductService]
})
export class ProductModule { }
