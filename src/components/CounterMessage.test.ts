import CounterMessage, { CounterMessageProps } from './CounterMessage.vue'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import { useCounterStore } from '@/stores/counter'

function mountMessage(props: CounterMessageProps) {
    return mount(CounterMessage, {
        props,
        global: {
            plugins: [createTestingPinia()]
        }
    })
}

describe('CounterMessage', () => {
    it('renders text prop', () => {
        const wrapper = mountMessage({ text: 'Hello, World!' })

        expect(wrapper.text()).toContain('Hello, World!')
    })

    it('increments store value on click', async () => {
        const wrapper = mountMessage({ text: 'one' })

        const store = useCounterStore()

        await wrapper.find('button').trigger('click')

        expect(store.increment).toHaveBeenCalledOnce()
    })
})
