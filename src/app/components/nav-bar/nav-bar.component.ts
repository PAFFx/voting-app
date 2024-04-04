import { Component } from '@angular/core'
import { MatMenuModule } from '@angular/material/menu'
import { MatToolbarModule } from '@angular/material/toolbar'

import { RouterLink, RouterLinkActive } from '@angular/router'

@Component({
  selector: 'nav-bar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  imports: [MatMenuModule, MatToolbarModule, RouterLink, RouterLinkActive],
})
export class NavBar { }
