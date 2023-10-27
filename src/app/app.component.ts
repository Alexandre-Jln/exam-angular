import { Component, OnInit } from '@angular/core';
import { CoinsService } from "./coins.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  coins:any;

  constructor(private service:CoinsService) {}

  ngOnInit() {
    this.service.getCoins()
      .subscribe(response => {
        this.coins = response;
      });
  }
}
