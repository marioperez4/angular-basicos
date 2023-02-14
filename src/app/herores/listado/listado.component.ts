import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Prueba', 'Locuras'];
  heroeBorrado: string = ''
  borrarHeroe() {

    this.heroeBorrado = this.heroes.shift() || ''

  }

}
