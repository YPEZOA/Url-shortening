import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UrlRoutingModule } from './url-routing.module';
import { InputShortenComponent } from './components/input-shorten/input-shorten.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UrlListComponent } from './components/url-list/url-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    InputShortenComponent,
    UrlListComponent,
  ],
  imports: [CommonModule, UrlRoutingModule, ReactiveFormsModule],
})
export class UrlShorteningModule {}
