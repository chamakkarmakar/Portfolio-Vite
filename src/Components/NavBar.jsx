import React, { useEffect, useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    let [scroll, setScroll] = useState(false);
    const menuItems = [
        {
            menu: "Home",
            to: "/"
        },
        {
            menu: "About",
            to: "/"
        },
        {
            menu: "Projects",
            to: "/"
        },
        {
            menu: "Services",
            to: "/"
        },
        {
            menu: "Contact",
            to: "/"
        }
    ]

    const handleOnScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScroll(isScrolled);
        // console.log(scroll);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleOnScroll);

        // Remove scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleOnScroll);
        };

    }, [])
    return (

        <div className="sticky top-0 z-[10]">
            <nav className={`${scroll ? 'bg-sky-800' : 'md:bg-transparent bg-sky-800'} py-3 px-4`}>
                <div className="w-[95%] mx-auto flex items-center justify-between">
                    <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 md:w-auto w-full transition-all duration-200 ease-in-out hover:md:scale-125 hover:scale-110">
                        <h2 className='md:text-xl text-sm font-semibold'>Chamak Karmakar</h2>
                    </div>
                    <div className="md:w-[40%] w-full md:mx-10 mx-0 ">
                        <ul className={`w-full flex md:flex-row flex-col md:justify-around justify-center md:space-y-0 space-y-3 items-center md:shadow-none md:z-auto z-[-1] shadow-xl md:bg-transparent bg-sky-800 md:py-0 py-2 md:static duration-300 delay-150 transition-all ease-linear absolute left-0 right-0 
          ${open ? 'top-14' : '-top-80'}`}>
                            {
                                menuItems.map((item, index) =>
                                    <li key={index} className="group flex font-medium cursor-pointer flex-col">
                                        {item.menu}
                                        <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                                    </li>)
                            }
                        </ul>

                    </div>
                    <div className='md:hidden block mx-5'>
                        <button onClick={() => setOpen(!open)}>
                            {
                                !open ? <HiOutlineMenu className='w-6 h-6 text-white' /> : <HiOutlineX className='w-6 h-6 text-white' />
                            }
                        </button>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default NavBar
