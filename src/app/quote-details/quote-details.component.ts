import { Component, OnInit, Input} from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote:Quote;
 
  public initValue=0;
   upVote(){
    let total =this.initValue +=1;
   }
  
  constructor() { }

  ngOnInit() {
  }

}
