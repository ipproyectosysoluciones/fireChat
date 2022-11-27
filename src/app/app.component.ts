import { Component } from '@angular/core';
import { ChatService } from './providers/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * @name constructor AppComponent
   * @param _cs
   */
  constructor ( public _cs: ChatService ) { }

}
