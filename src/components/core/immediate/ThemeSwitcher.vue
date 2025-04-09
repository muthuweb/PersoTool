<template>
  <v-switch v-model="darkMode" hide-details color="primary" inset>
    <template #thumb>
      <v-icon size="large">
        {{ darkMode ? 'mdi-weather-night' : 'mdi-white-balance-sunny' }}
      </v-icon>
    </template>
  </v-switch>
</template>

<script setup>
import { watch, computed } from 'vue'
import { useTheme } from 'vuetify'
import { useProfileStore } from '@/stores/profile'

const theme = useTheme()
const store = useProfileStore()

theme.global.name.value = store.theme

const darkMode = computed({
  get: () => store.theme === 'dark',
  set: (isDark) => {
    const mode = isDark ? 'dark' : 'light'
    store.updateTheme(mode)
    theme.global.name.value = mode
  }
})

watch(
  () => store.theme,
  (newTheme) => {
    theme.global.name.value = newTheme
  }
)
</script>
