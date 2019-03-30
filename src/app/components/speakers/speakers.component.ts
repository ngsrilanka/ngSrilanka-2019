import { Component, OnInit } from '@angular/core';

import { Speaker } from './speaker.model';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

  speakers = [
    new Speaker('Dhananjay Kumar', 'Infragistics','Debug_mode','debugmodedotnet','dhananjaykumar.jpg', ),
    new Speaker('Marta Wiśniewska', 'Cosmose','MartaW_PL','','martawisniewska.jpg' ),
    new Speaker('Nishu Goel', 'IBM','DcoustaWilson','nishugoel','nishugoel.jpeg' ),
    new Speaker('Pankaj Parkar', 'Synerzip','','','pankajparkar.jpg' ),
  ]
  constructor() { }

  ngOnInit() {
  }

}
