import { Component, Input } from "@angular/core";
@Component({
  selector: "topic-list-item",
  standalone: true,
  templateUrl: './topic-list-item.html',
  styleUrls: ['./topic-list-item.scss']
})

export class TopicListItem {
  @Input() topicName: string = "";
}
