import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    { id: 1, name: 'my name is brian' },
    { id: 2, name: 'i am a developer' },
    { id: 3, name: 'i am successful' },
  ];

  quote = 'my name is brian';
  constructor() {}

  ngOnInit(): void {}
}
