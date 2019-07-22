import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-venue",
  templateUrl: "./venue.component.html",
  styleUrls: ["./venue.component.css"]
})
export class VenueComponent implements OnInit {
  venueImageUrl = [
    "../../../assets/images/venue-gallery/1.jpg",
    "../../../assets/images/venue-gallery/2.jpg",
    "../../../assets/images/venue-gallery/3.jpg",
    "../../../assets/images/venue-gallery/4.jpg",
    "../../../assets/images/venue-gallery/5.jpg",
    "../../../assets/images/venue-gallery/6.jpg",
    "../../../assets/images/venue-gallery/7.jpg",
    "../../../assets/images/venue-gallery/8.jpg"
  ];

  constructor() {}

  ngOnInit() {}
}
