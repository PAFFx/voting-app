import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NavBar } from '../../components/nav-bar/nav-bar.component'
import { BootstrapIcons, BootstrapIconsModule } from 'ng-bootstrap-icons'

@Component({
  selector: 'create-vote',
  standalone: true,
  templateUrl: './create-vote.component.html',
  styleUrl: './create-vote.component.scss',
  imports: [NavBar, CommonModule],
})
export class CreateVote {
  optionForms: string[] = ['']

  addOption() {
    this.optionForms.push('')
  }
}
