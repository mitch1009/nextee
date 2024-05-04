"use client"
import React from 'react'
import Image from 'next/image'
import { classNames } from "../utils"
import { Fragment, useState } from 'react'
import Link from 'next/link'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    BellIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { useParams, usePathname } from 'next/navigation'
import { MAIN_NAVIGATION_DATA } from './MenuData'
import { SubmenuSwitch } from './SubmenuSitch'
import { INavigationLinks } from './NavigationDto'

const userNavigation = [
    { name: 'Your profile', href: '/dashboard/profile' },
    { name: 'Sign out', href: '#' },
]


export const NavigationLayout = ({ children, session }: any) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const { user } = session
    const [sidebar, setSideBar] = useState<INavigationLinks[] | null>(null)
    // get the current menu based on the user role
    const currentMenu = MAIN_NAVIGATION_DATA[user.role.toLowerCase() as keyof typeof MAIN_NAVIGATION_DATA] as any
    const { option } = useParams() as any
    const pathname = usePathname();
    const isDashboard = pathname === '/dashboard' || pathname === '/dashboard/onboarding' || pathname === '/dashboard/onboarding/2'
    const splitPath = pathname?.split('/')
    const altPaths = splitPath[splitPath.length - (option ? 2 : 1)] // dashboard/profile/settings/config
    const submenu = (SubmenuSwitch as any)()[altPaths] // "profile"|"settings"|"config"
    const renerSidebar = (data:INavigationLinks[]|null) => {
        setSideBar(data)
    }
    return (
        <>
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-900/80" />
                        </Transition.Child>

                        <div className="fixed inset-0 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                            <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                                                <span className="sr-only">Close sidebar</span>
                                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>

                                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                                        <div className="flex h-16 shrink-0 items-center">
                                            <Image width={32} height={32}
                                                className="h-8 w-auto"
                                                src="/logo.svg"
                                                alt="Your Company"
                                            />
                                        </div>
                                        <nav className="flex flex-1 flex-col">
                                            <ul role="list" className="-mx-2 flex-1 space-y-1">
                                                {Object.entries(currentMenu).map(([key, item]:any) => (
                                                    <li key={key} onClick={() => renerSidebar(item?.submenu??null)}>
                                                        <Link
                                                            href={item.href}
                                                            className={classNames(
                                                                item.title === pathname
                                                                    ? 'bg-gray-800 text-white'
                                                                    : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                            )}
                                                        >
                                                            <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                                            <span className="capitalize˝">
                                                            {item.title}
                                                            </span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-20 lg:overflow-y-auto lg:bg-gray-900 lg:pb-4">
                    <div className="flex h-16 shrink-0 items-center justify-center">
                        <Image width={32} height={32}
                            className="h-8 w-auto"
                            src="/logo.svg"
                            alt="WITS"
                        />
                    </div>
                    <nav className="mt-8">
                        <ul role="list" className="flex flex-col items-center space-y-1">
                            {Object.entries(currentMenu).map(([key, item]:any) => (
                                <li key={key} onClick={() => renerSidebar(item?.submenu??null)}>
                                    <Link
                                        href={item.href}
                                        className={classNames(
                                            pathname.endsWith(item.href) ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                            'group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold'
                                        )}
                                    >
                                        <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                        <span className="sr-only">{item.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                {/* Mobile Version */}
                <div className="lg:pl-16">
                    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                        <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
                            <span className="sr-only">Open sidebar</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        {/* Separator */}
                        <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

                        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                            <form className="relative flex flex-1" action="#" method="GET">
                                <label htmlFor="search-field" className="sr-only">
                                    Search
                                </label>
                                <MagnifyingGlassIcon
                                    className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                                <input
                                    id="search-field"
                                    className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                                    placeholder="Search..."
                                    type="search"
                                    name="search"
                                />
                            </form>
                            <div className="flex items-center gap-x-4 lg:gap-x-6">
                                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button>

                                {/* Separator */}
                                <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative">
                                    <Menu.Button className="-m-1.5 flex items-center p-1.5">
                                        <span className="sr-only">Open user menu</span>
                                        <Image height={32} width={32}
                                            className="h-8 w-8 rounded-full bg-gray-50"
                                            src={session?.user?.image}
                                            alt=""
                                        />
                                        <span className="hidden lg:flex lg:items-center">
                                            <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                                                {session?.user.name ?? 'Sample User'}
                                            </span>
                                            <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </span>
                                    </Menu.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                            {userNavigation.map((item) => (
                                                <Menu.Item key={item.name}>
                                                    {({ active }) => (
                                                        item.name.startsWith('Sign out') ?
                                                            <span>SignOut</span>
                                                            :
                                                            <Link
                                                                href={item.href}
                                                                className={classNames(
                                                                    active ? 'bg-gray-50' : '',
                                                                    'block px-3 py-1 text-sm leading-6 text-gray-900'
                                                                )}
                                                            >
                                                                {item.name}
                                                            </Link>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    <main className={classNames(!isDashboard ? 'xl:pl-64' : '')}>
                        <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">{children}</div>
                    </main>
                </div>
                {/* Side navigation */}
                {sidebar && <aside className="fixed bottom-0 left-20 top-16 hidden w-64 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
                    {submenu}
                </aside>
                }
            </div>
        </>
    )
}