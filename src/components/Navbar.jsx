import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { ShopContext } from '../context/ShopContext';


const Navbar = () => {
    const [visible , setVisible] = useState(false)
    const { t } = useTranslation();

    const {setShowSearch} = useContext(ShopContext)

    return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <Link to={'/'}>
        <img src={assets.logo} className='w-36' alt="" />

        </Link>
        
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

        <NavLink to='/' className='flex flex-col items-center gap-1'>
        <p> {t('Home')}</p>
        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p> {t('Collection')}</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p> {t('About')}</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p> {t('Contact')}</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>

        </ul>

        <div className='flex items-center gap-6'>
            <img onClick={()=>setShowSearch(true )} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
            <div className='group relative'>
            {/* <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" /> */}
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                    <p className='cursor-pointer hover:text-black'>{t('my_profile')}</p>
                    <p className='cursor-pointer hover:text-black'>{t('orders')}</p>
                    <p className='cursor-pointer hover:text-black'>{t('logOut')}</p>
                </div>
            </div>
            </div>
            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
        </div>

        {/* Menu for small Screen */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600 '>
                    <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img className='h-4 rounded-180' src={assets.dropdown_icon} alt="" />
                            <p>{t('Back')}</p>
                    </div>
                        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>{t('Home')}</NavLink>
                        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>{t('Collection')}</NavLink>
                        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>{t('Contact')}</NavLink>
                        <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>{t('About')}</NavLink>
                </div>
        </div>
    </div>
  )
}

export default Navbar