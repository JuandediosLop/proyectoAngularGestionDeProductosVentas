import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup  } from '@angular/forms';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit {
  form: FormGroup;
  public user: any;
  public foto : any;
  public blob = Blob;
  public reader = new FileReader();
  public final: string;

  constructor(private router: Router,private fb: FormBuilder, private sanatizer: DomSanitizer) { 
    this.form = this.fb.group({
      username: '',
      pass: '',
      nombre: '',
      apellido: '',
    });
  }

  ngOnInit(): void {
    this.user= JSON.parse(localStorage.getItem('usuario') || '{}');
    this.form.controls['username'].disable();
    this.form.controls['pass'].disable();
    this.form.controls['nombre'].disable();
    this.form.controls['apellido'].disable();
    this.form.controls['username'].setValue(this.user[0].login_name);
    this.form.controls['pass'].setValue(this.user[0].password);
    this.form.controls['nombre'].setValue(this.user[0].nombre);
    this.form.controls['apellido'].setValue(this.user[0].apellido);
    this.final = `http://localhost:3000/${this.user[0].foto}`;  
  }
  submit():void{
    this.router.navigate(['profileChanges']);
  }
  irMenu():void{
    this.router.navigate(['mainmenu']);
  }
  cerrarSesion():void{
    localStorage.clear();
    this.router.navigate(['home']);
  }
}
