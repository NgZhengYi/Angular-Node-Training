import {NgModule} from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class AppMaterialModule {
}
