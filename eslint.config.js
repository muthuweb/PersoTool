import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  { files: ['**/*.{js,vue}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...pluginVue.configs[('flat/essential', 'flat/recommended', 'flat/strongly-recommended')],
  {
    rules: {
      'no-restricted-properties': 'off',
      'template-curly-spacing': 'off',
      'vue/require-default-prop': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'vue/valid-v-slot': 'off',
      semi: ['error', 'never'], // This will enforce no semicolons
      'no-extra-semi': 'error', // This will report unnecessary semicolons
      'vue/html-indent': ['error', 2], // Ensure correct indentation in <template>
      'vue/singleline-html-element-content-newline': 'off', // Allow single-line elements without new lines
      'vue/multiline-html-element-content-newline': 'error', // Ensure multi-line elements have new lines
      'vue/block-order': [
        'error',
        {
          order: ['template', 'script', 'style'] // Enforce correct order of blocks
        }
      ],
      'vue/padding-line-between-blocks': ['error', 'always'],
      'vue/define-macros-order': [
        'error',
        {
          order: ['defineProps', 'defineEmits'],
          defineExposeLast: false
        }
      ],
      camelcase: [
        2,
        {
          properties: 'never',
          ignoreDestructuring: true,
          ignoreImports: true
        }
      ],
      indent: [
        'error',
        2,
        {
          ignoredNodes: ['TemplateLiteral']
        }
      ]
    }
  },
  eslintConfigPrettier
]
