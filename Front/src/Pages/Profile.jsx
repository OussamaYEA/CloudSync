import React, { useState, useEffect  } from 'react'
import axios from 'axios'

export default function Profile() {
    
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    
    useEffect(() => {
        const fetchUser = async () => {
            console.log(import.meta.env.VITE_API_USER+JSON.parse(localStorage.getItem('token')).id)
            await axios({
              url : import.meta.env.VITE_API_USER+JSON.parse(localStorage.getItem('token')).id,
              method : "GET",
              }).then((response) => {
              setUsername(response.data.username)
              setEmail(response.data.email)
            })
        }
        fetchUser()
    }, []);
    
    const updateUser = async (e) => {
        e.preventDefault();
        await axios({
          url : import.meta.env.VITE_API_USER_UPDATE,
          method : "POST",
          data : {id : JSON.parse(localStorage.getItem('token')).id, username, email}
        }).then((response) => {
          window.location.reload();
        })
    }
    
  return (
    <div class="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg mx-auto p-4">
        <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
                User database
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">
                Details and informations about user.
            </p>
        </div>
        <div class="border-t border-gray-200">
            <dl>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Username
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <input value={username} onChange={(e) => setUsername(e.target.value)} class="w-full px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke text-body-color  dark:border-dark-3 focus:border-primary focus-visible:shadow-none" />
                    </dd>
                </div>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                        Email
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} class="w-full px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke text-body-color  dark:border-dark-3 focus:border-primary focus-visible:shadow-none" />
                    </dd>
                </div>
                <div class="mb-10">
                        <input onClick={updateUser} type="submit" value="Edit" class="w-full px-5 py-3 text-base font-medium  transition border rounded-md cursor-pointer border-primary bg-primary bg-blue-600 hover:bg-blue-700" />
                </div>
            </dl>
        </div>
    </div>
  )
}
