import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
   private ingredients: Ingredient[]  = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];
    shoppingListUpdate=new EventEmitter<Ingredient[]>();
    getShoppingList(){
        return this.ingredients.slice();
    }
    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.shoppingListUpdate.emit(this.ingredients.slice());
    }
    addFromRecipeDetails(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.shoppingListUpdate.emit(this.ingredients.slice());
    }
    
}