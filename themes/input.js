import { TInput } from 'vue-tailwind/dist/components'

export default {
  component: TInput,
  props: {
    fixedClasses:
      'block px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
    classes:
      'w-full text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500',
    variants: {
      danger: 'w-full border-red-500 text-red-900',
      code: 'text-center w-10 text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500',
      success:
        'w-full border-green-300 bg-green-50 placeholder-gray-400 text-green-900',
    },
  },
}
