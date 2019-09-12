import { Component, OnInit } from "@angular/core";

import { Speaker } from "./speaker.model";

@Component({
  selector: "app-speakers",
  templateUrl: "./speakers.component.html",
  styleUrls: ["./speakers.component.css"]
})
export class SpeakersComponent implements OnInit {
  speakers = [
    new Speaker(
      "Nishu Goel",
      "IBM",
      "DcoustaWilson",
      "nishugoel",
      "nishugoel.jpeg",
      "nishugoel.webp",
      ""
    ),
    new Speaker(
      "Pankaj Parkar",
      "Synerzip",
      "pankajparkar",
      "pankajparkar",
      "pankajparkar.jpg",
      "pankajparkar.webp",
      ""
    ),
    new Speaker(
      "Anchal Bhandari",
      "PTC",
      "bhandariaanchal",
      "bhandariaanchal",
      "anchal.jpg",
      "anchal.webp",
      "Anchal is an IoT Solution Consultant working for one of the leaders in this technology Parameteric Technology Corporation. She has worked on applications integrating IoT and angular and that has been her core area of interest. She has been working in web-developement past few years developing chatbots, multi-lingual platform and micro-services. Being higly passinate about angular she writes about angular on her website https:anchal.me."
    ),
    new Speaker(
      "Santosh Yadav",
      "Deutsche Bank",
      "Santosh19742211",
      "santoshyadav198613",
      "santoshyadav.jpg",
      "santoshyadav.webp",
      "Santosh has more than 10 years of experience in IT, he is working with Deutsche Bank as Full Stack Developer. He is also an active open source contributor and has contributed to NgRx and Angular and many other open source projects. He is also the organizer of Pune Tech Meetup and MEAN stack trainer"
    ),
    new Speaker(
      "Srashti Jain",
      "Hvantage Technologies",
      "srashtisj",
      "",
      "srashti.jpg",
      "srashti.webp",
      "I have 4+ years of IT experience and worked on various technologies like .NET, Angular, Microsoft Azure and Power BI Always up for sharing knowledge and learning from others"
    ),
    new Speaker(
      "Jecelyn Yeen",
      "Parrot Code",
      "JecelynYeen",
      "chybie",
      "jecelyn.jpg",
      "jecelyn.webp",
      ""
    ),
    new Speaker(
      "Siddharth Ajmera",
      "Tata Consultancy Services Ltd",
      "SiddAjmera",
      "SiddAjmera",
      "siddharth.jpg",
      "siddharth.webp",
      ""
    ),
    new Speaker(
      "Mohammad Umair Khan",
      "10Pearls",
      "mohukh",
      "mohuk",
      "mohuk.jpg",
      "mohuk.webp",
      ""
    ),
    new Speaker(
      "Nilesh Jayanandana",
      "Platformer Cloud",
      "",
      "",
      "nilesh.jpeg",
      "nilesh.webp",
      ""
    ),
    new Speaker(
      "Samudra Kanankearachchi",
      "99X Technology",
      "",
      "",
      "samudra.png",
      "samudra.webp",
      ""
    ),
    new Speaker(
      "Sohan Dassanayake",
      "Platformer Cloud",
      "",
      "",
      "sohan.jpg",
      "sohan.webp",
      ""
    )
  ];
  constructor() {}

  ngOnInit() {}
}
