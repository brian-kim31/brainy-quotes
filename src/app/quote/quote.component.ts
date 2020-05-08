import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'my name is brian', 'ivan'),
    new Quote(2, 'i am a developer', 'brian'),
    new Quote(3, 'i am successful', 'ken'),
  ];
  toggleDetails(index) {
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  //quote = 'my name is brian';
  constructor() {}

  ngOnInit(): void {}
}
