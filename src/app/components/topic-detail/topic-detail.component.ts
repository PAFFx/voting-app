import { Component } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'topic-detail',
  standalone: true,
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.scss'],
})
export class TopicDetail {
  constructor(public activeModal: NgbActiveModal) { }

  closeModal() {
    this.activeModal.close()
  }
}
