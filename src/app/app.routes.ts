import { Routes } from '@angular/router'

import { TopicMenu } from './pages/topic-menu/topic-menu.component'
import { CreateVote } from './pages/create-vote/create-vote.component'

export const routes: Routes = [
  { path: 'home', component: TopicMenu },
  { path: 'create-vote', component: CreateVote },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
]
