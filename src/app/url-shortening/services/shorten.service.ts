import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShortenService {
  api_url = 'https://api.shrtco.de/v2/shorten?url=';
  urlList = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {}

  shortUrl(url: string): Observable<any> {
    return this.http.get<any>(`${this.api_url}${url}`);
  }
}
