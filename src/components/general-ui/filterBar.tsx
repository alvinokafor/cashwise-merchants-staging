import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { IoChevronDown } from "react-icons/io5";

const HeaderFilter = ({title, color}) => {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <div className="flex items-center ml-5 mb-4 justify-between">
    {/* Empty badge with blue color bg-orange-400  */}
    <div className={`${color} rounded-full h-6 w-3 mr-2`}></div>


    {/* Title "Overview" */}
    <div className="text-lg font-semibold mr-auto">{title}</div>

    {/* Filter select */}
    <Menu as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        All Time
        <IoChevronDown className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
      </Menu.Button>
    </div>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
              >
                Edit
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
              >
                Duplicate
              </a>
            )}
          </Menu.Item>
          {/* Add more items as needed */}
        </div>
      </Menu.Items>
    </Transition>
  </Menu>


  
  </div>

    
  );
};

export default HeaderFilter;
