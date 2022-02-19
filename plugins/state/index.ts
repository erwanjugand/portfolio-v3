import { Context, Plugin } from '@nuxt/types'
import Vue from 'vue'
import skills from './skills'
import tools from './tools'
import { Skill, Tool } from '~/models'

interface State {
  skills: Skill[],
  tools: Tool[]
}

const statePlugin: Plugin = function (_ctx: Context, inject: Function) {
  const state = Vue.observable({
    skills,
    tools
  })

  inject('state', state)
}

declare module 'vue/types/vue' {
  interface Vue {
    $state: State
  }
}

declare module '@nuxt/types' {
  interface Context {
    $state: State
  }
}

export default statePlugin
