import { Component } from '@angular/core';
import { ChatService } from './../../providers/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  /**
   * @name constructor LoginComponent
   * @param _cs
   */
  constructor( public _cs: ChatService ) { }


  /**
   * @name ingresar
   * @param proveedor
   */
  ingresar ( proveedor: string ) {
    console.log( proveedor );

    this._cs.login( proveedor );
  }

}
