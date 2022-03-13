import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

//El httpHeaders es para pasar parametros en la url 

//Indica que se puede inyectar sin la necsidad de reportarlo en providers de el componente module
@Injectable({
  providedIn: 'root'
})
export class SpotiserviceService {



  
  constructor(private _http:HttpClient) { 

  }



  //getQuery es un método que se encarga de hacer una solicitud GET al servidor y los demas métodos le mandan un parametro que depende de lo que de quiere obtener
  getQuery(query:string){

    //El header es una constante que provee datos de autorización (TOKEN dura  1hra activo) se obtinene gracias a los parametros proprcionados a través del body (ID_CLIENTE Y SECRETO_CLIENTE)
   //El header es una constante que provee datos de autorización (TOKEN dura  1hra activo) se obtinene gracias a los parametros proprcionados a través del body (ID_CLIENTE Y SECRETO_CLIENTE)
  
  
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQAAGTKmx68d6RHUaNhW2epTsfezN5dTFiM8xdpUXB73gwgmkkYxgSVL_59lk_tqwuzWkAE_U8wd4Lygbvs'
//Tenemos que solicitar el Token a través de Postman puesto que el api de Spoti solo permite a conexión de servidores a su API lo cual Postman ya tiene implementado

    });

    const url =`https://api.spotify.com/v1/${query}`;

//Mandamos la constante que por defecto es headers para proveer el TOKEN al final de URL
    return this._http.get(url,{headers});


  }

  getRelises(){

 return this.getQuery('browse/new-releases')
  .pipe(map(data=>data));
  
  }


  getArtistas(termino:string){

    
  
  return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
  .pipe(map(data=>data));

  }
  
  getArtista(id:string){

    
  
    return this.getQuery(`artists/${id}`)

    //.pipe(map(data=>data));
  
    }



    getTopTracks(id:string)
    {
      return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map((data:any)=>data['tracks']));


    }

 
}
