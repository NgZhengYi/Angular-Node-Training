import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './modules/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(module => module.DashboardModule)
  },
  {
    path: 'storage',
    loadChildren: () => import('./modules/storage/storage.module').then(module => module.StorageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
