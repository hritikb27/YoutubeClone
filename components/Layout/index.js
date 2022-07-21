import Sidebar from './Sidebar'
import Header from './Header'
import CategoriesScrollableList from './CategoriesScrollableList'

export default function Layout({children}) {

    return (
        <>
            <Sidebar />
            <div className='md:pl-64 flex flex-col flex-1 flex flex-col'>
                <Header />
                <CategoriesScrollableList />
            </div>
            <div>{children}</div>
        </>
    )
}