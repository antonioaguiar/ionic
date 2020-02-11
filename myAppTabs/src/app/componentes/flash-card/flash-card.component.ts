import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss'],
  encapsulation: ViewEncapsulation.None    //sem essa linha, o scss náo carrega no componente.
})
export class FlashCardComponent implements OnInit {
  flipped: boolean = false;

  constructor() {
    
  }


  ngOnInit() { }

  flip() {
    this.flipped = !this.flipped;
  }

}
