import { Component, Input } from '@angular/core'

import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap'
import { VoteModal } from '../vote-modal/vote-modal.component'
import { ReportModal } from '../report-modal/report-modal.component'
import { Topic } from '../../interfaces/topic.interface'

@Component({
  selector: 'topic-list-item',
  standalone: true,
  templateUrl: './topic-list-item.html',
  styleUrls: ['./topic-list-item.scss'],
})
export class TopicListItem {
  @Input() topic!: Topic
  @Input() idx: number = 0
  //
  constructor(public modal: NgbModal) { }
  //
  openVoteModal() {
    const options: NgbModalOptions = {
      animation: false,
    }
    const modalRef = this.modal.open(VoteModal, options)
    modalRef.componentInstance.topic = this.topic
  }

  openReportModal() {
    const options: NgbModalOptions = {
      animation: false,
    }
    const modalRef = this.modal.open(ReportModal, options)
  }
}
