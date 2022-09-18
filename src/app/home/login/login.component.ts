import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/services/user/user.service';
import { Usuario } from 'src/app/models/User/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  usuario: Usuario;

  constructor(private fb: FormBuilder, private router: Router, private servicio: UsuarioService) {
    this.form = this.fb.group({
      username: '',
      pass: '',
    });

    this.usuario = new Usuario()

   }

  ngOnInit(): void {
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

    this.usuario.login_name = this.form.value.username;
    this.usuario.password = this.form.value.pass;
    this.servicio.loginUser(this.usuario).subscribe(res =>{
       const data: any = res;
      if (data.length == 0){
        alert('Usuario o contraseña incorrecta');
        return;
      }
      this.router.navigate(['/mainmenu']);
      localStorage.setItem('usuario', JSON.stringify(data));
    }, err=>{
      console.log(err);
    }
      )
    
    /*usado en clase
     this.router.navigateByUrl('/main');
     */
  }

  irRegister(): void {
    this.router.navigate(['/register']);
  }
}
