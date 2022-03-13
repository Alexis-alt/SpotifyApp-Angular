import { Component, OnInit } from '@angular/core';
import {SpotiserviceService} from '../../Services/spotiservice.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent{

  artistas:any[]=[];
loading? :boolean;
error:boolean;
errorMessage:string="";


  constructor(private _services:SpotiserviceService) {
      this.error=false;

   }



    buscar(termino:string){
      
    console.log(termino);
   
      this.loading=true;
   
    this._services.getArtistas(termino)

    .subscribe((data:any)=>{
      console.log(data.artists.items);
      this.artistas=data.artists.items;
       this.loading=!this.loading;

    },(errorServicio)=>{
      //Cuando pasa un error 
      this.loading=!this.loading;
          this.error=true;
          console.log(errorServicio.error.error.message);
      this.errorMessage=errorServicio.error.error.message;
      }
      
      //Se puede implmentar un mensaje de error gracias a este codigo de arriba
    
    
    );

    
    }

  
    


}
