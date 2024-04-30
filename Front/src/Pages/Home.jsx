import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
        <section class="relative pt-24 lg:pt-0 bg-white overflow-hidden">
            <img class="absolute left-0 top-0" src="https://shuffle.dev/flaro-assets/images/applications/gradient4.svg" alt="" />
            <div class="relative z-10 container px-4 mx-auto">
                <div class="flex flex-wrap lg:items-center -m-8">
                <div class="w-full md:w-1/2 p-8">
                    <div class="md:max-w-2xl">
                    <h2 class="mb-8 text-6xl md:text-6xl xl:text-6xl font-bold font-heading tracking-px-n leading-none">Share your work in seconds. Visually.</h2>
                    <p class="mb-9 text-lg text-gray-600 font-medium leading-normal md:max-w-md">Share your work and ideas through instantly shareable links. Jumpshare combines file sharing, screenshot capture, and video recording - all in one platform.</p>
                    <div class="md:inline-block">
                        
                            <Link to={'/register'} class="inline-flex flex-wrap items-center justify-center py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">
                                <svg class="mr-3" width="14" height="14" viewbox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 7.66667L7 9.66667M7 9.66667L5 7.66667M7 9.66667L7 4.33333M7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7C13 10.3137 10.3137 13 7 13Z" stroke="#F9FAFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <span>Start Sharing - It's Free!</span>
                            </Link>
                        
                    </div>
                    </div>
                </div>
                <div class="w-full md:w-1/2 p-8 self-end">
                    <img class="mx-auto transform hover:scale-105 transition ease-in-out duration-1000" src="https://static.jumpshare.com/res/images/homepage_illustration.png" alt="" />
                </div>
                </div>
            </div>
        </section>
        

        <section class="relative pt-28 pb-36 bg-white overflow-hidden">
            <div class="relative z-10 container px-4 mx-auto">
            <h2 class="mb-6 text-4xl md:text-6xl xl:text-10xl font-bold font-heading tracking-px-n leading-none md:max-w-xl mx-auto" data-config-id="auto-txt-1-2">Select, Start, Grow</h2>
            <p class="mb-20 text-lg text-gray-900 text-center font-medium leading-normal md:max-w-lg mx-auto" data-config-id="auto-txt-2-2">Choose the plan that’s right for you.</p>
            <div class="md:max-w-4xl mx-auto">
                <div class="flex flex-wrap -m-5">
                    <div class="w-full md:w-1/3 p-5">
                        <div class="bg-white bg-opacity-90 border border-blueGray-100 rounded-4xl shadow-9xl" >
                            <div class="border-b border-blueGray-100">
                                <div class="py-7 px-9">
                                <h3 class="mb-3 text-xl text-gray-900 font-bold leading-snug" data-config-id="auto-txt-3-2">Standard</h3>
                                <p class="text-gray-500 font-medium leading-relaxed" data-config-id="auto-txt-4-2">For getting started.</p>
                                </div>
                            </div>
                            <div class="pt-8 pb-9 px-9">
                                <p class="mb-6 text-gray-600 font-medium leading-relaxed" data-config-id="auto-txt-5-2">Features included:</p>
                                <ul class="mb-11">
                                <li class="mb-4 flex items-center">
                                    <svg class="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-1-2">
                                    <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                    <p class="font-semibold leading-normal" data-config-id="auto-txt-6-2"> 2 GB of space</p>
                                </li>
                                <li class="mb-4 flex items-center">
                                    <svg class="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-2-2">
                                    <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                    <p class="font-semibold leading-normal" data-config-id="auto-txt-7-2"> 250 MB upload file size limit</p>
                                </li>
                                <li class="mb-4 flex items-center">
                                    <svg class="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-3-2">
                                    <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                    <p class="font-semibold leading-normal" data-config-id="auto-txt-8-2">  Secure Sharing (SSL)</p>
                                </li>
                                <li class="mb-4 flex items-center">
                                    <svg class="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-4-2">
                                    <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                    <p class="font-semibold leading-normal" data-config-id="auto-txt-9-2">  OAuth via social logins</p>
                                </li>
                                <li class="flex items-center">
                                    <svg class="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-5-2">
                                    <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                    <p class="font-semibold leading-normal" data-config-id="auto-txt-10-2">Support</p>
                                </li>
                                </ul>
                                <p class="mb-6 text-xl text-gray-500 font-semibold leading-normal">
                                <span data-config-id="auto-txt-11-2">Starting from</span>
                                <span class="text-gray-900" data-config-id="auto-txt-12-2">$0/mo</span>
                                </p>
                                <div class="md:inline-block">
                                <button class="py-4 px-10 w-full text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button" data-config-id="auto-txt-13-2">Sign Up for Free</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 p-5">
                        <div class="bg-white bg-opacity-90 border border-blueGray-100 rounded-4xl shadow-9xl" >
                            <div class="border-b border-blueGray-100">
                                <div class="py-7 px-9">
                                <h3 class="mb-3 text-xl text-gray-900 font-bold leading-snug" data-config-id="auto-txt-3-2">Plus</h3>
                                <p class="text-gray-500 font-medium leading-relaxed" data-config-id="auto-txt-4-2">For individuals and small teams.</p>
                                </div>
                            </div>
                            <div class="pt-8 pb-9 px-9">
                                <p class="mb-6 text-gray-600 font-medium leading-relaxed" data-config-id="auto-txt-5-2">Features included:</p>
                                <ul class="mb-11">
                                <li class="mb-4 flex items-center">
                                    <svg class="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-1-2">
                                    <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                    <p class="font-semibold leading-normal" data-config-id="auto-txt-6-2"> 1 TB (1,000 GB) of space</p>
                                </li>
                                <li class="mb-4 flex items-center">
                                    <svg class="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-2-2">
                                    <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                    <p class="font-semibold leading-normal" data-config-id="auto-txt-7-2"> 20 GB upload file size limit</p>
                                </li>
                                <li class="mb-4 flex items-center">
                                    <svg class="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-3-2">
                                    <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                    <p class="font-semibold leading-normal" data-config-id="auto-txt-8-2"> Advanced sharing options</p>
                                </li>
                                <li class="mb-4 flex items-center">
                                    <svg class="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-4-2">
                                    <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                    <p class="font-semibold leading-normal" data-config-id="auto-txt-9-2">Individual Email Account</p>
                                </li>
                                <li class="flex items-center">
                                    <svg class="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-5-2">
                                    <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                    <p class="font-semibold leading-normal" data-config-id="auto-txt-10-2">Premium Support</p>
                                </li>
                                </ul>
                                <p class="mb-6 text-xl text-gray-500 font-semibold leading-normal">
                                <span data-config-id="auto-txt-11-2">Starting from</span>
                                <span class="text-gray-900" data-config-id="auto-txt-12-2">$49/mo</span>
                                </p>
                                <div class="md:inline-block">
                                <button class="py-4 px-10 w-full text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button" data-config-id="auto-txt-13-2">Start 14 days free trial</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 p-5">
                        <div class="bg-white bg-opacity-90 border border-blueGray-100 rounded-4xl shadow-9xl">
                        <div class="border-b border-blueGray-100">
                            <div class="py-7 px-9">
                            <h3 class="mb-3 text-xl text-gray-900 font-bold leading-snug" data-config-id="auto-txt-14-2">Enterprise</h3>
                            <p class="text-gray-500 font-medium leading-relaxed" data-config-id="auto-txt-15-2">For advanced teams & security.</p>
                            </div>
                        </div>
                        <div class="pt-8 pb-9 px-9">
                            <p class="mb-6 text-gray-600 font-medium leading-relaxed" data-config-id="auto-txt-16-2">Features included:</p>
                            <ul class="mb-11">
                            <li class="mb-4 flex items-center">
                                <svg class="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-6-2">
                                <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <p class="font-semibold leading-normal" data-config-id="auto-txt-17-2"> As much space as you need</p>
                            </li>
                            <li class="mb-4 flex items-center">
                                <svg class="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-7-2">
                                <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <p class="font-semibold leading-normal" data-config-id="auto-txt-18-2"> Organization-wide policies</p>
                            </li>
                            <li class="mb-4 flex items-center">
                                <svg class="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-8-2">
                                <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <p class="font-semibold leading-normal" data-config-id="auto-txt-19-2"> Dedicated infrastructure</p>
                            </li>
                            <li class="mb-4 flex items-center">
                                <svg class="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-9-2">
                                <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <p class="font-semibold leading-normal" data-config-id="auto-txt-20-2"> Priority support</p>
                            </li>
                            <li class="flex items-center">
                                <svg class="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-10-2">
                                <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <p class="font-semibold leading-normal" data-config-id="auto-txt-21-2"> 99.99% guaranteed uptime</p>
                            </li>
                            </ul>
                            <p class="mb-6 text-xl text-gray-500 font-semibold leading-normal">

                            </p>
                            <div class="md:inline-block">
                            <button class="py-4 px-10 w-full text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button" data-config-id="auto-txt-24-2">Contact Us</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        <div class="absolute bottom-0 left-0 w-full py-64 bg-indigo-600"></div>
      </section>

        <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" class="hover:underline">Oussama™</a>. All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
            </div>
        </footer>
        
    </>
  )
}
