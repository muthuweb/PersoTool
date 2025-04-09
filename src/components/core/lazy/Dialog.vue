<template>
  <v-dialog
    v-model="dialog"
    :transition="`dialog-${smAndUp ? 'right' : 'bottom'}-transition`"
    :content-class="contentClasses"
    :fullscreen="fullOnMobile && !smAndUp"
    persistent
    no-click-animation
  >
    <template #activator="{ on, attrs }">
      <slot name="activator" :on="on" :attrs="attrs" />
    </template>
    <v-card flat height="100%" class="d-flex flex-column overflow-hidden">
      <div v-if="!hideTopbar" class="dialog__header">
        <TopBar
          ref="topBar"
          :back-button="backButton"
          close-button
          no-wave
          :shrink="topBarShrink"
          :shrink-deep="shrinkDeep"
          @back="emit('back')"
          @close="close"
        >
          <template #caption>
            <slot name="caption" />
          </template>
          <template #headline="slotProps">
            <slot name="headline" :shrink-deep="slotProps.shrinkDeep" />
          </template>
          <template #description>
            <slot name="description" />
          </template>
        </TopBar>
      </div>

      <div class="dialog__body">
        <div
          ref="scrollEl"
          :class="['dialog__content', { 'gradient-bg-neutral': shrinkDeep }]"
          @scroll.passive="handleScroll"
        >
          <slot />
        </div>
      </div>

      <div class="dialog__footer">
        <slot name="footer" />
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { useDisplay } from 'vuetify'
import TopBar from '@/components/TopBar.vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  backButton: {
    type: Boolean,
    default: false
  },
  hideTopbar: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'md'
  },
  shrinkDeepForce: {
    type: Boolean,
    default: false
  },
  fullOnMobile: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue', 'back', 'close'])

const dialog = ref(props.modelValue)
const topBarShrink = ref(false)
const topBarShrinkDeep = ref(false)
const scrollEl = ref(null)

const { smAndUp } = useDisplay()

const contentClasses = computed(() => {
  const classes = ['dialog secondary', `dialog-${props.size}`]
  if (!props.fullOnMobile || smAndUp.value) {
    classes.push('rounded-ts-xl rounded-be-0')
    if (smAndUp.value) {
      classes.push('right-side-dialog rounded-bs-xl rounded-te-0')
    } else if (!props.fullOnMobile) {
      classes.push('rounded-te-xl rounded-bs-0')
    }
  }
  return classes.join(' ')
})

const shrinkDeep = computed(() => {
  return topBarShrinkDeep.value || props.shrinkDeepForce
})

watch(
  () => props.modelValue,
  (newValue) => {
    dialog.value = newValue
  }
)

watch(dialog, (newValue) => {
  emit('update:modelValue', newValue)
})

const close = () => {
  dialog.value = false
  emit('close')
}

const handleScroll = (event) => {
  const { scrollTop } = event.target
  topBarShrink.value = scrollTop > 0
  topBarShrinkDeep.value = scrollTop > 100
}

// Implement scroll shrink functionality
onMounted(() => {
  nextTick(() => {
    if (scrollEl.value) {
      scrollEl.value.addEventListener('scroll', handleScroll, {
        passive: true
      })
    }
  })
})
</script>

<style lang="scss" scoped>
.dialog {
  &__body {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  &__footer {
    padding: 24px;
    position: relative;

    &:empty {
      padding-bottom: 0 !important;
    }

    @media (min-width: 600px) {
      padding: 32px;
    }

    @media (min-width: 960px) {
      padding: 40px;
    }
  }

  &__content {
    height: 100%;
    overflow-y: auto;
    padding: 24px 24px 0;

    @media (min-width: 600px) {
      padding: 24px 32px 0;
    }

    @media (min-width: 960px) {
      padding: 24px 40px 0;
    }

    :deep() {
      .v-window {
        min-height: 100%;
        display: flex;
        flex-direction: column;

        &__container {
          flex: 1;
        }

        &-item {
          flex: 1;
          display: flex;
          flex-direction: column;

          > div {
            flex: 1;
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
.right-side-dialog {
  border-radius: 0;
  position: fixed;
  top: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  box-shadow: none !important;
  max-height: unset !important;
  margin: 0 !important;
}

.dialog {
  height: 100%;
  margin: 0;
  padding: 0;
  top: unset;
  bottom: 0;
  position: fixed;
  overflow: hidden;

  &.v-overlay__content {
    max-height: calc(100% - 60px);
    width: 100%;
    max-width: 100%;
    margin: 0;

    > .v-card {
      border-radius: 0 !important;
    }
  }

  @media (min-width: 600px) {
    &-sm {
      width: 360px;
      max-width: 360px !important;
    }

    &-md {
      width: 480px;
      max-width: 480px !important;
    }

    &-lg {
      width: calc(100% - 48px);
    }
  }

  @media (min-width: 960px) {
    &-lg {
      width: 600px;
    }
  }
}

.dialog-right-transition-enter-active {
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.dialog-right-transition-leave-active {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.dialog-right-transition-enter-from,
.dialog-right-transition-leave-to {
  transform: translateX(100%);
}

.dialog-right-transition-enter-to,
.dialog-right-transition-leave-from {
  transform: translateX(0);
}
</style>
