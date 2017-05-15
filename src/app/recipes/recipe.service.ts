import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://c1.staticflickr.com/8/7164/6552490053_45fc8a67be_b.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://c1.staticflickr.com/8/7164/6552490053_45fc8a67be_b.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
