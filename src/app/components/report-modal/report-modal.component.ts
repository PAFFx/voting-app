import { Component, Input, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  NgbModal,
  NgbModalOptions,
  NgbActiveModal,
} from '@ng-bootstrap/ng-bootstrap'

import { TopicDetail } from '../topic-detail/topic-detail.component'
import { ReportListItem } from '../report-list-item/report-list-item.component'
import { Topic } from '../../interfaces/topic.interface'

@Component({
  selector: 'report-modal',
  standalone: true,
  templateUrl: './report-modal.component.html',
  imports: [ReportListItem, CommonModule],
  styleUrls: ['./report-modal.component.scss'],
})
export class ReportModal implements OnInit {
  @Input() topic!: Topic
  totalVote: number = 0

  constructor(
    public modal: NgbModal,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.topic.options.forEach((o) => {
      this.totalVote += o.voteCount
    })
  }

  closeReportModal() {
    this.activeModal.dismiss()
  }

  openDetailModal() {
    const options: NgbModalOptions = {
      animation: false,
    }
    const modalRef = this.modal.open(TopicDetail, options)
    modalRef.componentInstance.description = this.topic.description
  }
}
