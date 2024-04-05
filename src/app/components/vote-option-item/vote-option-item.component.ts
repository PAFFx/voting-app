import { Component, Input } from '@angular/core'

@Component({
  selector: 'vote-option-item',
  standalone: true,
  templateUrl: './vote-option-item.component.html',
  styleUrl: './vote-option-item.component.scss',
})
export class VoteOptionItem {
  @Input() optionName: string = ''
  @Input() isActive: boolean = false
}
