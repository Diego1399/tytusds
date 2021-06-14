import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpcionesComponent } from './Componentes/opciones/opciones.component';
import { ListasCircularesComponent } from './PaginasWeb/listas-circulares/listas-circulares.component';

@NgModule({
  declarations: [
    AppComponent,
    OpcionesComponent,
    ListasCircularesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }