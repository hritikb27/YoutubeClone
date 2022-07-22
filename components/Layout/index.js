import Sidebar from './Sidebar'
import Header from './Header'
import CategoriesScrollableList from './CategoriesScrollableList'

export default function Layout({children}) {

    return (
        <div className='w-full h-full'>
            <Sidebar />
            <div className='md:pl-64 flex flex-col flex-1'>
                <Header />
                <CategoriesScrollableList />
            </div>
            <div className='md:pl-64 w-[90%] mx-auto'>{children}</div>
        </div>
    )
}