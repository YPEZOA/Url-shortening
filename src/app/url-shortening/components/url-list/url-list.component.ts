import { Component, OnInit } from '@angular/core';
import { ShortenService } from '../../services/shorten.service';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.scss'],
})
export class UrlListComponent implements OnInit {
  listUrls!: any;
  buttonText!: string;
  constructor(private urlService: ShortenService) {
    this.buttonText = 'Copy';
  }

  ngOnInit(): void {
    this.urlService.urlList.subscribe((item) => {
      if (!this.listUrls) {
        this.listUrls = JSON.parse(localStorage.getItem('short-url') || '[]');
      } else {
        this.listUrls = item;
      }
    });
  }
}
