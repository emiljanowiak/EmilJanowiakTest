import { ListItems } from './../classes/list-items';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private idNext: number;

  constructor() { 
    let items = this.getItems();
if (items.length== 0)
{
  this.idNext = 1;
}else
{
  let maxId = items [items.length -1].id;
  this.idNext = maxId + 1;
}
  }

  public addItem(text: string): void {
   
    let item = new ListItems(this.idNext,text)
    let items = this.getItems();
    items.push(item);
    this.setLocalStorageItems(items);

    this.idNext++;
  }
  public getItems(): ListItems[] {
    //return this.items;
    let localStorageItem = JSON.parse(localStorage.getItem('items'));
    return localStorageItem == null ? [] :localStorageItem.items;
  }
  public removeItems(id: number): void {
    let items = this.getItems();
    items = items.filter((item)=> item.id != id);
    this.setLocalStorageItems(items);
  }


  private setLocalStorageItems(items:ListItems[] ): void{
    localStorage.setItem('items',JSON.stringify({items:items}));

  }
}
