import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout({children}) {

    return (
        <>
            <Sidebar />
            <div className='flex flex-col'>
                <Header />
                <div className='md:pl-64 flex'>Hello</div>
            </div>
            <div>{children}</div>
        </>
    )
}