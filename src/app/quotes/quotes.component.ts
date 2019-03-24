import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
    quotes = [
      new Quote("Don't cry because it's over, smile because it happened","Dr. Seuss","John Muasa",new Date(2019,2,19)),
      new Quote("Be yourself; everyone else is already taken.","Oscar Wilde","John Muasa",new Date(2019,2,20)),
      new  Quote("So many books, so little time","Frank Zappa","John Muasa",new Date(2019,2,21)),
      new Quote("You only live once, but if you do it right, once is enough.","Mae West","John Muasa",new Date(2019,2,22))
    ]

    showDetails(index){
      this.quotes[index].showPublisher = !this.quotes[index].showPublisher;
    }

    public initScore = 0;
    upVote () {
      return this.initScore +=1;
    }

  constructor() { }

  ngOnInit() {
  }

}
