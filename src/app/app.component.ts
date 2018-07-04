import { ListItems } from './classes/list-items';
import { Component } from '@angular/core';
import {ItemsService} from './services/items.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public itemService : ItemsService){

  }
  title = 'FlipToDo App';
}
