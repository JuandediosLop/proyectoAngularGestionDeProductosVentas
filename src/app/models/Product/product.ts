export class Producto {
    idProducto: number;
    nombre: string;
    precio: number;
    cantidad: number;
    fechaCreacion: Date;
    estado: number
    
    constructor( idProducto= 0, nombre= '', precio= 0, cantidad= 0, fechaCreacion= null, estado=0){
        this.idProducto = idProducto;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.fechaCreacion = fechaCreacion;
        this.estado = estado;
    } 

}