import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes: string[]= ['Margarita', 'Clavel','Rosa','Girasol'];
  heroeBorrado: string = '';

borrarHeroe(){
  console.log('Borrando...');

 this.heroeBorrado= this.heroes.pop() || "";
}


}
