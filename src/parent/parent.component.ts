import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [FormsModule, CommonModule, ParentComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent implements OnInit {
  items = ['Составить список дел'];
  val = 'child';
  @Output() outp = new EventEmitter();
  addList(i: any) {
    this.items.push(i);
  }
  constructor() {}

  ngOnInit() {}
}
