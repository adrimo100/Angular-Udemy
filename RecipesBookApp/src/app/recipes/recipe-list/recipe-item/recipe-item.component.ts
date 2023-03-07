import { Component, Input, OnInit} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input("recipeData") data: Recipe;
  name : string;
  description: string;
  imagePath: string;

  constructor(private recipeService: RecipeService){
  }

  ngOnInit(){
    this.name = this.data.name;
    this.description = this.data.description;
    this.imagePath = this.data.imagePath;
  }

  onSelected(){
    this.recipeService.recipeSelected.emit(this.data);
  }
}
