<template>
  <v-sheet v-if="message" rounded="lg" elevation="0" class="snackbar" :color="`${color}`">
    <v-icon v-if="prependIcon" :color="color" @click="$emit('click:prepend')">
      {{ prependIcon }}
    </v-icon>
    <div class="snackbar__text" :class="`${color}`" v-html="message" />
    <v-icon v-if="closeable" :color="color" @click="$emit('close')"> highlight_off </v-icon>
  </v-sheet>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
defineProps({
  color: {
    type: String,
    required: true
  },
  closeable: {
    type: Boolean,
    default: true
  },
  prependIcon: {
    type: String,
    default: ''
  },
  message: {
    type: String,
    default: ''
  }
})

defineEmits(['click:prepend', 'close'])
</script>

<style scoped lang="scss">
//@import "@/scss/mixins.scss";

.snackbar {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;

  &__text {
    // @include label-1;
    font-size: 12px;
    font-weight: 700;
  }

  :v-deep(.v-icon) {
    font-size: 12px;

    &:first-child {
      margin-right: 1rem;
    }

    &:last-child {
      margin-left: 1rem;
    }
  }
}
</style>
