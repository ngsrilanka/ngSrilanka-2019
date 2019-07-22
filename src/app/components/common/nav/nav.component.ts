import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  constructor(private route: Router) {}

  sectionScroll: any;

  ngOnInit() {
    this.route.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.doScroll();
      this.sectionScroll = null;
    });
  }

  navigateTo(link, id) {
    this.sectionScroll = id;
    this.route.navigate([link], { fragment: id });
  }

  doScroll() {
    if (!this.sectionScroll) {
      return;
    }
    try {
      var elements = document.getElementById(this.sectionScroll);
      elements.scrollIntoView();
    } finally {
      this.sectionScroll = null;
    }
  }
}
