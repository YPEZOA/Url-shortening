import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlShorteningModule } from './url-shortening/url-shortening.module';
import { ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    UrlShorteningModule,
    HttpClientModule,
    ClipboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
