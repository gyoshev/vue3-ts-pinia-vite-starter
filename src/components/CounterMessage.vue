<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

defineOptions({
    name: 'CounterMessage'
})

export type CounterMessageProps = {
    text?: string
}

const props = withDefaults(defineProps<CounterMessageProps>(), { text: '' })

const store = useCounterStore()
</script>

<template>
    <div class="text-center">
        <div class="mx-auto inline-flex flex-col">
            {{ props.text }}
            <button class="radius-1 border p-2" @click="store.increment">Increment</button>
        </div>
    </div>
</template>
