import { Component, OnInit,Input} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() items:any[]=[];

  constructor(private _router :Router) {
                


                
              }

  ngOnInit(): void {
  }



  //Al hacer CLICK en la card
  verArtista(item:any){

console.log(item);

let artistaId;

if(item.type === 'artist'){
  artistaId = item.id;
}
else{
  artistaId = item.artists[0].id;
}


//Este método redirige a la pagina del artista dandole el id que lo identifica
this._router.navigate(['/artista',artistaId])

  }

}
