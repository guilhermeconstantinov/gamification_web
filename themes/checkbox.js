import { TCheckbox } from 'vue-tailwind/dist/components'

export default {
  component: TCheckbox,
  props: {
    fixedClasses:
      'transition duration-100 ease-in-out rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed',
    classes: {
      label: 'mx-2 text-gray-700',
      input:
        'text-blue-500 transition duration-100 ease-in-out border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed',
      inputWrapper: 'inline-flex',
      wrapper: 'flex items-center',
      // labelChecked: '',
      // inputWrapperChecked: '',
      // wrapperChecked: '',
    },
  },
}
