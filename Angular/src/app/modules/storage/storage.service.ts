import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

import {environment} from '../../../environments/environment';

@Injectable()
export class StorageService {
  $ItemCategory: Subject<any> = new Subject<any>();
  $ItemCode: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) {
  }

  FetchItemCategory() {
    this.http.post<{ message: string, result: any }>(
      environment.backendUrl + '/storage/FetchCategory',
      {}
    ).subscribe(async response => {
      if (response.message === 'Success') {
        this.$ItemCategory.next(response.result);
      } else {
        console.log('Fetch Item Category Failed');
      }
    });
  }

  FetchItemCode(category: string) {
    this.http.post<{ message: string, result: any }>(
      environment.backendUrl + '/storage/FetchItemCode',
      {category}
    ).subscribe(async response => {
      if (response.message === 'Success') {
        this.$ItemCode.next(response.result);
      } else {
        console.log('Fetch Item Code : ' + response.message);
      }
    });
  }

}
