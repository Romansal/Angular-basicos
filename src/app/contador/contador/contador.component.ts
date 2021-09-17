import { Component } from "@angular/core";



@Component({
 selector:  'app-contador',
 template:`
 <h1>{{titulo}}</h1>

<button (click)="sumar()"> +1</button>
<span> {{numero}} </span>
<button (click)="restar()"> -1 </button>
<br>
<br>
<button (click)="acumular(2)"> +2</button>
<span> {{num}} </span>
<button (click)="acumular(-2)"> -2 </button>
<br>
<br>

<h1>La base es: <strong>{{base}}</strong></h1>

<button (click)="acumularNumb(base)"> {{base}}</button>
<span> {{n}} </span>
<button (click)="acumularNumb(-base)"> -{{base}} </button>
 
 `

})

export class ContaComponent {
    titulo: string = 'Contador App Udemy';
    numero: number= 10;
    num: number= 20;
    base: number =5;
    n: number =10;
    
  sumar(){
  this.numero+=1;
  
  }
  restar(){
    this.numero-=1;
    
    }
  acumular (valor: number){
  this.num += valor;
  
  }
  acumularNumb (valor: number){
    this.n += valor;
    
    }



}