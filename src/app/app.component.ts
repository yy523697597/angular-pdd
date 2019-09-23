import { Component } from "@angular/core";
import { TopMenu } from "./components";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  topMenus: TopMenu[] = [
    {
      title: "热门",
      link: "#"
    },
    {
      title: "男装",
      link: "#"
    },
    {
      title: "女装",
      link: "#"
    },
    {
      title: "手机",
      link: "#"
    },
    {
      title: "水果",
      link: "#"
    },
    {
      title: "百货",
      link: "#"
    },
    {
      title: "母婴",
      link: "#"
    },
    {
      title: "食品",
      link: "#"
    },
    {
      title: "鞋包",
      link: "#"
    },
    {
      title: "运动",
      link: "#"
    },
    {
      title: "家纺",
      link: "#"
    },
    {
      title: "冲调",
      link: "#"
    },
    {
      title: "牛奶",
      link: "#"
    },
    {
      title: "海淘",
      link: "#"
    }
  ];

  handleTabSelected(tab: TopMenu) {
    console.log("tab click ===>", tab);
  }
}
