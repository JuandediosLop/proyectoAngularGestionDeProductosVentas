import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { MainProductComponent } from './main-product/main-product.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ModifyProductComponent } from './modify-product/modify-product.component';


const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'mainProduct', component: MainProductComponent },
  { path: 'showProducts', component: ShowProductsComponent },
  { path: 'newProduct', component: NewProductComponent },
  { path: 'changeProduct', component: ModifyProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
