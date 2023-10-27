import { Component, OnInit } from '@angular/core';
import { CoinsService } from "../coins.service";

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {
  coins: any;

  constructor(private coinsService: CoinsService) {}

  ngOnInit() {
    this.coinsService.getCoins().subscribe((data) => {

      console.log(data)
    })
  }
}
