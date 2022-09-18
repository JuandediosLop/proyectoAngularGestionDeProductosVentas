import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup  } from '@angular/forms';
import { UsuarioService } from 'src/app/services/user/user.service';
import { Usuario } from 'src/app/models/User/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  usuario: Usuario;
  public previsualizacion: string;
  private fileTmp:any;
  public hola: any;
  public path = [];  

  constructor(private router: Router,private fb: FormBuilder, private servicio: UsuarioService) { 

    this.form = this.fb.group({
      username: '',
      pass: '',
      nombre: '',
      apellido: '',
      foto: ''
    });

    this.usuario = new Usuario()
  }

  ngOnInit(): void {
  }
  irLogin(): void {
    this.router.navigate(['/login']);
  }

  submit(){
    if(this.form.value.username == ''){
      alert('Por favor ingrese un usuario');
      return;
    }
    if(this.form.value.pass  == ''){
      alert('Por favor ingrese una contraseña');
      return;
    }
    if(this.form.value.nombre  == ''){
      alert('Por favor ingrese un nombre');
      return;
    }
    if(this.form.value.apellido  == ''){
      alert('Por favor ingrese un apellido');
      return;
    }
    if(this.form.value.foto  == ''){
      alert('Por favor ingrese una foto');
      return;
    }
    const body = new FormData();
    body.append('myFile', this.fileTmp.fileRaw, this.fileTmp.fileName);
    body.append('email','test@test.com')
    this.servicio.sendPost(body)
    .subscribe(res =>{
   
    this.usuario.foto = res.url;
    this.usuario.login_name = this.form.value.username;
    this.usuario.password = this.form.value.pass;
    this.usuario.nombre = this.form.value.nombre;
    this.usuario.apellido = this.form.value.apellido;
    this.usuario.id_rol = 1;
    this.usuario.id_estado = 1;
    this.servicio.registerUser(this.usuario).subscribe(res =>{
      const data: any = res;
      alert('Usuario registrado correctamente');
      this.router.navigate(['login']);
    }, err=>{
      console.log(err);
    }
      )
      
    })
  }

  getFile($event: any): void {
    //TODO esto captura el archivo!
    const [ file ] = $event.target.files;
    this.fileTmp = {
      fileRaw:file,
      fileName:file.name
    }
  }

}
