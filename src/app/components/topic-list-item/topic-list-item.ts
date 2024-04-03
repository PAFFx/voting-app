import { Component, Input } from '@angular/core'
import {
  MatDialog,
  MatDialogModule,
  MatDialogTitle,
} from '@angular/material/dialog'

import { VoteModal } from '../vote-modal/vote-modal.component'

@Component({
  selector: 'topic-list-item',
  standalone: true,
  templateUrl: './topic-list-item.html',
  styleUrls: ['./topic-list-item.scss'],
  imports: [MatDialogModule, MatDialogTitle],
})
export class TopicListItem {
  @Input() public topicName: string = ''
  @Input() public idx: number = 0
  //
  constructor(public dialog: MatDialog) { }
  //
  openVoteModal(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ) {
    this.dialog.open(VoteModal, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    })
  }
}
