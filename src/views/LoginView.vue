<template>
  <v-card elevation="2" class="mx-auto mt-5" max-width="600">
    <v-card-text>
      <v-alert type="info" icon="mdi-information" border="end" prominent>
        <strong class="text-h5">You've signed out of PersoTool.</strong>
      </v-alert>
      <p class="mt-2 text-center text-h5">It's a good idea to close all browser windows.</p>

      <v-divider class="my-4" />

      <div class="text-center">
        <v-btn color="primary" size="large" @click="$auth.login()">
          {{ $t('loginButton') }}
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<i18n lang="json">
{
  "en": {
    "loginButton": "Login"
  },
  "de": {
    "loginButton": "Anmelden"
  }
}
</i18n>
