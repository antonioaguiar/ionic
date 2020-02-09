import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { ToastController } from '@ionic/angular';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-ike',
  templateUrl: './ike.page.html',
  styleUrls: ['./ike.page.scss'],
})
export class IkePage implements OnInit {

  q1 = [
    { value: 'Buy Milk', color: 'success' },
    { value: 'Write new Post', color: 'success' }
  ];
  q2 = [
    { value: 'Schedule newsletter', color: 'secondary' },
    { value: 'Find new Ionic Academy topics', color: 'secondary' }
  ];
  q3 = [
    { value: 'Improve page performance', color: 'warning' },
    { value: 'Clean the house', color: 'warning' }
  ];
  q4 = [
    { value: 'Unimportant things', color: 'medium' },
    { value: 'Watch Netflix', color: 'medium' }
  ];
  todo = { value: '', color: '' };
  selectedQuadrant = 'q1';

  constructor(private dragulaService: DragulaService, private toastController: ToastController) {
   
    this.dragulaService.drag('bag')
      .subscribe(({ name, el, source }) => {
        el.setAttribute('color', 'danger');
      });

    this.dragulaService.removeModel('bag')
      .subscribe(({ item }) => {
        this.toastController.create({
          message: 'Removed: ' + item.value,
          duration: 2000
        }).then(toast => toast.present());
      });

    this.dragulaService.dropModel('bag')
      .subscribe(({ target, item}) => {
        const quadrante = target.getAttribute("name");
        switch (quadrante) {
          case 'q1':
            item['color'] = 'success';
            break;
          case 'q2':
            item['color'] = 'secondary';
            break;
          case 'q3':
            item['color'] = 'warning';
            break;
          case 'q4':
            item['color'] = 'medium';
            break;
        }
        //  item['color'] = 'success';
      });

    this.dragulaService.createGroup('bag', {
      removeOnSpill: true
    });
  }

  addTodo() {
    switch (this.selectedQuadrant) {
      case 'q1':
        this.todo.color = 'success';
        break;
      case 'q2':
        this.todo.color = 'secondary';
        break;
      case 'q3':
        this.todo.color = 'warning';
        break;
      case 'q4':
        this.todo.color = 'medium';
        break;
    }
    this[this.selectedQuadrant].push(this.todo);
    this.todo = { value: '', color: '' };
  }

  ngOnInit(){
    
  }
}
