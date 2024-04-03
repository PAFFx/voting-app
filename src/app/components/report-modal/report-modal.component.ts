import { Component } from '@angular/core'
import {
  NgbModal,
  NgbModalOptions,
  NgbActiveModal,
} from '@ng-bootstrap/ng-bootstrap'

import { TopicDetail } from '../topic-detail/topic-detail.component'

@Component({
  selector: 'report-modal',
  standalone: true,
  templateUrl: './report-modal.component.html',
  styleUrls: ['./report-modal.component.scss'],
})
export class ReportModal {
  constructor(
    public modal: NgbModal,
    public activeModal: NgbActiveModal
  ) { }

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
