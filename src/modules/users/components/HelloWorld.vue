<template>
  <div class="greetings">
    <h1 class="green">
      {{ msg }}
    </h1>
    <p>{{ store.message }}</p>
  </div>
</template>

<script setup>
import { useUsersStore } from '../stores'

// Define props
defineProps({
  msg: {
    type: String,
    required: true
  }
})

// Create an instance of the store
const store = useUsersStore()
</script>
