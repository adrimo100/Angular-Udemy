import { Component, OnInit,EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a test", "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg"),
    new Recipe("A Test Recipe 2", "This is simply a test 2", "https://www.inspiredtaste.net/wp-content/uploads/2022/11/Fluffy-Pancakes-Recipe-Video.jpg")
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor(){}

  ngOnInit(): void { 
  }

  onRecipeSelected(recipeSelected: Recipe){
    this.recipeWasSelected.emit(recipeSelected);
  }
}
