import { Component } from '@angular/core'
import { MatMenuModule } from '@angular/material/menu'
import { MatToolbarModule } from '@angular/material/toolbar'

@Component({
  selector: 'nav-bar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  imports: [MatMenuModule, MatToolbarModule],
})
export class NavBar { }
