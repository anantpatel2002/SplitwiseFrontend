import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { tap } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
  export class DataService {
    
    currencies: {name:string, symbol:string}[]  = []

    httpClient = inject(HttpClient);

    getCurrencies() {
        return this.httpClient.get<any>('https://api.freecurrencyapi.com/v1/currencies?apikey=fca_live_9wFwjmEsiwX6AnuhmlU2RXnSWGsbAahAxNWYDU5k')
    }


  }