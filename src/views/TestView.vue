<template>
  <form-validator>
    <template #default="rules">
      <v-form @submit.prevent="submitForm">
        <v-text-field
          v-model="firstName"
          :rules="[
            rules.required($t('form.labels.firstName')),
            rules.min($t('form.labels.firstName'), 3)
          ]"
          :label="$t('form.labels.firstName')"
        />

        <v-text-field
          v-model="lastName"
          :rules="[
            rules.required($t('form.labels.lastName')),
            rules.min($t('form.labels.lastName'), 1)
          ]"
          :label="$t('form.labels.firstName')"
        />

        <v-select v-model="select" :items="items" :rules="[rules.required('Item')]" label="Item" />
        <v-checkbox
          v-model="checkbox"
          :rules="[rules.required('Checkbox')]"
          label="Do you agree?"
        />
        <v-btn class="mt-2" type="submit"> Submit </v-btn>
      </v-form>
    </template>
  </form-validator>
</template>

<script setup>
import { ref } from 'vue'

const myname = ref('')
const firstName = ref('')
const lastName = ref('')
const select = ref(null)
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']
const checkbox = ref(false)

const submitForm = () => {
  console.log('Form submitted', {
    myname: myname.value,
    firstName: firstName.value,
    lastName: lastName.value,
    select: select.value,
    checkbox: checkbox.value
  })
}
</script>
