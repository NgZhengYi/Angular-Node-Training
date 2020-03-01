import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppMaterialModule} from '../../app-material.module';
import {InsertStorageComponent} from './insert-storage/insert-storage.component';
import {StorageComponent} from './storage.component';
import {SearchStorageComponent} from './search-storage/search-storage.component';
import {StorageRoutingModule} from './storage-routing.module';
import {StorageService} from './storage.service';

@NgModule({
  declarations: [
    InsertStorageComponent,
    StorageComponent,
    SearchStorageComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StorageRoutingModule
  ],
  exports: [
    StorageRoutingModule
  ],
  providers: [StorageService]
})
export class StorageModule {
}
