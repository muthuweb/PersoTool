<template>
  <v-app-bar flat height="76">
    <v-app-bar-title class="text-h5 font-weight-bold">PersoTool</v-app-bar-title>
    <template #append>
      <v-menu>
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
            variant="tonal"
            prepend-icon="mdi-web"
            append-icon="mdi-chevron-down"
          >
            {{ $t(`languages.${locale}`) }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(lang, index) in availableLocales"
            :key="index"
            :value="$t(`languages.${lang}`)"
            class="justify-start"
            :class="{ 'font-weight-bold': locale === lang }"
            @click="changeLanguage(lang)"
          >
            {{ $t(`languages.${lang}`) }}
          </v-list-item>
        </v-list>
      </v-menu>
      <ThemeSwitcher />

      <!-- <v-btn icon>
        <v-badge color="error" :content="$store.alertCount">
          <v-icon>mdi-bell-outline</v-icon>
        </v-badge>
      </v-btn> -->

      <v-menu v-if="$auth.isAuthenticated">
        <template #activator="{ props }">
          <v-btn icon v-bind="props" class="mr-2">
            <v-avatar color="brown" size="large">
              <span class="text-h5">{{ $auth.loggedInUserShortName }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <div class="mx-auto text-center">
              <h3>{{ $auth.loggedInUserFullName }}</h3>
              <p class="text-caption mt-1">
                {{ $auth.user.email }}
              </p>
              <v-divider class="my-3" />
              <v-btn size="small" variant="tonal" @click="$auth.logout">
                {{ $t('form.signOut') }}
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useProfileStore } from '@/stores/profile'

const { locale, availableLocales } = useI18n()
const store = useProfileStore()

locale.value = store.lang

const changeLanguage = (language) => {
  locale.value = language
  store.updateLocale(language)
}
</script>

<style scoped>
.v-app-bar {
  box-shadow:
    0px 0px 1px rgba(23, 26, 31, 0.07),
    0px 0px 2px rgba(23, 26, 31, 0.12);
}

:deep(.v-toolbar__append) {
  gap: 10px;
}
</style>
