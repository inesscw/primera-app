import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdiosMundoComponent } from './adios.mundo/adios-mundo.component';

import { AppComponent } from './app.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { ContadorComponent } from './contador/contador.component';



@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    AdiosMundoComponent,
    UsuarioComponent,
    UsuariosListComponent,
    ContadorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
