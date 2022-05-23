import { Component, OnInit, ViewChild } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  name: string;
  amount: number = 0;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void { }

  onAdd() {
    const newIng = new Ingredient(this.name, this.amount);
    this.shoppingListService.addIngredient(newIng);
  }

  onClear() {
    this.name = "";
    this.amount = 0;
  }

}
