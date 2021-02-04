import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.scss']
})
export class UsuariosListComponent implements OnInit {

  @Input() listadoDeUsuarios: Usuario[] = [];

  @Output() usuarioSeleccionado = new EventEmitter<Usuario>();
  constructor() {
  }

  ngOnInit(): void {
  }

  mostrarNombre(u: string): void {
    alert(u);
  }

  mostrarUsuario(u: Usuario): void {
    this.usuarioSeleccionado.emit(u);
    //  alert(`El usuario ${u.nombre} ${u.apellidos} con edad ${u.edad} hizo click`);
   }
}

