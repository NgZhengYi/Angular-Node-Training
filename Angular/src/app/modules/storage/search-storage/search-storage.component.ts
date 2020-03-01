import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

import {StorageService} from '../storage.service';
import {Observable, Subscription} from 'rxjs';
import {delay, map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-search-storage',
  templateUrl: './search-storage.component.html',
  styleUrls: ['./search-storage.component.css']
})
export class SearchStorageComponent implements OnInit, AfterViewInit {
  private category: Subscription;
  categoryArray = [];
  categoryOption: any;
  private itemCode: Subscription;
  private itemCodeArray = [];
  itemCodeControl = new FormControl();
  itemCodeFilter: Observable<any>;
  private itemCodeFilterArray = [];

  constructor(private storageService: StorageService) {
  }

  ngOnInit(): void {
    this.category = this.storageService.$ItemCategory.subscribe(value => {
      this.categoryArray = value;
      this.category.unsubscribe();
    });
  }

  ngAfterViewInit(): void {
    this.itemCodeFilter = this.itemCodeControl.valueChanges.pipe(
      startWith(''),
      delay(0),
      map(value => this.FilterItemCode(value))
    );
  }

  private FilterItemCode(code: string) {
    return this.itemCodeFilterArray.filter(value =>
      value.toUpperCase().indexOf(code.toUpperCase()) === 0);
  }

  onCategoryOptionSelected(event: Event) {
    this.storageService.FetchItemCode(event.toString());

    this.itemCode = this.storageService.$ItemCode.subscribe(value => {
      console.log(value);
      // this.itemCodeArray = value;
      this.itemCodeFilterArray = value;
      this.itemCode.unsubscribe();

      // this.itemCodeFilterArray = [];
      // this.itemCodeArray.forEach(data => {
      //   this.itemCodeFilterArray.push(data.code);
      // });
    });
  }

  onSearchButtonClicked() {

  }

}
