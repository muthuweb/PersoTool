<template>
  <div :class="['topbar__wrapper', { topbar__shrink: shrink, 'topbar__shrink-deep': shrinkDeep }]">
    <div :class="topBarClasses">
      <div>
        <v-btn
          v-if="backButton"
          variant="outlined"
          icon
          :size="shrink || shrinkDeep ? 'small' : 'default'"
          :class="{ 'mb-4': !shrinkDeep }"
          @click="emit('back')"
        >
          <v-icon size="small">arrow_back</v-icon>
        </v-btn>
      </div>
      <v-btn
        v-if="closeButton"
        icon="mdi-close"
        variant="text"
        :size="shrink || shrinkDeep ? 'small' : 'default'"
        :class="shrinkDeep ? 'order-last' : 'mb-4'"
        @click="emit('close')"
      />
      <div :class="headingClasses">
        <span class="body-1 font-weight-bold">
          <slot name="caption" />
        </span>
        <span
          :class="[
            'topbar__headline',
            slots.caption && (shrink || shrinkDeep) ? 'ml-1' : '',
            shrink || shrinkDeep ? 'body-1 text-lowercase font-weight-bold' : 'd-block text-h4 mb-4'
          ]"
        >
          <slot name="headline" />
        </span>
      </div>
      <div v-if="slots.description && !shrinkDeep" class="w-100 body-1 primary--text-opacity-64">
        <slot name="description" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, useSlots } from 'vue'

const props = defineProps({
  backButton: {
    type: Boolean,
    default: false
  },
  closeButton: {
    type: Boolean,
    default: false
  },
  shrink: {
    type: Boolean,
    default: false
  },
  shrinkDeep: {
    type: Boolean,
    default: false
  },
  bgColor: {
    type: String,
    default: 'transparent'
  },
  noGutter: {
    type: Boolean,
    default: false
  },
  wideGutter: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['back', 'close'])
const slots = useSlots()

const topBarClasses = computed(() => [
  'topbar d-flex',
  props.bgColor,
  { 'no-gutter': props.noGutter },
  { 'wide-gutter': !props.noGutter && props.wideGutter },
  { 'justify-space-between flex-wrap': !props.shrinkDeep },
  { 'align-center': props.shrinkDeep },
  { 'has-close': props.closeButton }
])

const headingClasses = computed(() => {
  const classes = [props.shrinkDeep ? 'flex-1' : 'w-100']
  if (props.shrinkDeep) {
    if (props.backButton) {
      classes.push('ml-6')
    }
    if (props.closeButton) {
      classes.push('mr-6')
    }
  }
  return classes
})
</script>

<style lang="scss" scoped>
.topbar {
  padding: 24px 24px 12px;

  @media (min-width: 600px) {
    padding: 32px 32px 12px;
  }

  @media (min-width: 960px) {
    padding: 40px 40px 12px;
  }

  &.wide-gutter {
    padding: 40px 24px 16px;

    @media (min-width: 600px) {
      padding: 48px 48px 16px;
    }

    @media (min-width: 960px) {
      padding: 80px 80px 16px;
    }
  }

  &.no-gutter {
    padding: 0 0 16px !important;
  }

  &__headline {
    transition: all 0.3s ease;
  }

  &:not(.has-close) .v-btn {
    transition: all 0.3s ease;
  }
}

.topbar__shrink {
  &-deep .topbar:not(.no-gutter) {
    padding: 24px !important;
  }
}
</style>
