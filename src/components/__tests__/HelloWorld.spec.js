import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('render a button with the text "Click Hello!"', () => {
    const wrapper = mount(HelloWorld)
    const button = wrapper.find('button')

    expect(button.text()).toBe('Click Hello!')
  })
})
