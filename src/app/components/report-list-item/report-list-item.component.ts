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
  @Input() optionName: string = ''
}
