<template>
  <v-navigation-drawer permanent rail rail-width="80" class="pa-1">
    <v-list nav>
      <v-list-item class="text-h4 font-weight-bold mb-7">P</v-list-item>
      <template v-for="route in routesWithIcons" :key="route.path">
        <MenuItem :route="route" />
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { computed } from 'vue'
import MenuItem from './MenuItem.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const routesWithIcons = computed(() => router.getRoutes().filter(({ meta }) => meta?.icon))
</script>

<style scoped>
.v-navigation-drawer {
  box-shadow:
    0px 0px 1px rgba(23, 26, 31, 0.07),
    0px 0px 2px rgba(23, 26, 31, 0.12);
}
</style>
