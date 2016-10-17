import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
   recipes: Recipe[] = [
     new Recipe('Greek Salad', 'Very tasty', 'http://previews.123rf.com/images/serezniy/serezniy1110/serezniy111000532/10817766-Deliciosa-ensalada-griega-en-la-placa-aislada-en-blanco-Foto-de-archivo.jpg', []),
     new Recipe('Summer Salad', 'Nice and Sunny', 'http://homecaprice.com/wp-content/uploads/2015/05/3-salad.jpg', [])
   ];
   @Output() recipeSelected = new EventEmitter<Recipe>()
  
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
  	this.recipeSelected.emit(recipe)
  }
}
