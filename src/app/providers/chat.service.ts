import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Mensaje } from '../interface/mensaje.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;

  public chats: Mensaje[] = [];

  /**
   * @name constructor ChatServices
   * @param afs
   */
  constructor ( private afs: AngularFirestore ) { }


  /**
   * @name cargarMensajes
   * @returns
   */
  cargarMensajes () {
    this.itemsCollection = this.afs.collection<Mensaje>( 'chats' );

    return this.itemsCollection.valueChanges()
      .pipe(
        map( ( mensajes: Mensaje[] ) => {
          console.log( mensajes );
          this.chats = mensajes;
        } )
      );

  }

  /**
   * @name agregarMensaje
   * @param texto
   * @returns
   */
  agregarMensaje ( texto: string ) {
    //TODO: falta el UID del usuario
    let mensaje: Mensaje = {
      nombre: 'Demo',
      mensaje: texto,
      fecha: new Date().getTime(),
    }

    return this.itemsCollection.add( mensaje );
  }
}
