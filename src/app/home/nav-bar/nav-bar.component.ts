import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public user: any;
  public final: string;
  constructor( private router:Router) { }

  ngOnInit(): void {
    this.user= JSON.parse(localStorage.getItem('usuario') || '{}');  
    this.final = `http://localhost:3000/${this.user[0].foto}`; 
  }
  irMainProductos():void{
    this.router.navigate(['/mainProduct']);
  }
  irMainClient():void{
    this.router.navigate(['/mainClient']);
  }
  irMainTransaccion():void{
    this.router.navigate(['/mainTransaccion']);
  }
  irMainReportes():void{
    this.router.navigate(['/mainReportes']);
  }
  irMainDashboard():void{
    this.router.navigate(['/mainDashboard']);
  }

}
