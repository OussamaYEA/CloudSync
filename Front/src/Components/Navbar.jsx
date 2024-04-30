import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


export default function Navbar() {

    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/");
    }

  return (
    <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to={'/'} class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://global.synologydownload.com/download/Package/img/CloudSync/2.6.3-2531/thumb_256.png" class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CloudSync</span>
            </Link>
            <div class="flex md:order-2 space-x-3 md:space-x-3 rtl:space-x-reverse">
                {
                    (!localStorage.getItem("token")  || localStorage.getItem("token") == "") ?
                    <>
                        <Link to={'/register'} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</Link>
                        <Link to={'/login'} class="inline-flex items-center py-2 px-3 mr-3 text-xs text-indigo-500 font-medium bg-white hover:bg-indigo-50 rounded-lg" href="#">
                            <span>Login</span>
                        </Link>
                    </>
                    :
                    <>
                        <Link to={'/upload'} class="inline-flex items-center py-2 px-3 mr-3 text-xs text-indigo-500 font-medium bg-white hover:bg-indigo-50 rounded-lg" href="#">
                            <span class="inline-block mr-1">
                            <svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 9.33334C13.6 9.33334 13.3333 9.60001 13.3333 10V12.6667C13.3333 13.0667 13.0667 13.3333 12.6667 13.3333H3.33334C2.93334 13.3333 2.66668 13.0667 2.66668 12.6667V10C2.66668 9.60001 2.40001 9.33334 2.00001 9.33334C1.60001 9.33334 1.33334 9.60001 1.33334 10V12.6667C1.33334 13.8 2.20001 14.6667 3.33334 14.6667H12.6667C13.8 14.6667 14.6667 13.8 14.6667 12.6667V10C14.6667 9.60001 14.4 9.33334 14 9.33334ZM5.80001 5.13334L7.33334 3.60001V10C7.33334 10.4 7.60001 10.6667 8.00001 10.6667C8.40001 10.6667 8.66668 10.4 8.66668 10V3.60001L10.2 5.13334C10.4667 5.40001 10.8667 5.40001 11.1333 5.13334C11.4 4.86668 11.4 4.46668 11.1333 4.20001L8.46668 1.53334C8.20001 1.26668 7.80001 1.26668 7.53334 1.53334L4.86668 4.20001C4.60001 4.46668 4.60001 4.86668 4.86668 5.13334C5.13334 5.40001 5.53334 5.40001 5.80001 5.13334Z" fill="#8880EB"></path>
                            </svg>
                            </span>
                            <span>Upload</span>
                        </Link>
                        <Link to={'/profile'} type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                            <span class="absolute -inset-1.5"></span>
                            <span class="sr-only">Open user menu</span>
                            <img class="h-8 w-8 rounded-full" src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="" />
                        </Link>
                        <button onClick={logout} type="button" class="relative flex rounded-full bg-red-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                            <span class="absolute -inset-1.5"></span>
                            
                            <img class="h-8 w-8" src="https://cdn-icons-png.flaticon.com/512/1828/1828427.png" alt="" />
                        </button>
                    </>
                   

                }
                


                
                {/*  */}
            </div>
            
        </div>
    </nav>
  )
}
