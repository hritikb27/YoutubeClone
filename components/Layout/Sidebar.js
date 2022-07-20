import {
    CalendarIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
} from '@heroicons/react/outline'

const navigation = [
    { name: 'Home', href: '#', icon: HomeIcon, current: true },
    { name: 'Explore', href: '#', icon: UsersIcon, current: false },
    { name: 'Shorts', href: '#', icon: FolderIcon, current: false },
    { name: 'Subscriptions', href: '#', icon: CalendarIcon, current: false },
    // { name: 'Documents', href: '#', icon: InboxIcon, current: false },
    // { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Sidebar = () => {
    return (
        <div>
            {/* Sidebar */}
            <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                <div className="flex flex-col flex-grow bg-white overflow-y-auto">
                    <div className="flex justify-center top-0 items-center flex-shrink-0 px-4">
                        <img
                            className="h-16 w-auto"
                            src="static/images/youtube-logo.png"
                            alt="Workflow"
                        />
                    </div>
                    <div className="mt-5 flex-1 flex flex-col">
                        <nav className="flex-1 pr-2 pb-4 space-y-1">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-300 text-black font-semibold' : 'text-black hover:bg-gray-100',
                                        'group flex gap-3 items-center pl-6 pr-2 py-2 text-sm font-medium'
                                    )}
                                >
                                    <item.icon className="mr-3 flex-shrink-0 h-6 w-6 text-black" aria-hidden="true" />
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar