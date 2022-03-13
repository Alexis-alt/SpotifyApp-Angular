import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl  } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer:DomSanitizer ){ }


  //Recibe el uri
  transform( value: string): SafeResourceUrl {
    //Aqui le adjuntamos la constante de solicitud
    const url='https://open.spotify.com/embed?uri=';
    //Verifica que no sea dañino o perjudicial el contenido
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );
  }

}
