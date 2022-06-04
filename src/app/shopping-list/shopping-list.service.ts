import { EventEmitter, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('salt', 3),
    new Ingredient('Tomato', 5),
    new Ingredient('Sugar', 20),
  ];

  constructor(private _snackBar: MatSnackBar) { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
    this._snackBar.open("Ingredients added to shopping list!");
  }

  deleteIngredient(ingredient) {
    this.ingredients = this.ingredients.filter(i => {
      return i !== ingredient;
    });
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}