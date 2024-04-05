import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NavBar } from '../../components/nav-bar/nav-bar.component'
import {
  FormControl,
  FormGroup,
  FormArray,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { TopicCreate } from '../../interfaces/topic.interface'
import { Option } from '../../interfaces/option.interface'
import { TopicsService } from '../../services/topics.service'

@Component({
  selector: 'create-vote',
  standalone: true,
  templateUrl: './create-vote.component.html',
  styleUrl: './create-vote.component.scss',
  imports: [NavBar, CommonModule, ReactiveFormsModule],
})
export class CreateVote {
  topicsService!: TopicsService
  constructor(topicService: TopicsService) {
    this.topicsService = topicService
  }
  optionForms = new FormArray([new FormControl('', Validators.required)])

  createVoteGroup = new FormGroup({
    topicName: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(1000),
    ]),
  })
  addOption() {
    this.optionForms.push(new FormControl('', Validators.required))
  }

  onSubmit() {
    if (this.createVoteGroup.valid) {
      this.optionForms.value
      const options: Option[] = this.optionForms.value.map((name) => {
        return {
          optionName: name!,
          voteCount: 0,
        }
      })
      const formData: TopicCreate = {
        topicName: this.createVoteGroup.value.topicName,
        description: this.createVoteGroup.value.description,
        options: options,
      }
      console.log(formData)
      this.topicsService
        .postTopic(formData)
        .subscribe((result) => console.log(result))
    }
  }
}
