import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit, OnChanges {

  @Input() contador: number;

  contadorBackup: number;

  contadorRef;

  constructor() {
  }

  /**
   * Voy a detectar el cambio en el parametro de entrar contdor
   * cuando eso pase quiero iniciar un contador sobre ese valor
   * que decrezca el numero en 1 cada segundo
   * @param changes 
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.contador) {

      this.contadorBackup = changes.contador.currentValue;

      clearInterval(this.contadorRef);
      this.comenzarContador();
    }
  }

  ngOnInit(): void {
  }

  reiniciar(): void {
    clearInterval(this.contadorRef);
    this.contador = this.contadorBackup;
    this.comenzarContador();
  }

  private comenzarContador() {
    this.contadorRef = setInterval(() => {
      this.contador--;
      if (this.contador === 0) {
        alert('El contador ha terminado');
        clearInterval(this.contadorRef);
      }
    }, 1000);
  }
}