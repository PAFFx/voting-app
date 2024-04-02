import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TopicListItem } from "../../components/topic-list-item/topic-list-item";

@Component({
  selector: "topic-menu",
  standalone: true,
  imports: [CommonModule, TopicListItem],
  templateUrl: "./topic-menu-component.html",
  styleUrls: ["./topic-menu.component.scss"]
})

export class TopicMenu {
  items: string[] = ["topic1", "topic2", "topic3"]
}
