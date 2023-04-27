import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit{

  @Input()
  public gif!: Gif;

  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif is property required');
  }

}
