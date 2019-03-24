import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
    quotes = [
      new Quote("Don't cry because it's over, smile because it happened","Dr. Seuss","John Muasa"),
      new Quote("Be yourself; everyone else is already taken.","Oscar Wilde","John Muasa"),
      new  Quote("So many books, so little time","Frank Zappa","John Muasa"),
      new Quote("You only live once, but if you do it right, once is enough.","Mae West","John Muasa")
    ]
  constructor() { }

  ngOnInit() {
  }

}
