import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-shorten',
  templateUrl: './input-shorten.component.html',
  styleUrls: ['./input-shorten.component.scss'],
})
export class InputShortenComponent implements OnInit {
  text: FormControl;
  invalidUrl!: boolean;
  urlList: string[] = [];
  @Output() fieldText = new EventEmitter<string>();

  constructor() {
    this.text = new FormControl('');
  }

  ngOnInit(): void {}

  public changeValue(event: Event): void {
    this.invalidUrl = false;
    const target = event.target as HTMLInputElement;
    this.text.setValue(target.value);
  }

  emitTextChanged(): void {
    if (this.text.value.trim().length) {
      this.fieldText.emit(this.text.value);
    } else {
      return;
    }
  }

  validateField(): boolean {
    if (this.text.invalid && this.text.touched) {
      this.invalidUrl = true;
      return true;
    }
    return false;
  }
}
