import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] ;

  constructor(private shoppingList:ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.shoppingList.getShoppingList();
    this.shoppingList.shoppingListUpdate.subscribe(
      (ingredient:Ingredient[])=>{
        this.ingredients=ingredient;
      }
    )
  }

  // onIngredientAdded(ingredient: Ingredient) {
  // //  this.ingredients.push(ingredient);
  // }
}
