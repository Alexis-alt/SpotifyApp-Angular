import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {SpotiserviceService } from '../../Services/spotiservice.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent {

loading:boolean=true;

datosArtista:any={};

topTracks:any[]=[];


              //Atributo que permite recibir parametros espedificados en el emisor, como es el caso de id
  constructor(private _router:ActivatedRoute,
              private _spotiservice:SpotiserviceService) { 

                //Realizamos una suscripción a los parametros
    this._router.params.subscribe(params=>
      {
        //Extraemos el id
        console.log(params['id']);
        //Lo enviamos al método que obtendra el artista
        this.getArtista(params['id']);

        this.getTopTracks(params['id']);
      });
    
  }
  

  //Recibe el id al ejecutarse en el método de arriba
  getArtista(id:string){
//Envia id a método del servicio que obtendra el artista
    this._spotiservice.getArtista(id)
      .subscribe(artista=>
        {
          console.log("Esto nos regresa los artistas");
          console.log(artista);
          this.datosArtista=artista;
          this.loading=false;
        });
          //Despues de suscribirnos nos regresa el artista y cambios que se hagan en el


  }

  //Recientes lanzamientos
    //En la respuesta de un servicio generalmente se espera recibir un array
  getTopTracks(id:string){

this._spotiservice.getTopTracks(id)
    .subscribe(tracks=>{

      console.log("Estos son los tracks");
      console.log(tracks);
      this.topTracks=tracks;

    });

  }



}
