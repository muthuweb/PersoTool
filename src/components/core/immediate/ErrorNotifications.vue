<template>
  <div class="error-notifications">
    <v-snackbar
      v-for="error in errors"
      :key="error.id"
      v-model="error.show"
      :timeout="error.timeout"
      color="error"
      bottom
      right
      max-width="400"
    >
      {{ error.messageKey ? $t(error.messageKey) : error.message }}
    </v-snackbar>
    <!-- <v-snackbar v-model="errors">
      {{ text }}
    </v-snackbar> -->
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useMainStore } from '@/stores'
const errors = computed(() => useMainStore().errors)
</script>
