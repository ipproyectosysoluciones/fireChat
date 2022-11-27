import { Component } from '@angular/core';
import { ChatService } from './../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent {

  mensaje: string = "";

  /**
   * @name {*} constructor ChatComponent
   * @param _cs
   */
  constructor ( public _cs: ChatService ) {
    this._cs.cargarMensajes()
      .subscribe();
  }

  /**
   * @name {*} enviar_mensaje
   *
   */
  enviar_mensaje () {
    console.log( this.mensaje );

    if ( this.mensaje.length === 0 ) {
      return;
    } else {
      this._cs.agregarMensaje( this.mensaje )
        .then( () => this.mensaje = "" )
        .catch( ( err ) => console.error( 'Error al enviar', err ) );
    };
  }

}
