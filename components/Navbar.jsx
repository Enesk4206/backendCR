import React from 'react'
import Link from 'next/link'
// import Link from '../app/listPage'
const Navbar = () => {
    return (
        <div className="max-w-6xl mx-auto ">
            <div className='flex flex-row items-center justify-between fixed left-0 top-0 right-0 gap-6 p-6 bg-slate-300'>

                <div>
                    <Link href='/page'>Anasayfa</Link>
                </div>
                <div className='p-2 flex flex-row gap-10 mr-5'>
                    <div>

                        <Link href='/'>Kullanıcı Ekle</Link>
                    </div>
                    <div>
                        <Link href='/listPage'>Kullanıcı Liste</Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar