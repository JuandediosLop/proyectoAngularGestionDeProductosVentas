import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  public user: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user= JSON.parse(localStorage.getItem('usuario') || '{}');  
  }
  //obtener los datos del localstorage

  consultar(): void {
    this.router.navigate(['profile']);
  }

  modificar(): void {
    this.router.navigate(['profileChanges']);
  }
  
  cerrarSesion():void{
    localStorage.clear();
    this.router.navigate(['/login']);
  }


}
