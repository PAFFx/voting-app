import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  NgbModal,
  NgbModalOptions,
  NgbActiveModal,
} from '@ng-bootstrap/ng-bootstrap'

import { TopicDetail } from '../topic-detail/topic-detail.component'
import { ReportListItem } from '../report-list-item/report-list-item.component'

@Component({
  selector: 'report-modal',
  standalone: true,
  templateUrl: './report-modal.component.html',
  imports: [ReportListItem, CommonModule],
  styleUrls: ['./report-modal.component.scss'],
})
export class ReportModal {
  constructor(
    public modal: NgbModal,
    public activeModal: NgbActiveModal
  ) { }

  options = [
    {
      optionName: 'option1',
      optionVote: 2,
      topicTotalVote: 10,
    },
    {
      optionName: 'option2',
      optionVote: 1,
      topicTotalVote: 10,
    },
    {
      optionName: 'option3',
      optionVote: 3,
      topicTotalVote: 10,
    },
    {
      optionName: 'option4',
      optionVote: 4,
      topicTotalVote: 10,
    },
  ]

  closeReportModal() {
    this.activeModal.dismiss()
  }

  openDetailModal() {
    const options: NgbModalOptions = {
      animation: false,
    }
    this.modal.open(TopicDetail, options)
  }
}
