import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private isCompact: boolean;

  constructor() {
    this.isCompact = environment.darkThemeActive;
  }

  toggleTheme(): boolean {
    this.isCompact = !this.isCompact;
    return this.isCompact;
  }

  getType(): boolean {
    return this.isCompact;
  }
}
