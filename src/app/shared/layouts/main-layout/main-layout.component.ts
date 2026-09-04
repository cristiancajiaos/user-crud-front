import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutHeader } from './layout-header/layout-header';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, LayoutHeader],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
