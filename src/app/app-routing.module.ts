import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'product', 
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule) 
  }, 
  { 
    path: 'client', 
    loadChildren: () => import('./client/client.module').then(m => m.ClientModule) 
  }, 
  { 
    path: 'sale', 
    loadChildren: () => import('./sale/sale.module').then(m => m.SaleModule) 
  }, 
  { 
    path: 'report', 
    loadChildren: () => import('./report/report.module').then(m => m.ReportModule) 
  }, 
  { 
    path: 'dashboard', 
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) 
  }, 
  { 
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  }, 
  { 
    path: 'user', 
    loadChildren: () => import('./user/user.module').then(m => m.UserModule) 
  },
  {
    path: '', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
