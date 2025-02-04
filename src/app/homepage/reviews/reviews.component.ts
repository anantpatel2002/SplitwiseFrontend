import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {

  reviews = [[{
    reviewMessage:"“Fundamental” for tracking finances. As good as WhatsApp for containing awkwardness.",
    reviewer:"Financial Times",
    imageSrc:"ft-152c170779821a7cff1ab468de0412defae4b4bcd1430bdd7cfc4901c8d338fc.png"
  },
  {
    reviewMessage:"Life hack for group trips. Amazing tool to use when traveling with friends! Makes life so easy!!",
    reviewer:"Ahah S, iOS",
    imageSrc: undefined
  },
  {
    reviewMessage:"Makes it easy to split everything from your dinner bill to rent.",
    reviewer:"NY Times",
    imageSrc:"nyt-68d17fe3b579e967803b3bfa086047106eb7c67ba2d64149f606457e2df5437c.png"
  }],
  [{
    reviewMessage:"So amazing to have this app manage balances and help keep money out of relationships. love it!",
    reviewer:"Haseena C, Android",
    imageSrc:undefined
  },
  {
    reviewMessage:"I never fight with roommates over bills because of this genius expense-splitting app",
    reviewer:"Business Insider",
    imageSrc:"bi-97c1894e95b2a91c0027403ebda13eb65e2c5df8a303dd36e53cd0b013a0da9f.png"
  },
  {
    reviewMessage:"I use it everyday. I use it for trips, roommates, loans. I love splitwise.",
    reviewer:"Trickseyus, iOS",
    imageSrc:undefined
  }]
]

}
