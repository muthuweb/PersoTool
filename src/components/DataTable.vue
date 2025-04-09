<template>
  <main>
    <v-toolbar color="transparent">
      <h3 class="text-h4 font-weight-bold">
        <slot name="title">Users</slot>
      </h3>
      <template #append>
        <div class="d-flex align-items-center ga-4">
          <v-btn prepend-icon="mdi-export" variant="outlined" color="primary"> Export </v-btn>
          <v-btn prepend-icon="mdi-filter-variant" variant="outlined" color="primary">
            Filter
          </v-btn>
          <v-btn prepend-icon="mdi-plus" variant="flat" color="primary" @click="createUser()">
            Create new
          </v-btn>
        </div>
      </template>
    </v-toolbar>

    <!-- <v-btn icon="mdi-bell-outline" variant="text" size="small" /> -->

    <v-btn
      class="mr-2"
      color="primary"
      @click="
        () => {
          inviteUser = true
        }
      "
    >
      Invite Users
    </v-btn>
    <InviteDialog v-model="inviteUser" />

    <Dialog v-model="dialog">
      <template #headline>
        {{ isNewUser ? 'Create User' : 'Edit User' }}
      </template>
      <template #default>
        <form-validator>
          <template #default="rules">
            <v-form>
              <v-text-field
                v-model="newUser.firstName"
                variant="solo-filled"
                :rules="[
                  rules.required($t('form.labels.firstName')),
                  rules.min($t('form.labels.firstName'), 3)
                ]"
                :label="$t('form.labels.firstName')"
              />

              <v-text-field
                v-model="newUser.lastName"
                variant="solo-filled"
                :rules="[
                  rules.required($t('form.labels.lastName')),
                  rules.min($t('form.labels.lastName'), 3)
                ]"
                :label="$t('form.labels.lastName')"
              />

              <v-text-field
                v-model="newUser.email"
                variant="solo-filled"
                :rules="[
                  rules.required($t('form.labels.email')),
                  rules.min($t('form.labels.email'), 3)
                ]"
                :label="$t('form.labels.email')"
              />

              <v-text-field
                v-model="newUser.department"
                variant="solo-filled"
                :rules="[
                  rules.required($t('form.labels.department')),
                  rules.min($t('form.labels.department'), 3)
                ]"
                :label="$t('form.labels.department')"
              />

              <v-text-field
                v-model="newUser.company"
                variant="solo-filled"
                :rules="[
                  rules.required($t('form.labels.company')),
                  rules.min($t('form.labels.company'), 3)
                ]"
                :label="$t('form.labels.company')"
              />
            </v-form>
          </template>
        </form-validator>
      </template>
      <template #footer>
        <div class="v-spacer" />
        <v-btn class="mr-3" variant="outlined" @click="resetForm"> Reset </v-btn>
        <v-btn
          v-if="isNewUser"
          :disabled="!isValidForm"
          variant="flat"
          color="primary"
          @click="saveUser"
        >
          Create User
        </v-btn>
        <v-btn
          v-else
          :disabled="!isValidForm"
          :loading="invitationLoading"
          variant="flat"
          color="primary"
          @click="updateUser"
        >
          Update
        </v-btn>
      </template>
    </Dialog>

    <v-card class="pa-6 mt-3">
      <v-row class="mb-2">
        <v-col cols="3">
          <v-autocomplete
            v-model="selectedUsers"
            :items="users"
            item-title="firstName"
            return-object
            prepend-inner-icon="mdi-magnify"
            menu-icon=""
            variant="outlined"
            density="compact"
            flat
            label="Search"
            hide-details
            multiple
          />
        </v-col>
        <v-col>
          <v-chip-group>
            <v-chip
              v-for="({ firstName, email }, index) in selectedUsers"
              :key="email"
              label
              closable
              @click:close="selectedUsers.splice(index, 1)"
            >
              {{ firstName }}
            </v-chip>
          </v-chip-group>
        </v-col>
      </v-row>
      <v-spacer />
      <v-data-table-virtual
        v-model="selectedUsers"
        fixed-header
        :headers="headers"
        :items="users"
        hover
        return-object
        show-select
        height="67vh"
      >
        <template #item.actions="{ item }">
          <v-menu>
            <template #activator="{ props }">
              <v-btn icon="mdi-dots-vertical" variant="plain" v-bind="props" />
            </template>
            <v-list variant="plain" min-width="120">
              <v-list-item prepend-icon="mdi-pencil" @click="editUser(item)"> Edit </v-list-item>
              <v-list-item prepend-icon="mdi-delete" @click="deleteItem(item)">
                Delete
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-data-table-virtual>
    </v-card>

    <v-dialog v-model="dialogDelete" persistent max-width="500">
      <v-card flat title="Are you sure you want to delete this user?">
        <v-card-actions>
          <div class="v-spacer" />
          <v-btn size="small" variant="flat" color="primary" @click="cancelDelete"> Cancel </v-btn>
          <v-btn size="small" variant="tonal" @click="deleteItemConfirm"> Yes </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import InviteDialog from '@/components/InviteDialog.vue'
import { users as userData, headers } from '@/data/users.json'

const users = ref([...userData])

const newUser = ref({
  firstName: '',
  LastName: '',
  email: '',
  company: '',
  department: ''
})
const dialog = ref(false)
const invitationLoading = ref(false)
const inviteUser = ref(false)
const dialogDelete = ref(false)
const isNewUser = ref(false)
const editedIndex = ref(-1)
const selectedUsers = ref([])

const isValidForm = computed(() => {
  return (
    newUser.value.firstName &&
    newUser.value.email &&
    newUser.value.company &&
    newUser.value.department
  )
})

//Methods
const createUser = () => {
  isNewUser.value = true
  dialog.value = true
}
const saveUser = () => {
  users.value.unshift({ ...newUser.value })
  dialog.value = false
  isNewUser.value = false
}
const resetForm = () => {
  newUser.value = {
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    department: ''
  }
}
const editUser = (item) => {
  dialog.value = true
  editedIndex.value = users.value.indexOf(item)
  newUser.value = { ...item }
}
const updateUser = () => {
  if (editedIndex.value > -1) {
    users.value[editedIndex.value] = { ...newUser.value }
    dialog.value = false
    editedIndex.value = -1
  }
}
const deleteItem = (item) => {
  editedIndex.value = users.value.indexOf(item)
  //create a shallow copy of the item object.
  dialogDelete.value = true
}
const deleteItemConfirm = () => {
  users.value.splice(editedIndex.value, 1)
  cancelDelete()
}
const cancelDelete = () => {
  dialogDelete.value = false
  editedIndex.value = -1
}
</script>

<style scoped>
.v-table {
  border-radius: 0;
}

:deep(.v-table__wrapper thead th) {
  font-weight: bold !important;
}

:deep(.v-list-item__prepend .v-list-item__spacer) {
  width: 8px;
}

/* TODO:Remove selection from autocomplete dynamically */
:deep(.v-autocomplete__selection) {
  display: none;
}
</style>
