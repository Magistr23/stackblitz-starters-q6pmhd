import 'zone.js';
import 'zone.js/testing';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ParentComponent],
  template: `<app-parent></app-parent>`,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
