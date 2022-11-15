import { Component, OnInit } from '@angular/core';
import { GalleryItem } from '../Gallery-Item';
import { ITEMS } from '../gallery-mock';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  items = ITEMS;
  selected: GalleryItem;
  selectedMini: GalleryItem;
  name = '';
  nameMini = '';
  id:number;
  onSelect(item: GalleryItem): void {
    this.selected = item;
    this.name = this.selected.name;
    this.id = this.selected.id;
  }
  
  onSelectMini(item: GalleryItem): void {
    this.selectedMini = item;
    this.nameMini = this.selectedMini.name;
    
  }


  constructor() { }

  ngOnInit(): void {
  }

}
