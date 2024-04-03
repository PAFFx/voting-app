import { Component, Input } from '@angular/core'

import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap'
import { VoteModal } from '../vote-modal/vote-modal.component'

@Component({
  selector: 'topic-list-item',
  standalone: true,
  templateUrl: './topic-list-item.html',
  styleUrls: ['./topic-list-item.scss'],
})
export class TopicListItem {
  @Input() public topicName: string = ''
  @Input() public idx: number = 0
  //
  constructor(public modal: NgbModal) { }
  //
  openVoteModal() {
    const options: NgbModalOptions = {
      animation: false,
    }
    this.modal.open(VoteModal, options)
  }

  openReportModal() {
    const options: NgbModalOptions = {
      animation: false,
    }
    this.modal.open(VoteModal, options)
  }
}
