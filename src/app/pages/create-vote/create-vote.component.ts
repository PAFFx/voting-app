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

@Component({
  selector: 'create-vote',
  standalone: true,
  templateUrl: './create-vote.component.html',
  styleUrl: './create-vote.component.scss',
  imports: [NavBar, CommonModule, ReactiveFormsModule],
})
export class CreateVote {
  optionsCount: number = 1
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
    this.optionsCount += 1
  }

  onSubmit() {
    if (this.createVoteGroup.valid) {
      const formData = {
        ...this.createVoteGroup.value,
        options: this.optionForms.value,
      }
      console.log(formData)
    }
  }
}
