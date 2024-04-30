import React, { useState } from 'react'

export default function Item() {

    const [openMenu, setOpenMenu] = useState(false)

    const handleDownload = async () => {
        console.log(import.meta.env.VITE_API_LOGIN)
    }

    const handleDelete = async () => {
        await axios({
            url : "",
            method: 'delete',
            data : formData
        })
    }

  return (
    <div class="w-full max-w-56 max-h-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-8 mr-2">

        <div class="flex justify-between px-4 pt-4">

            <button onClick={handleDownload} id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                <span class="sr-only">Open dropdown</span>
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/>
                </svg>

            </button>

            <button onClick={() => setOpenMenu(!openMenu)} id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                <span class="sr-only">Open dropdown</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                </svg>
            </button>

            <div id="dropdown" class={`z-10 fixed text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${!openMenu && "hidden"}`}>
                <ul class="py-2" aria-labelledby="dropdownButton">
                <li className='flex flex-wrap items-center justify-between'>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                    <a onClick={() => setOpenMenu(!openMenu)} href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">x</a>
                </li>
                
                <li>
                    <button onClick={handleDelete} class="w-full block px-4 py-2 text-sm text-red-500 hover:bg-red-100 dark:hover:bg-red-500 dark:text-red-500 dark:hover:text-white">Delete</button>
                </li>
                </ul>
            </div>
        </div>

        <div class="flex flex-col items-center pb-10">
            <img class="w-24 h-24 mb-3 rounded-3xl shadow-lg" src="https://global.synologydownload.com/download/Package/img/CloudSync/2.6.3-2531/thumb_256.png" alt="Bonnie image"/>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white line-clamp-1">Bonnie Green </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">Visual Designer</span>
        </div>
    </div>
  )
}
