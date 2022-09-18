import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup  } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/user/user.service';
import { Usuario } from 'src/app/models/User/user';

@Component({
  selector: 'app-modify-profile',
  templateUrl: './modify-profile.component.html',
  styleUrls: ['./modify-profile.component.css']
})
export class ModifyProfileComponent implements OnInit {
  form: FormGroup;
  public user: any;
  usuario: Usuario;
  private fileTmp:any;

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
    this.user= JSON.parse(localStorage.getItem('usuario') || '{}');
    this.form.controls['username'].disable();
    this.form.controls['username'].setValue(this.user[0].login_name);
    this.form.controls['pass'].setValue(this.user[0].password);
    this.form.controls['nombre'].setValue(this.user[0].nombre);
    this.form.controls['apellido'].setValue(this.user[0].apellido);  
  }
  submit():void{
    this.usuario.login_name = this.user[0].login_name;    
    this.usuario.password = this.form.value.pass;
    this.usuario.nombre = this.form.value.nombre;
    this.usuario.apellido = this.form.value.apellido;
    this.usuario.id_rol = this.user[0].id_rol;
    this.usuario.id_estado = this.user[0].id_estado;
    
    if(this.form.value.foto == ''){

      this.usuario.foto = `${this.user[0].foto}`;
      
      this.servicio.updateUser(this.usuario).subscribe(res =>{
        const data: any = res;
        if(data.affectedRows == 1){
          //actualizar el localstorage
          this.user[0].password = this.form.value.pass;
          this.user[0].nombre = this.form.value.nombre;
          this.user[0].apellido = this.form.value.apellido;
          this.user[0].id_rol = this.user[0].id_rol;
          this.user[0].id_estado = this.user[0].id_estado;
          this.user[0].foto = `${this.user[0].foto}`;
          localStorage.setItem('usuario', JSON.stringify(this.user));
          alert('Usuario modificado correctamente');
          this.router.navigate(['profile']);
        }else{
          alert('No se pudo modificar el usuario');
        }
      }, err=>{
        console.log(err);
      })
    }else{
      const body = new FormData();
      body.append('myFile', this.fileTmp.fileRaw, this.fileTmp.fileName);
      body.append('email','test@test.com')
      this.servicio.sendPost(body)
      .subscribe(res =>{
        this.usuario.foto = res.url;
        console.log(res.url,'foto');
        
        this.servicio.updateUser(this.usuario).subscribe(res =>{
          const data: any = res;
          if(data.affectedRows == 1){
            //actualizar el localstorage
            this.user[0].password = this.form.value.pass;
            this.user[0].nombre = this.form.value.nombre;
            this.user[0].apellido = this.form.value.apellido;
            this.user[0].id_rol = this.user[0].id_rol;
            this.user[0].id_estado = this.user[0].id_estado;
            this.user[0].foto = this.usuario.foto;
            localStorage.setItem('usuario', JSON.stringify(this.user));
            alert('Usuario modificado correctamente');
            this.router.navigate(['profile']);
          }else{
            alert('No se pudo modificar el usuario');
          }
        }, err=>{
          console.log(err);
        })
      });
    }

    
  }
  irMenu():void{
    this.router.navigate(['mainmenu']);
  }
  cerrarSesion():void{
    localStorage.clear();
    this.router.navigate(['home']);
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
