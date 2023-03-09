import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a test", "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg", 
    [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)]),
    new Recipe("Big Fat Burguer", "This is simply a test 2", "https://www.inspiredtaste.net/wp-content/uploads/2022/11/Fluffy-Pancakes-Recipe-Video.jpg", 
    [new Ingredient("Buns", 2), new Ingredient("Meat", 1)])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes(){
    return [...this.recipes];
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
