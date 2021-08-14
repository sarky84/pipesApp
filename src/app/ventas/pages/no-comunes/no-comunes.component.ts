import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  


  /* i18nSelect  */


  nombre: string = 'Rubén';
  genero: string = 'masculino';

  /* nombre: string = 'Nerea';
  genero: string = 'femenino'; */

  invitacionMapa ={
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
   /*  i18nPlural */

   clientes: string[] =[ 'Nerea','María','Rubén', 'Fernando', 'Pedro' ];
   clientesMapa ={
     '=0': 'no tenemos ningún cliente esperando.',
     '=1': 'tenemos 1 cliente esperando.',
     '=2': 'tenemos 2 clientes esperando.',
     'other': 'tenemos # clientes esperando.',

   }
   
   cambiarCliente(){
      this.nombre = 'Melisa';
      this.genero = 'femenino';
   }

   borrarCliente(){
      this.clientes.pop();
   }

   /* keyValue pipe */

   persona={
     nombre: 'Fernando',
     edad: 35,
     direccion: 'Ottawa, Canadá'
   }

   /* jsonPipe */

   heroes = [
     {
       nombre: 'Superman',
       vuela: true
     },
     {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
   ]


   /* async pipe */
   miObservable = interval(1000); /* intervalos desde el 0,1,2,3,4,5,6,7... */

  valorPromesa = new Promise ( ( resolve, reject )=>{

    setTimeout(()=> {
      resolve('Tenemos data de promesa');
    },3500 )
  });
}

