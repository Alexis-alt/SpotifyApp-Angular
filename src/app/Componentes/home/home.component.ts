import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {SpotiserviceService} from '../../Services/spotiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


lanzamientos:any[]=[];
loading: boolean=true;
error:boolean;
errorMessage:string;

  constructor(private _spotiservice : SpotiserviceService) {
    this.error=false;
this.errorMessage="";

  
    //Este método nos regresa un HTTP GET, a partir de aqui se puede extraer la data de dicho elemnto que nos regresa
    //Un suscribe cuenta con dos funciones 1:Success cuando lo hace todo bien y 2:Cuando sucede un error
    this._spotiservice.getRelises()
.subscribe((data:any)=>{
  console.log(data.albums.items);
  this.lanzamientos=data.albums.items;
  this.loading=!this.loading;

},(errorServicio)=>{
//Cuando pasa un error 
this.loading=!this.loading;
    this.error=true;
    console.log(errorServicio.error.error.message);
this.errorMessage=errorServicio.error.error.message;
}



);

   }






  ngOnInit(): void {


  }

}
