import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//importamos modulos client, dashboard, home, product, report, sale, user
import { ClientModule } from './client/client.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';
import { ProductModule } from './product/product.module';
import { ReportModule } from './report/report.module';
import { SaleModule } from './sale/sale.module';
import { UserModule } from './user/user.module';
import { UsuarioService } from './services/user/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product/product.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientModule,
    DashboardModule,
    HomeModule,
    ProductModule,
    ReportModule,
    SaleModule,
    UserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UsuarioService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
