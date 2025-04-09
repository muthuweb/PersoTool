<template>
  <div>
    <v-list-item v-if="!hasChildren" :to="route.path" :prepend-icon="route.meta?.icon || ''" />
    <v-menu v-else location="end" transition="slide-x-transition">
      <template #activator="{ props: menuProps }">
        <v-list-item v-bind="menuProps" :prepend-icon="route.meta?.icon || ''" />
      </template>
      <v-list min-width="140">
        <template v-for="child in route.children" :key="child.path">
          <v-list-item :to="child.path">
            {{ child.name }}
          </v-list-item>
        </template>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  route: {
    type: Object,
    required: true
  }
})
const hasChildren = computed(() => props.route.children && props.route.children.length > 0)
</script>
