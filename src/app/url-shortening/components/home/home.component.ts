import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ShortenService } from '../../services/shorten.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private shortService: ShortenService) {}

  ngOnInit(): void {}

  public shorteningUrl(text: any): void {
    this.shortService
      .shortUrl(text)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return throwError(err);
        })
      )
      .subscribe((resp) => {
        const newUrl = {
          longUrl: resp.result.original_link,
          shortUrl: resp.result.short_link,
        };
        const urlsAlmacened = JSON.parse(
          localStorage.getItem('short-url') || '[]'
        );
        urlsAlmacened.push(newUrl);
        localStorage.setItem('short-url', JSON.stringify(urlsAlmacened));
        this.shortService.urlList.next(urlsAlmacened);
      });
  }
}
