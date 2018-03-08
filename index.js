"use strict";
exports.__esModule = true;
var alumno_1 = require("./alumno");
var p_alumno = {
    no_ctrl: "13400424",
    nombre: "Bryan",
    apellidos: "Gutierrez",
    promedio: 10,
    genero: "H",
    fecha_nac: new Date(1478708162000),
    activo: false
};
var n_alumno = {
    no_ctrl: "13400424",
    nombre: "Bryan",
    apellidos: "Gutierrez",
    promedio: 10,
    genero: "H",
    fecha_nac: new Date(1478708162000),
    activo: false
};
var r_alumno = {
    no_ctrl: "13400932",
    nombre: "Pedro",
    apellidos: "Lopez",
    promedio: 9,
    genero: "M",
    fecha_nac: new Date(1478708162000),
    activo: false
};
var nuevo = new alumno_1.Alumno();
nuevo.agregar(n_alumno);
nuevo.agregar(r_alumno);
nuevo.agregar(p_alumno);
nuevo.imprimir();
nuevo.borrar(n_alumno);
console.log("Despues de borrar");
nuevo.imprimir();
nuevo.modificar(n_alumno, r_alumno);
