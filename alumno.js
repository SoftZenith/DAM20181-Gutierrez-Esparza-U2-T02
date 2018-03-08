"use strict";
exports.__esModule = true;
var Alumno = /** @class */ (function () {
    function Alumno() {
        this.alumnos = Array();
    }
    Alumno.prototype.agregar = function (nuevo) {
        this.alumnos.push(nuevo);
        return true;
    };
    Alumno.prototype.borrar = function (ctrl) {
        var n = this.alumnos.indexOf(ctrl);
        this.alumnos.splice(n, n + 1);
        return false;
    };
    Alumno.prototype.imprimir = function () {
        this.alumnos.forEach(function (element) {
            console.log("\n                         No Control: " + element.no_ctrl + "\n                         Nombre: " + element.nombre + "\n                         Apellidos: " + element.apellidos + "\n                         Promedio: " + element.promedio + "\n                         Genero: " + element.genero + "\n                         fecha nacimiento: " + element.fecha_nac + "\n                         Activo: " + element.activo + "\n                         -------------------------------------------");
        });
    };
    Alumno.prototype.modificar = function (alumno, nuevo) {
        this.borrar(alumno);
        this.alumnos.push(nuevo);
        return true;
    };
    return Alumno;
}());
exports.Alumno = Alumno;
