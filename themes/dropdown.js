import { TDropdown } from 'vue-tailwind/dist/components'

export default {
  component: TDropdown,
  props: {
    fixedClasses: {
      button:
        'flex items-center text-white block px-4 py-2 transition duration-100 ease-in-out border border-transparent rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
      wrapper: 'inline-flex flex-col',
      dropdownWrapper: 'relative z-10',
      dropdown: 'origin-top-left absolute left-0 w-56 rounded shadow mt-1',
      enterClass: 'opacity-0 scale-95',
      enterActiveClass: 'transition transform ease-out duration-100',
      enterToClass: 'opacity-100 scale-100',
      leaveClass: 'opacity-100 scale-100',
      leaveActiveClass: 'transition transform ease-in duration-75',
      leaveToClass: 'opacity-0 scale-95',
    },
    classes: {
      button: 'bg-blue-500 hover:bg-blue-600',
      dropdown: 'bg-white',
    },
    variants: {
      danger: {
        button: 'bg-red-500 hover:bg-red-600',
        dropdown: 'bg-red-50',
      },
    },
  },
}
