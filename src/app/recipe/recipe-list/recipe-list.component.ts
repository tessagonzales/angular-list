import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Simply A Test', 'http://assets.kraftfoods.com/recipe_images/opendeploy/52512_640x428.jpg'),
    new Recipe('A Test Recipe', 'Simply A Test', 'http://assets.kraftfoods.com/recipe_images/opendeploy/52512_640x428.jpg'),    
  ];

  testing() {
    console.log('RECIPES ===>', this.recipes)
  }

  constructor() { }

  ngOnInit() {
  }

}
