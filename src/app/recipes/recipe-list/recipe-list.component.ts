import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter();
  recipe = new Recipe('Dummy', 'Dummy', 'https://pbs.twimg.com/profile_images/684144749855567873/5ysjqVoC.jpg')
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
  	this.recipeSelected.emit(recipe)
  }
}
