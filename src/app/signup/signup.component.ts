import { Component, inject, OnInit, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-signup',
  imports: [RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  currencies: {name:string, symbol:string}[] = [];
  dataService = inject(DataService);
  renderer = inject(Renderer2)

  constructor() {
    this.dataService.getCurrencies().subscribe({
      next: (res) => {
          Object.values(res.data).forEach((currency: any) => {
              this.dataService.currencies.push({name: currency.code, symbol: currency.symbol})
              this.currencies = this.dataService.currencies
          });
      }
  });
  }

  ngOnInit() {


    

  }

  animation(){
    this.renderer.removeClass(document.getElementById('email-pw'),'hidden')
    this.renderer.addClass(document.getElementById('email-pw'),'animated-mid')
    this.renderer.addClass(document.getElementById('email-pw'),'expand-animation')
    this.renderer.removeClass(document.getElementById('notUSD'),'hidden')
  }

  unHideCurrency(e:Event){
    e.preventDefault()
    this.renderer.removeClass(document.getElementById('currency'),'hidden')
    this.renderer.addClass(document.getElementById('currency'),'animated-mid')
    this.renderer.addClass(document.getElementById('currency'),'expand-animation')
  }



}
