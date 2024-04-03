import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  MatDialogModule,
  MatDialogRef,
  MatDialog,
} from '@angular/material/dialog'

import { VoteOptionItem } from '../vote-option-item/vote-option-item.component'
import { TopicDetail } from '../topic-detail/topic-detail.component'

@Component({
  selector: 'vote-modal',
  standalone: true,
  templateUrl: './vote-modal.component.html',
  styleUrls: ['./vote-modal.component.scss'],
  imports: [MatDialogModule, CommonModule, VoteOptionItem, TopicDetail],
})
export class VoteModal {
  constructor(
    public voteModalRef: MatDialogRef<VoteModal>,
    public detailDialog: MatDialog
  ) { }

  options: string[] = ['Option1', 'Option2', 'Option3', 'Option4', 'Option5']

  closeModal() {
    this.voteModalRef.close()
  }

  openDetailModal(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ) {
    this.detailDialog.open(TopicDetail, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    })
  }
}
