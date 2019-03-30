import { Component, OnInit } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity:0}),
        animate(500, style({opacity:1})) 
      ]),
      transition(':leave', [
        animate(500, style({opacity:0})) 
      ])
    ])
  ]
})
export class SponsorsComponent implements OnInit {

  showpackages: boolean;

  constructor() { 
    this.showpackages = false;
  }

  ngOnInit() {
  }

  showPackages () {
    this.showpackages = true;
  }

}
