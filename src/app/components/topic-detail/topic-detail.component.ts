import { Component } from '@angular/core'
import {
  MatDialogModule,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog'

@Component({
  selector: 'topic-detail',
  standalone: true,
  templateUrl: './topic-detail.component.html',
  styleUrls: ['./topic-detail.component.scss'],
})
export class TopicDetail {
  constructor(public modalRef: MatDialogRef<TopicDetail>) { }

  closeModal() {
    this.modalRef.close()
  }
}
