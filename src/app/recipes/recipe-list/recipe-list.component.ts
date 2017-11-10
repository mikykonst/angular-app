import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Burger', 'The best burger ever!', 'https://cdn.pixabay.com/photo/2017/08/08/18/09/burger-2612137_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
