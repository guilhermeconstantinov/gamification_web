import { TTextarea } from 'vue-tailwind/dist/components'

export default {
  component: TTextarea,
  props: {
    fixedClasses:
      'block w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
    classes:
      'text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500 ',
    variants: {},
  },
}
