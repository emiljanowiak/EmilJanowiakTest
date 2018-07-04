import { ItemsService } from './../../services/items.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-flip',
  templateUrl: './input-flip.component.html',
  styleUrls: ['./input-flip.component.css']
})
export class InputFlipComponent implements OnInit {
  public flipText: string;

  constructor(private itemservice:ItemsService) { 
    this.flipText = '';
  }

  ngOnInit() {
  }
  private addItem(): void {

this.itemservice.addItem(this.flipText);
this.flipText ='';
  }

}
