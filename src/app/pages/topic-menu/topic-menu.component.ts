import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TopicListItem } from '../../components/topic-list-item/topic-list-item'
import { NavBar } from '../../components/nav-bar/nav-bar.component'

import { TopicsService } from '../../services/topics.service'
import { Topic } from '../../interfaces/topic.interface'

@Component({
  selector: 'topic-menu',
  standalone: true,
  imports: [CommonModule, TopicListItem, NavBar],
  templateUrl: './topic-menu-component.html',
  styleUrls: ['./topic-menu.component.scss'],
})
export class TopicMenu implements OnInit {
  topicService: TopicsService
  topics: Topic[]

  constructor(topicService: TopicsService) {
    this.topicService = topicService
    this.topics = []
  }

  ngOnInit() {
    this.topicService.getTopics().subscribe((topics) => {
      this.topics = topics
    })
  }
}
