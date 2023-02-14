import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroresModule } from './herores/herores.module';
import { ContadorModule } from './contador/contador/contador.module';

//Tarea: crear un nuevo modulo llamado ContadorModule
//Hacer declaraciones y exportaciones para poder utilizarel contadorComponent

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroresModule,
    ContadorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
