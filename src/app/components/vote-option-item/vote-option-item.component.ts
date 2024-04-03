import { Component, Input } from '@angular/core'

@Component({
  selector: 'vote-option-item',
  standalone: true,
  templateUrl: './vote-option-item.html',
  styleUrl: './vote-option-item.scss',
})
export class VoteOptionItem {
  @Input() optionName: string = ''
}
