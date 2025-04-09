<template>
  <v-responsive>
    <v-app>
      <div
        v-if="!$auth.hasValidRole && $auth.isAuthenticated"
        class="w-100 h-100 d-flex align-center justify-center"
      >
        <v-sheet class="secondary pa-6" elevation="1" rounded>
          <v-icon>mdi-alert-circle-outline</v-icon>
          <span v-html="$t('responseMessages.error.uninvited')" />
        </v-sheet>
      </div>
      <v-layout v-else>
        <SideBar />
        <AppHeader />
        <v-main>
          <div class="px-10 py-5">
            <RouterView />
          </div>
        </v-main>
      </v-layout>
      <ErrorNotifications />
    </v-app>
  </v-responsive>
</template>

<script setup>
import { RouterView } from 'vue-router'
import SideBar from '@/components/SideBar.vue'
import AppHeader from '@/components/AppHeader.vue'
</script>

<style scoped>
:deep(.v-list-item) {
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(.v-list-item__spacer) {
  display: none;
}
</style>
