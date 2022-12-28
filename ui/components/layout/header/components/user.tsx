import React from 'react';
import { Fragment } from 'react'
import { useUser } from '@authok/nextjs-authok/client';
import { useRouter } from 'next/router';
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function UserStatus() {
  const { user } = useUser();

  if (user) {
    return <Menu as="div" className="relative ml-3">
    <div>
      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        <span className="sr-only">打开用户菜单</span>
        <img
          className="h-8 w-8 rounded-full"
          src={user.picture}
          alt=""
        />
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
      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <Menu.Item>
          {({ active }) => (
            <a
              href="/profile-ssr"
              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
            >
              个人信息
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              href="#"
              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
            >
              设置
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              href="/api/auth/logout"
              data-testid="logout"
              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
            >
              退登
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Transition>
  </Menu>;
  }

  return (<>
    <a
      href="/api/auth/signIn"
      className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
    >
      注册
    </a>
    <a
      href="/api/auth/login"
      className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
    >
      登录
    </a>
  </>);
};