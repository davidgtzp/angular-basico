import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán América'];
  heroeBorrado:string = '';
  borrado:boolean = false;

  borrarHeroe():void {
    console.log('Borrando...');
    this.heroeBorrado=this.heroes.pop()||'';
    if (this.heroeBorrado.length>0) this.borrado=true; 
    else this.borrado = false;
  }
}
