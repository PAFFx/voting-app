import { Injectable } from '@angular/core'
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http'
import { Topic } from '../interfaces/topic.interface'
import { baseUrl } from '../app.config'
import { Observable } from 'rxjs/internal/Observable'

@Injectable({
  providedIn: 'root',
})
export class TopicsService {
  constructor(private http: HttpClient) { }

  url = baseUrl + '/Vote/Topics'

  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.url)
  }
}
