import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-adios-mundo',
  templateUrl: './adios-mundo.component.html',
  styleUrls: ['./adios-mundo.component.scss']
})
export class AdiosMundoComponent implements OnInit {

  @Input() mensaje = '';
  constructor() { }

  ngOnInit(): void {
  }

}
