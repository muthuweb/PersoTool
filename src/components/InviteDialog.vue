<template>
  <Dialog v-model="isOpen">
    <template #headline>
      {{ $t('invite.title') + ' PersoTool' }}
    </template>
    <template #default>
      <form-validator>
        <template #default="rules">
          <v-form @submit.prevent="sendInvitation">
            <div class="body-1 font-weight-bold">
              {{ $t('invite.selectRole') }}
            </div>
            <v-radio-group v-model="selectedRole" :rules="[rules.required('Role')]">
              <v-radio
                v-for="(role, index) in roles"
                :key="index"
                :label="role.label"
                :value="role.value"
              />
            </v-radio-group>
            <div class="body-1 font-weight-bold mt-1 mb-3">
              {{ $t('invite.enterEmail') }}
            </div>
            <v-select
              v-model="selectedEmailIds"
              :items="userEmailIds"
              :rules="[rules.required('Item')]"
              label="Select Users"
              multiple
            />
            <v-btn
              :disabled="!selectedEmailIds.length || !selectedRole"
              :loading="invitationLoading"
              color="primary"
              class="mt-2"
              type="submit"
            >
              Send Invite
            </v-btn>
            <Snackbar :color="statusColor" :message="statusMessage" @close="clearStatus" />
          </v-form>
        </template>
      </form-validator>
    </template>
  </Dialog>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { useProfileStore } from '@/stores/profile'

const { t } = useI18n()

const invitationLoading = ref(false)
const isOpen = ref(false)
const form = reactive({
  users: []
})
const selectedRole = ref(null)
const roles = reactive([
  { label: 'Admin', value: 'perso-admin' },
  { label: 'hr', value: 'hr' }
])
const selectedEmailIds = ref([])
const userEmailIds = [
  // 'aladin.admin.test1@luminescent.digital',
  'aladin.test1@luminescent.digital',
  'aladin.test2@luminescent.digital',
  'aladin.test3@luminescent.digital',
  'aladin.test4@luminescent.digital'
]
const statusColor = ref('')
const statusMessage = ref('')

const clearStatus = () => {
  statusColor.value = ''
  statusMessage.value = ''
}

const sendInvitation = () => {
  invitationLoading.value = true

  selectedEmailIds.value.forEach((email) => {
    form.users.push({ email, role: selectedRole })
  })

  const profileStore = useProfileStore()
  profileStore
    .inviteUsers(form)
    .then(({ status }) => {
      if (status === 'success') {
        form.users = []
        statusColor.value = 'success'
        statusMessage.value = t('responseMessages.success.usersInvite')
      } else if (status === 409) {
        statusColor.value = 'error'
        statusMessage.value = t('responseMessages.error.userExist')
      } else {
        statusColor.value = 'error'
        statusMessage.value = t('responseMessages.error.unknown')
      }
    })
    .finally(() => {
      invitationLoading.value = false
    })
}
</script>
