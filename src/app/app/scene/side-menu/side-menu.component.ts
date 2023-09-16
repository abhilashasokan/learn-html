import { Component, OnInit, Input } from '@angular/core';
import { Menu } from 'src/app/model/category';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Input() isCollapsed: boolean;
  @Input() menu: Menu;
  constructor() { }

  ngOnInit() {
  }

}
