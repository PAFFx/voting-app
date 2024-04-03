import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog'

import { VoteOptionItem } from '../vote-option-item/vote-option-item.component'

@Component({
  selector: 'vote-modal',
  standalone: true,
  templateUrl: './vote-modal.component.html',
  styleUrls: ['./vote-modal.component.scss'],
  imports: [MatDialogModule, CommonModule, VoteOptionItem],
})
export class VoteModal {
  constructor(public modalRef: MatDialogRef<VoteModal>) { }

  options: string[] = ['Option1', 'Option2', 'Option3', 'Option4', 'Option5']

  closeModal() {
    this.modalRef.close()
  }
}
