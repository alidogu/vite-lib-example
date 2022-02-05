import Button from '../../../src/components/LibButton.vue'
import { shallowMount } from '@vue/test-utils'

describe('~/src/components/LibButton.vue', () => {
  test('can mount', () => {
    const wrapper = shallowMount(Button)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
