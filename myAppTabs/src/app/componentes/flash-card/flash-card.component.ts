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

  constructor(private dragulaService: DragulaService, private toastController: ToastController) {
    
    this.dragulaService.drag('card')
      .subscribe(({ name, el, source }) => {
        el.setAttribute('color', 'danger');
      });

    this.dragulaService.removeModel('card')
      .subscribe(({ item }) => {
        this.toastController.create({
          message: 'Removed: ' + item.value,
          duration: 2000
        }).then(toast => toast.present());
      });

    this.dragulaService.dropModel('card')
      .subscribe(({ item }) => {
        item['color'] = 'success';
      });

    this.dragulaService.createGroup('card', {
      removeOnSpill: true
    });
  }


  ngOnInit() { }

  flip() {
    this.flipped = !this.flipped;
  }

}
