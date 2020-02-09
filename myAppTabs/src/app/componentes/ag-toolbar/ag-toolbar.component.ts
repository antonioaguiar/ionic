import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ag-toolbar',
  templateUrl: './ag-toolbar.component.html',
  styleUrls: ['./ag-toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None    //sem essa linha, o scss náo carrega no componente.
})
export class AgToolbarComponent implements OnInit {

  @Input()
  titulo: string = "";
 
  @Input()
  tema: string = "default";

  constructor() { }

  ngOnInit() {}
 
}
