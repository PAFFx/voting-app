import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  NgbModal,
  NgbActiveModal,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap'

import { VoteOptionItem } from '../vote-option-item/vote-option-item.component'
import { TopicDetail } from '../topic-detail/topic-detail.component'
import { Topic } from '../../interfaces/topic.interface'
import { TopicVoteService } from '../../services/topic-vote.service'

@Component({
  selector: 'vote-modal',
  standalone: true,
  templateUrl: './vote-modal.component.html',
  styleUrls: ['./vote-modal.component.scss'],
  imports: [CommonModule, VoteOptionItem, TopicDetail],
})
export class VoteModal {
  @Input() topic!: Topic

  activeIndex: number = -1
  topicVoteService!: TopicVoteService

  constructor(
    public activeModal: NgbActiveModal,
    public modal: NgbModal,
    topicVoteService: TopicVoteService
  ) {
    this.topicVoteService = topicVoteService
  }

  setActiveIndex(index: number) {
    if (this.activeIndex == index) {
      this.activeIndex = -1
    } else {
      this.activeIndex = index
    }
  }

  submitAndCloseModal() {
    this.activeModal.close()
    console.log(this.activeIndex)
    this.topicVoteService
      .patchTopicVote(this.topic.id, this.activeIndex)
      .subscribe((result) => {
        console.log(result)
      })
  }

  openDetailModal() {
    const options: NgbModalOptions = {
      animation: false,
    }
    const modalRef = this.modal.open(TopicDetail, options)
    modalRef.componentInstance.description = this.topic.description
  }
}
