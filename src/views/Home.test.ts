import CounterMessage from '@/components/CounterMessage.vue'
import Home from './Home.vue'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import { useCounterStore } from '@/stores/counter'

describe('Home', () => {
    it('renders a doubleCount message', async () => {
        const wrapper = mount(Home, {
            global: {
                plugins: [createTestingPinia({ stubActions: false })]
            }
        })

        const store = useCounterStore()

        const msg = wrapper.findComponent(CounterMessage)

        expect(msg.props().text).toBe('0')

        store.increment()

        await wrapper.vm.$nextTick()

        expect(msg.props().text).toBe('2')
    })
})
