import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Usuario } from 'src/app/models/User/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient ) { }

  loginUser( usuario: Usuario){
    return this.http.get(`http://localhost:3000/usuario/consultarUsuario/${usuario.login_name}-${usuario.password}` )
    .pipe(map(resultado =>{
      return resultado;
    }))
  }
  registerUser( usuario: Usuario){
    return this.http.post(`http://localhost:3000/usuario/registrarUsuario`, usuario )
    .pipe(map(resultado =>{
      return resultado;
    }))
  }
  updateUser( usuario: Usuario){
    return this.http.put(`http://localhost:3000/usuario/actualizarUsuario`, usuario)
    .pipe(map(resultado =>{
      return resultado;
    }))
  }

  sendPost(body:FormData):Observable<any>{
    return this.http.post(`http://localhost:3000/upload`, body)
  }

}
