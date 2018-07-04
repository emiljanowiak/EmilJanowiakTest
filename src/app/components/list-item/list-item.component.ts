import { ItemsService } from './../../services/items.service';
import { Component, OnInit,Input } from '@angular/core';
import {ListItems} from '../../classes/list-items';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input()
  public item:ListItems;
  constructor(public itemsService:ItemsService) 
  {}

  ngOnInit() {
  }

  public removeItem(): void {
    this.itemsService.removeItems(this.item.id);
  }
}
