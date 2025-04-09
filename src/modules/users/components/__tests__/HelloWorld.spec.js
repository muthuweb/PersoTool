// __tests__/HelloWorld.spec.js
import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import HelloWorld from '../HelloWorld.vue'

beforeEach(() => {
  const pinia = createPinia()
  setActivePinia(pinia)
})

describe('HelloWorld', () => {
  it('renders properly with the passed prop', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Hello Vitest' },
      global: {
        plugins: [createPinia()] // Provide Pinia to the test wrapper
      }
    })
    expect(wrapper.text()).toContain('Hello Vitest')
  })

  it('renders the store message correctly', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Hello Vitest' },
      global: {
        plugins: [createPinia()] // Provide Pinia to the test wrapper
      }
    })
    expect(wrapper.text()).toContain('Message loading from location Module!')
  })

  it('renders with the correct class for the heading', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Hello Vitest' },
      global: {
        plugins: [createPinia()] // Provide Pinia to the test wrapper
      }
    })
    const heading = wrapper.find('h1')
    expect(heading.classes()).toContain('green')
  })
})
