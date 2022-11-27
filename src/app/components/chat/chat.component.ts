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
   * @param cs
   */
  constructor ( private cs: ChatService ) {
    this.cs.cargarMensajes()
      .subscribe( ( mensajes: any[] ) => {
        console.log( mensajes );
      } );
  }

  /**
   * @name {*} enviar_mensaje
   *
   */
  enviar_mensaje () {
    console.log( this.mensaje );
  }

}
