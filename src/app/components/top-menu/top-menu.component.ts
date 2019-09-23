import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
export interface TopMenu {
  title: string;
  link: string;
}
@Component({
  selector: "app-top-menu",
  templateUrl: "./top-menu.component.html",
  styleUrls: ["./top-menu.component.less"]
})
export class TopMenuComponent implements OnInit {
  currentIndex: number = 0;
  title: string = "拼多多";
  @Input() menus: TopMenu[] = [];
  @Output() tabSelected = new EventEmitter();

  constructor() {}
  handleTabClick(index: number) {
    this.currentIndex = index;
    this.tabSelected.emit(this.menus[this.currentIndex]);
  }

  ngOnInit() {}
}
