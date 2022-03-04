import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CustomLogService {

  private prefix = '[custom]';

  setPrefix(value: string) {
    this.prefix = value;
  }

  info(message: string) {
    console.log(`${this.prefix}: [info] ${message}`);
  }

  warning(message: string) {
    console.warn(`${this.prefix}: [warning] ${message}`);
  }

}