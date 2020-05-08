import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      1,
      '"No one in the brief history of computing has ever written a piece of perfect software. Its unlikely that youll be the first." ',
      'Author:  Andy Hunt',
      new Date(2019, 1, 14)
    ),
    new Quote(
      2,
      'The adventure of life is to learn. The purpose of life is to grow. The nature of life is to change. The challenge of life is to overcome. The essence of life is to care. The opportunity of like is to serve. The secret of life is to dare. The spice of life is to befriend. The beauty of life is to give.',
      'Author: William Arthur Ward',
      new Date(2020, 4, 3)
    ),
    new Quote(
      3,
      'Most people would sooner die than think; in fact, they do so',
      'Author: Bertrand Russell',
      new Date(2020, 4, 3)
    ),
  ];
  toggleDetails(index) {
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].name}?`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  //quote = 'my name is brian';
  constructor() {}

  ngOnInit(): void {}
}
