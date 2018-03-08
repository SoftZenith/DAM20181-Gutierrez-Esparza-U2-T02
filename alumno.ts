import { Ifalumno } from "./alumno_inter";

export class Alumno{
    
    alumnos = Array<Ifalumno>();

    constructor() {
        
    }

    agregar(nuevo: Ifalumno): boolean{
        this.alumnos.push(nuevo);
        return true;
    }

    borrar(ctrl: Ifalumno): boolean{
        var n = this.alumnos.indexOf(ctrl);
        this.alumnos.splice(n,n+1);
        return false;
    }

    imprimir(): void{
        this.alumnos.forEach(element => {
            console.log(`
                         No Control: ${element.no_ctrl}
                         Nombre: ${element.nombre}
                         Apellidos: ${element.apellidos}
                         Promedio: ${element.promedio}
                         Genero: ${element.genero}
                         fecha nacimiento: ${element.fecha_nac}
                         Activo: ${element.activo}
                         -------------------------------------------`);
        });
    }

    modificar(alumno: Ifalumno, nuevo: Ifalumno): boolean{
        this.borrar(alumno);
        this.alumnos.push(nuevo);
        return true;
    }

}