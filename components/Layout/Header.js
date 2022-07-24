import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {
    BellIcon,
    MenuAlt2Icon,
    UserCircleIcon,
    PlayIcon,
    UserGroupIcon,
    LogoutIcon,
    ChevronRightIcon,
    DocumentAddIcon
} from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'

const userNavigation = [
    { name: 'Your Channel', href: '#', icon: UserCircleIcon},
    { name: 'Youtube Studio', href: '#', icon: PlayIcon },
    { name: 'Switch Account', href: '#', icon: UserGroupIcon },
    { name: 'Sign Out', href: '#', icon: LogoutIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [inputFocus, setInputFocus] = useState(false)

    return (
        <div className="">
            <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow-sm">
                <button
                    type="button"
                    className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                    onClick={() => setSidebarOpen(true)}
                >
                    <span className="sr-only">Open sidebar</span>
                    <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className="w-full flex-1 px-4 flex justify-between">
                    <div className="w-full flex-1 flex justify-center">
                        <form className="w-[100%] xl:w-[40%] flex md:mr-0 m-3 rounded-sm" action="#" method="GET">
                            <label htmlFor="search-field" className="sr-only">
                                Search
                            </label>
                            <div className={"border shadow-sm border-gray-300 relative w-[80%] text-gray-400 focus-within:text-gray-600"}>
                                <div className="absolute pl-3 inset-y-0 left-0 flex items-center pointer-events-none">
                                    <SearchIcon className="h-5 w-5" aria-hidden="true" />
                                </div>
                                <input
                                    id="search-field"
                                    className={"focus:border rounded-sm focus:border-blue-700 block w-full h-full pl-10 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm"}
                                    placeholder="Search"
                                    type="search"
                                    name="search"
                                    onFocus={()=>setInputFocus(true)}
                                    onBlur={()=>setInputFocus(false)}
                                />
                            </div>
                            <div className="rounded-r-sm cursor-pointer border border-gray-300 bg-gray-50 hover:bg-gray-100 w-[25%] sm:w-[20%] md:w-[15%] lg:w-[10%] flex justify-center inset-y-0 left-0 shrink-0 items-center">
                                <SearchIcon className=" h-5 font-thin w-8 xl:w-5" aria-hidden="true" />
                            </div>
                        </form>
                    </div>
                    <div className="ml-4 flex items-center md:ml-6">
                        <button
                            type="button"
                            className="mr-4 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="sr-only">Add Video</span>
                            <DocumentAddIcon className="h-6 w-6 text-black" aria-hidden="true" />
                        </button>
                        <button
                            type="button"
                            className="mr-4 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6 text-black" aria-hidden="true" />
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="ml-3 relative">
                            <div>
                                <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className='flex items-center gap-4 px-3 py-4 border-b border-gray-300'>
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                        <div className='flex flex-col'>
                                            <span>Your Name</span>
                                            <a className='text-blue-600'>Manage your Google Account</a>
                                        </div>
                                    </div>
                                    {userNavigation.map((item) => (
                                        <Menu.Item key={item.name}>
                                            {({ active }) => (
                                                <a
                                                    href={item.href}
                                                    className={classNames(
                                                        active ? 'bg-gray-100' : '',
                                                        'group flex gap-1 items-center pl-6 pr-2 py-2 text-sm text-gray-700'
                                                    )}
                                                >
                                                    <item.icon className="mr-3 flex-shrink-0 h-6 w-6 text-black" aria-hidden="true" />
                                                    {item.name}
                                                    {item.name === 'Switch Account' && <ChevronRightIcon className="ml-6 font-thin flex-shrink-0 h-6 w-6 text-gray-800" aria-hidden="true" />}
                                                </a>
                                            )}
                                        </Menu.Item>
                                    ))}
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header