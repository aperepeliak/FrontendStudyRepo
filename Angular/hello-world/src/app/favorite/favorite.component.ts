import { TitleCase } from './../titleCase.pipe';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  @Input() isFavorite: boolean;
  
  title = 'Enter movie';
  constructor() { }
}
