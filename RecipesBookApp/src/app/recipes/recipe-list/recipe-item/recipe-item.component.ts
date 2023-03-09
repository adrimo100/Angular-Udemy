import { Component, Input, OnInit} from '@angular/core';
import { Recipe } from '../../recipe.model';

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
  @Input() index: number

  ngOnInit(){
    this.name = this.data.name;
    this.description = this.data.description;
    this.imagePath = this.data.imagePath;
  }
}
