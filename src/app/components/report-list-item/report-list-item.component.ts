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
  @Input() option: {
    optionName: string
    optionVote: number
    totalVote: number
  } = {
      optionName: '',
      optionVote: 1,
      totalVote: 1,
    }

  getPercentage(): number {
    return (this.option.optionVote / this.option.totalVote) * 100
  }
}
