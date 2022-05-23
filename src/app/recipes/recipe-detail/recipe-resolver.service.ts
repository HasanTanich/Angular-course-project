import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Injectable({ providedIn: 'root' })
export class RecipeResolver implements Resolve<Recipe> {
    constructor(private recipeService: RecipeService) { }
    resolve(route: ActivatedRouteSnapshot): Observable<Recipe> | Promise<Recipe> | Recipe {
        return this.recipeService.getRecipe(route.params['id']);
    }
}