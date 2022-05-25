import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Ingredient } from '../shared/ingredient.model';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipesChanged = new EventEmitter<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(1, 'Maklooba', 'this recipe is the greatest of all.', 'https://scoopempire.com/wp-content/uploads/2016/10/makluba02-6505.jpg', [new Ingredient('Patlidzan', 5), new Ingredient('Chicken', 2), new Ingredient('Potato', 4)]),
    new Recipe(2, 'Rice with potato', 'fasolia', 'https://www.licious.in/blog/wp-content/uploads/2020/12/Tripple-Dipped-Broasted-Chicken.jpg', [new Ingredient('Potato', 2), new Ingredient('rice', 1)]),
    new Recipe(3, 'Broasted Chicken', 'a fat beautiful roasted chicken to fill your hungry stomach', 'https://www.licious.in/blog/wp-content/uploads/2020/12/Tripple-Dipped-Broasted-Chicken.jpg', [new Ingredient('Meat', 2), new Ingredient('Chicken', 1)])
  ];

  constructor(private router: Router) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes.find((r) => {
      return id == r.id;
    });
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes = this.recipes.filter(r => {
      return r.id !== recipe.id;
    });
    this.recipesChanged.emit(this.recipes.slice());
    this.router.navigate(['../']);
  }
}
