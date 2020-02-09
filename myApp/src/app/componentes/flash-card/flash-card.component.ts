import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'flash-card',
    templateUrl: './flash-card.component.html',
    styleUrls: ['./flash-card.component.scss'],
})
export class FlashCardComponent implements OnInit {

    flipped: boolean = false;

    constructor() { }

    ngOnInit() { }

    flip() {
        this.flipped = !this.flipped;
    }

}
