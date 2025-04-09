<template>
  <HelloWorld msg="Users Module Page" />
  <LocationGraph />
  <v-btn v-if="locations" @click="update">Update Location Message</v-btn>
</template>

<script setup>
import { onMounted } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance()

const locations = proxy.$locationsModuleStore?.locations || false

const update = () => {
  locations.updateMessage('The the message has been updated!')
}

onMounted(() => {
  if (locations) {
    console.log(locations.message)
  }
})
</script>
