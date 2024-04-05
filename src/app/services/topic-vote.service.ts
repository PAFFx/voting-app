import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { baseUrl } from '../app.config'
import { TopicVote } from '../interfaces/topic-vote.interface'

@Injectable({
  providedIn: 'root',
})
export class TopicVoteService {
  constructor(private http: HttpClient) { }

  url = baseUrl + `/Vote/Topics`

  patchTopicVote(id: string, optionIndex: number) {
    const body: TopicVote = {
      optionIndex: optionIndex,
    }
    const patchUrl = `${this.url}/${id}`
    console.log(patchUrl)
    // debugger
    return this.http.patch<TopicVote>(patchUrl, body)
  }
}
