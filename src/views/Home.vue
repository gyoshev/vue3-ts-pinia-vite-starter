<script setup lang="ts">
import CounterMessage from '@/components/CounterMessage.vue'
import { useCounterStore } from '@/stores/counter'

defineOptions({
    name: 'Home'
})

const store = useCounterStore()
</script>

<template>
    <CounterMessage :text="String(store.doubleCount)" />
</template>
