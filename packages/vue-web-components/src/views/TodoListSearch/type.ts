import type { StyleValue } from 'vue/dist/vue.js'

export interface Props {
  disabled: boolean
  options: {
    title: string
    placehold: string
    buttonText: string
    hotWords?: string[]
    titleStyle?: StyleValue
  }
}
