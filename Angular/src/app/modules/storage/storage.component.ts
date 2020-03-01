import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {StorageService} from './storage.service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {

  constructor(private title: Title, private storageService: StorageService) {
  }

  ngOnInit(): void {
    this.title.setTitle('Angular - Storage');
    this.storageService.FetchItemCategory();
  }

}
