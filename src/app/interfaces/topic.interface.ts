import { Option } from './option.interface'

export interface Topic {
  id: string
  topicName: string
  description: string
  options: Option[]
}
