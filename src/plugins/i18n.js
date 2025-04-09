import { createI18n } from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

function getPreferredLanguage() {
  // const storedLanguage = localStorage.getItem('preferredLanguage')
  const availableLanguages = Object.keys(messages)
  const navigatorLang = navigator.language
  const langPart = navigatorLang.split('-')[0]

  // Check if stored language exists in available languages
  /* if (storedLanguage && availableLanguages.includes(storedLanguage)) {
    return storedLanguage
  } */

  // Try matching navigator language exactly or by partial match
  return availableLanguages.find(
    (lang) => lang === navigatorLang || lang === langPart || lang.startsWith(langPart)
  )
}

export const selectedLocale = getPreferredLanguage() || import.meta.env.VITE_I18N_LOCALE || 'en'

const i18n = createI18n({
  locale: selectedLocale,
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'en',
  messages
})

export default i18n
