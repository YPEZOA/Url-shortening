import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './url-shortening/components/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./url-shortening/url-shortening.module').then(m => m.UrlShorteningModule)
  },
  {
    path: '',
    component: HomeComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
