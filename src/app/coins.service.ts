import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

  export class CoinsService {
  private apiUrl = 'https://api.coincap.io/v2/assets';
  constructor(private httpClient: HttpClient) { }

  getCoins(){
    return this.httpClient.get(this.apiUrl);
  }
}
