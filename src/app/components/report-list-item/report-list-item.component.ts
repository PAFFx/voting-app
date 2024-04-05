import { Component, Input } from '@angular/core'
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'report-list-item',
  standalone: true,
  templateUrl: './report-list-item.component.html',
  imports: [NgbProgressbarModule],
  styleUrls: ['./report-list-item.component.scss'],
})
export class ReportListItem {
  @Input() optionName!: string
  @Input() optionVote!: number
  @Input() totalVote!: number

  getPercentage(): number {
    console.log(this.totalVote)
    return (this.optionVote / this.totalVote) * 100
  }
}
