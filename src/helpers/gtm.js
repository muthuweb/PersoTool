export const events = {
  login: 'login',
  registration: 'registration',
  createProject: 'project_create',
  addBooking: 'booking_add',
  messenger: 'use_messenger',
  navigate: 'navigate',
  search: 'search',
  filter: 'filter',
  taskManager: 'task_manager',
  bookingApproval: 'project_approval',
  timeRecording: 'time_recording',
  dashboard: 'dashboard',
  invite: 'invite_user'
}

export const actions = {
  start: 'start',
  open: 'open',
  next: 'next',
  previous: 'previous',
  finish: 'finish',
  submit: 'submit',
  save: 'save',
  click: 'click',
  view: 'view',
  delete: 'delete',
  enterDetails: 'enter details',
  requestApproval: 'request approval',
  clickTab: 'click tab',
  clickUser: 'click user',
  sendMessage: 'send message',
  invited: 'invitation sent',
  menu: 'menu',
  tab: 'tab',
  sidePanel: 'side panel',
  applyFilter: 'apply filter',
  approval: 'approval',
  addAbsence: 'add absence'
}

export const addEvent = (event, data = {}, action) => {
  const eventData = { ...data, event }
  if (action) {
    eventData.action = action
  }
  if (import.meta.env.VITE_API_URL !== 'production') {
    console.log('eventData', eventData)
  }
  window.dataLayer.push(eventData)
}

export const addRegistrationEvent = (data = {}, action) => {
  addEvent(events.registration, data, action)
}

export const addLoginEvent = (data = {}) => {
  addEvent(events.login, data)
}

export const addProjectEvent = (data = {}, action) => {
  addEvent(events.createProject, data, action)
}

export const addNavigationEvent = (action, target = null) => {
  const data = target ? { target } : {}
  addEvent(events.navigate, data, action)
}

export const addInviteEvent = (action, data = {}) => {
  addEvent(events.invite, data, action)
}

export const addSearchEvent = (search = '') => {
  addEvent(events.search, { search_term: search })
}

export const addFilterEvent = (page = '') => {
  const data = page ? { page } : {}
  addEvent(events.filter, data, actions.applyFilter)
}

export const addBookingEvent = (action, data = {}) => {
  addEvent(events.addBooking, data, action)
}

export const addBookingApprovalEvent = (action, data = {}) => {
  addEvent(events.bookingApproval, data, action)
}

export const addMessengerEvent = (action) => {
  addEvent(events.messenger, {}, action)
}

export const addTaskManagerEvent = (action, data = {}) => {
  addEvent(events.taskManager, data, action)
}

export const addTimeRecordingEvent = (action, data = {}) => {
  addEvent(events.timeRecording, data, action)
}

export default {}
