import { Component } from '@angular/core'

import { NavBar } from '../../components/nav-bar/nav-bar.component'

@Component({
  selector: 'create-vote',
  standalone: true,
  templateUrl: './create-vote.component.html',
  styleUrl: './create-vote.component.scss',
  imports: [NavBar],
})
export class CreateVote { }
