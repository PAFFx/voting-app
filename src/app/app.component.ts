import { Component } from '@angular/core';

import { TopicMenu } from './pages/topic-menu/topic-menu.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TopicMenu],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'voting-app';
}

