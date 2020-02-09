import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ag-toolbar',
  templateUrl: './ag-toolbar.component.html',
  styleUrls: ['./ag-toolbar.component.scss'],
})
export class AgToolbarComponent implements OnInit {

  @Input()
  titulo: string = "";

  @Input()
  tema: string = "default";

  constructor() { }

  ngOnInit() {}
 
}
