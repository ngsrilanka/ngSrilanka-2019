import { Component, OnInit } from '@angular/core';

import { Speaker } from './speaker.model';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

  speakers = [
    // new Speaker('Dhananjay Kumar', 'Infragistics','Debug_mode','debugmodedotnet','dhananjaykumar.jpg', ),
    new Speaker('Nishu Goel', 'IBM','DcoustaWilson','nishugoel','nishugoel.jpeg', 'nishugoel.webp' ),
    new Speaker('Pankaj Parkar', 'Synerzip','','','pankajparkar.jpg', 'pankajparkar.webp' ),
    new Speaker('Anchal Bhandari', 'PTC','','','anchal.jpg', 'anchal.webp' ),
    new Speaker('Santosh Yadav', 'Deutsch','','','santoshyadav.jpg', 'santoshyadav.webp' ),
    new Speaker('Srashti Jain', 'Hvantage Technologies','srashtisj','','srashti.jpg', 'srashti.webp' ),
    new Speaker('TBD', 'TBD','','','speaker-default.jpg', 'speaker-default.webp' ),
    new Speaker('TBD', 'TBD','','','speaker-default.jpg', 'speaker-default.webp' ),
    new Speaker('TBD', 'TBD','','','speaker-default.jpg', 'speaker-default.webp' ),
    new Speaker('TBD', 'TBD','','','speaker-default.jpg', 'speaker-default.webp' ),
    new Speaker('TBD', 'TBD','','','speaker-default.jpg', 'speaker-default.webp' ),
    new Speaker('TBD', 'TBD','','','speaker-default.jpg', 'speaker-default.webp' ),
    new Speaker('TBD', 'TBD','','','speaker-default.jpg', 'speaker-default.webp' ),
    new Speaker('TBD', 'TBD','','','speaker-default.jpg', 'speaker-default.webp' ),
    new Speaker('TBD', 'TBD','','','speaker-default.jpg', 'speaker-default.webp' ),
    new Speaker('TBD', 'TBD','','','speaker-default.jpg', 'speaker-default.webp' ),
    new Speaker('TBD', 'TBD','','','speaker-default.jpg', 'speaker-default.webp' ),
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
