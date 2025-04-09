<template>
  <div>
    <slot v-bind="rules" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Define the validation rules
const rules = reactive({
  required: (_field_) => (value) => !!value || t('form.messages.required', { _field_ }),

  min: (_field_, length) => (value) =>
    value?.length >= length || t('form.messages.min', { _field_, length }),

  max: (_field_, length) => (value) =>
    value?.length <= length || t('form.messages.max', { _field_, length }),

  min_value: (_field_, min) => (value) =>
    value >= min || t('form.messages.min_value', { _field_, min }),

  max_value: (_field_, max) => (value) =>
    value <= max || t('form.messages.max_value', { _field_, max }),

  email: () => (value) =>
    /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value) || t('form.messages.email'),

  length: (_field_, length) => (value) =>
    value?.length === length || t('form.messages.length', { _field_, length }),

  double: (_field_) => (value) =>
    /^[+-]?([0-9]*[.])?[0-9]+$/.test(value) || t('form.messages.double', { _field_ }),

  image: (_field_, size) => (value) =>
    (value && value.size < size && /\.(jpg|png|bmp)$/i.test(value.name)) ||
    t('form.messages.image', { _field_, size }),

  website: () => (value) =>
    /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(value) ||
    t('form.messages.website'),

  rate: () => () => t('form.messages.rate'),

  iban: () => () => t('form.messages.iban'),

  link: () => () => t('form.messages.link'),

  maconomyNumber: () => () => t('form.messages.maconomyNumber'),

  restrictedEmail: () => (value) =>
    value !== 'restricted@example.com' || t('form.messages.restrictedEmail'),

  noServiceSelected: () => () => t('form.messages.noServiceSelected')
})
</script>
