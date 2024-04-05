import { Option } from './option.interface'

export interface Topic {
  id: string
  topicName: string
  description: string
  options: Option[]
}

export interface TopicCreate {
  topicName: string | null | undefined
  description: string | null | undefined
  options: Option[] | undefined
}
