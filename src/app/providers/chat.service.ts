import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<any>;

  public chats: any[] = [];

  /**
   * @name {*} constructor ChatServices
   * @param afs
   */
  constructor ( private afs: AngularFirestore ) { }


  /**
   * @name {*} cargarMensajes
   * @returns
   */
  cargarMensajes () {
    this.itemsCollection = this.afs.collection<any>( 'chats' );

    return this.itemsCollection.valueChanges();
  }
}
