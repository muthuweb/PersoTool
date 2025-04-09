<template>
  <div>
    <section id="text-and-typography" class="mb-10">
      <v-card border flat>
        <template #title>
          <h2 class="text-h2 py-5">Text and typography</h2>
        </template>
        <v-divider />
        <v-card-text class="text-medium-emphasis pa-6">
          <div v-for="[name, cls] in typographyClasses" :key="name" class="my-2" @click="copyClass">
            <div :class="cls" title="Click to copy the classes">
              {{ name }}
            </div>
          </div>
        </v-card-text>
      </v-card>
    </section>
    <section id="variations" class="mb-10">
      <v-card border flat>
        <template #title>
          <h2 class="text-h2 py-5">Color Variations</h2>
        </template>
        <v-divider />
        <v-card-text class="text-medium-emphasis pa-6">
          <div
            v-for="(cls, index) in variationClasses"
            :key="index"
            class="my-5"
            @click="copyClass"
          >
            <div :class="cls" title="Click to copy the classes">
              {{ cls }}
            </div>
          </div>
        </v-card-text>
      </v-card>
    </section>

    <section id="buttons" class="mb-10">
      <v-card border flat>
        <template #title>
          <h2 class="text-h2 py-5">Buttons</h2>
        </template>
        <v-divider />
        <v-card-text class="text-medium-emphasis pa-6">
          <h3>Contained Buttons</h3>
          <v-btn class="ma-2" color="primary"> Primary </v-btn>
          <v-btn class="ma-2" color="secondary"> Secondary </v-btn>
          <v-btn class="ma-2" color="success"> Success </v-btn>
          <v-btn class="ma-2" color="error"> Error </v-btn>
          <v-btn class="ma-2" color="warning"> Warning </v-btn>
          <v-btn class="ma-2" color="info"> Info </v-btn>
          <v-divider class="my-4" />
          <h3>Outlined Buttons</h3>
          <v-btn class="ma-2" color="primary" variant="outlined"> Primary </v-btn>
          <v-btn class="ma-2" color="secondary" variant="outlined"> Secondary </v-btn>
          <v-btn class="ma-2" color="success" variant="outlined"> Success </v-btn>
          <v-btn class="ma-2" color="error" variant="outlined"> Error </v-btn>
          <v-btn class="ma-2" color="warning" variant="outlined"> Warning </v-btn>
          <v-btn class="ma-2" color="info" variant="outlined"> Info </v-btn>

          <v-divider class="my-4" />
          <h3>Text Buttons</h3>
          <v-btn class="ma-2" color="primary" variant="text"> Primary </v-btn>
          <v-btn class="ma-2" color="secondary" variant="text"> Secondary </v-btn>
          <v-btn class="ma-2" color="success" variant="text"> Success </v-btn>
          <v-btn class="ma-2" color="error" variant="text"> Error </v-btn>
          <v-btn class="ma-2" color="warning" variant="text"> Warning </v-btn>
          <v-btn class="ma-2" color="info" variant="text"> Info </v-btn>
        </v-card-text>
      </v-card>
    </section>

    <section id="forms" class="mb-10">
      <v-card border flat>
        <template #title>
          <h2 class="text-h2 py-5">Form Elements</h2>
        </template>
        <v-divider />
        <v-card-text class="text-medium-emphasis pa-6">
          <v-text-field class="ma-2" label="Text Field" />
          <v-divider class="my-4" />

          <h3>Text Field Variant</h3>
          <br />
          <v-form>
            <v-row>
              <v-col cols="12" md="4" sm="6">
                <v-text-field label="Regular" placeholder="Placeholder" />
              </v-col>

              <v-col cols="12" md="4" sm="6">
                <v-text-field label="Solo" placeholder="Placeholder" variant="solo" />
              </v-col>

              <v-col cols="12" md="4" sm="6">
                <v-text-field label="Filled" placeholder="Placeholder" variant="filled" />
              </v-col>

              <v-col cols="12" md="4" sm="6">
                <v-text-field label="Outlined" placeholder="Placeholder" variant="outlined" />
              </v-col>

              <v-col cols="12" md="4" sm="6">
                <v-text-field label="Plain" placeholder="Placeholder" variant="plain" />
              </v-col>

              <v-col cols="12" md="4" sm="6">
                <v-text-field label="Underlined" placeholder="Placeholder" variant="underlined" />
              </v-col>
            </v-row>
          </v-form>

          <v-divider class="my-4" />
          <v-textarea label="Textarea" />
          <v-autocomplete
            label="Autocomplete"
            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
          />
          <v-select
            label="Select"
            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
          />
          <v-file-input label="File input" />
          <v-divider class="my-4" />
          <v-checkbox label="Checkbox" />
          <v-radio-group>
            <v-radio label="Radio One" value="one" />
            <v-radio label="Radio Two" value="two" />
            <v-radio label="Radio Three" value="three" />
          </v-radio-group>

          <h3>Slider</h3>
          <v-slider />
          <h3>Range Slider</h3>
          <v-range-slider />

          <v-switch label="Switch" />
        </v-card-text>
      </v-card>
    </section>

    <!-- Cards Example -->
    <v-card class="mt-4">
      <v-card-title>Card Title</v-card-title>
      <v-card-text>
        This is an example of a Vuetify card component, showcasing typical usage of components like
        buttons, text fields, and typography.
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary">Action 1</v-btn>
        <v-btn color="secondary">Action 2</v-btn>
      </v-card-actions>
    </v-card>

    <!-- Alerts Example -->
    <v-alert class="mt-4" type="success" dismissible> Success Alert </v-alert>
    <v-alert class="mt-4" type="error" dismissible> Error Alert </v-alert>

    <br />

    <!-- Dialog Example -->
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title class="headline">Dialog Title</v-card-title>
        <v-card-text> This is an example of a Vuetify dialog component. </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn color="primary" @click="dialog = true"> Open Dialog </v-btn>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const dialog = ref(false)

const typographyClasses = [
  ['Heading 1', 'text-h1'],
  ['Heading 2', 'text-h2'],
  ['Heading 3', 'text-h3'],
  ['Heading 4', 'text-h4'],
  ['Heading 5', 'text-h5'],
  ['Heading 6', 'text-h6'],
  ['Subtitle 1', 'text-subtitle-1'],
  ['Subtitle 2', 'text-subtitle-2'],
  ['Body 1', 'text-body-1'],
  ['Body 2', 'text-body-2'],
  ['Button', 'text-button'],
  ['Caption', 'text-caption'],
  ['Overline', 'text-overline']
]

const variationClasses = [
  'text-primary-lighten-1',
  'text-primary-lighten-2',
  'text-primary-lighten-3',
  'text-primary-darken-1',
  'text-primary-darken-2',
  'text-primary-darken-3',
  'text-secondary-lighten-1',
  'text-secondary-lighten-2',
  'text-secondary-lighten-3',
  'text-secondary-darken-1',
  'text-secondary-darken-2',
  'text-secondary-darken-3'
]

const copyClass = async (event) => {
  const element = event.target
  const className = element.className

  if (className) {
    try {
      await navigator.clipboard.writeText(className)
      alert(`Copied: ${className}`)
    } catch (error) {
      console.error('Failed to copy text: ', error)
    }
  }
}
</script>

<style scoped>
/* html,
body {
  overflow: visible;
} */

:global(html),
:global(body) {
  overflow: visible;
}
</style>
