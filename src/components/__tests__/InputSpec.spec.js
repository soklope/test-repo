import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '@/App.vue'

// describe('HelloWorld', () => {
//   it('renders properly', () => {
//     const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
//     expect(wrapper.text()).toContain('Hello Vitest')
//   })
// })

describe('HelloWorld', () => {
  it('tests inputfield', () => {
    const wrapper = mount(App)
    const input = wrapper.find('input')
    input.setValue('Hello World')
    expect(input.element.value).toBe('Hello World Input')
  })
})