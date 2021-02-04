import { Component, OnInit } from '@angular/core';
import { Usuario } from './model/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  usuarios: Usuario[] = [];
  nombre = 'Juan';
  edad = 20;
  usuario: Usuario;

  constructor() {
    this.usuarios = [
      {
        nombre: 'Andres ',
        apellidos: 'Sanxhez',
        edad: 23,
        activo: false
      },
      {
        nombre: 'Rocio ',
        apellidos: 'Ruiz',
        edad: 23,
        activo: true
      },
      {
        nombre: 'Ana ',
        apellidos: 'Lopez',
        edad: 21,
        activo: false
      },
      {
        nombre: 'Juan ',
        apellidos: 'Fernandez',
        edad: 22,
        activo: false
      }];

    this.usuarios.push({
      nombre: 'Lidia ',
      apellidos: 'Fernandez',
      edad: 22,
      activo: false
    });


    this.usuario = new Usuario();

    this.usuario.nombre = 'Marta';
    this.usuario.apellidos = 'Lopez';
    this.usuario.edad = 26;
    this.usuario.activo = true;
  }

  ngOnInit(): void {
  }

  mostrarUsuario(u: Usuario): void {
    // FORMA 1
    // this.usuario.nombre = u.nombre;
    // this.usuario.apellidos = u.apellidos;
    // this.usuario.edad = u.edad;
    // this.usuario.activo = u.activo;

    // FORMA 2
    this.usuario = u;

    //ALERTA
    // alert(`El usuario ${u.nombre} ${u.apellidos} con edad ${u.edad} hizo click`);
  }
}