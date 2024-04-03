import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  NgbModal,
  NgbActiveModal,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap'

import { VoteOptionItem } from '../vote-option-item/vote-option-item.component'
import { TopicDetail } from '../topic-detail/topic-detail.component'

@Component({
  selector: 'vote-modal',
  standalone: true,
  templateUrl: './vote-modal.component.html',
  styleUrls: ['./vote-modal.component.scss'],
  imports: [CommonModule, VoteOptionItem, TopicDetail],
})
export class VoteModal {
  constructor(
    public voteModalService: NgbActiveModal,
    public topicModalService: NgbModal
  ) { }

  options: string[] = ['Option1', 'Option2', 'Option3', 'Option4', 'Option5']

  closeModal() {
    this.voteModalService.close()
  }

  openDetailModal() {
    const options: NgbModalOptions = {
      animation: false,
    }
    this.topicModalService.open(TopicDetail, options)
  }
}
