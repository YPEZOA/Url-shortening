import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UrlRoutingModule } from './url-routing.module';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, UrlRoutingModule],
})
export class UrlShorteningModule {}
