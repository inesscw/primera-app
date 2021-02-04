import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit, OnChanges {

  @Input() usuario: Usuario;
  // @Input() nombre: string;
  // @Input() apellidos: string;
  // @Input() edad: number;
  // @Input() estaSoltero: boolean;

  label: string;

  constructor() {
    // this.nombre = 'Usuario desconocido';
    // this.apellidos = 'Apellidos no conocidos';
    // this.edad = 0;
    // this.estaSoltero = null;
    // console.log('Creando el objeto UsuarioComponent');
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.nombre) {
      console.log(changes.nombre.currentValue);
    }
    if (changes.apellidos) {
      console.log(changes.apellidos.currentValue);
    }
    if (changes.edad) {
      console.log(changes.edad.currentValue);
      this.label = `La edad de ${this.usuario.nombre} ha cambiado de ${changes.edad.previousValue} a ${changes.edad.currentValue}`;
    }
    if (changes.estaSoltero) {
      console.log(changes.estaSoltero.currentValue);
    }
  }

  ngOnInit(): void {
    console.log('Inicializando el objeto UsuarioComponent');
  }

}