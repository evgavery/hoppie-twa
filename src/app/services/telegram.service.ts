import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private window;
  tg: any;
  username: string;

  constructor(
    @Inject(DOCUMENT) private _document: Document
  ) {
    this.window = this._document.defaultView;
    this.tg = this.window?.Telegram.WebApp;
  }

}
