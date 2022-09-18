export class Usuario {
    login_name: string;
    password: string;
    nombre: string;
    apellido: string;
    id_rol: number;
    id_estado: number;
    foto: string;
    
    constructor( loginName= '', password= '', nombre= '', apellido= '', idRol= 0, idEstado=0, foto= ''){
        this.login_name = loginName;
        this.password = password;
        this.nombre = nombre;
        this.apellido = apellido;
        this.id_rol = idRol;
        this.id_estado = idEstado;
        this.foto = foto;
    } 

}
