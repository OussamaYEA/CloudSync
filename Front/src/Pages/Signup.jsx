import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Signup() {

  
  const [username, setUsername] = useState("username")
  const [email, setEmail] = useState("email@email.com")
  const [password, setPassword] = useState("password")
  const [confirmPassword, setConfirmPassword] = useState("password")
  const [error, setError] = useState("")

  const handleSignup = async (e) => {
    
    e.preventDefault();
    await axios({
      url : import.meta.env.VITE_API_REGISTER,
      method : "POST",
      data : {username, email, password}
    }).then((response) => {
      localStorage.setItem("token",JSON.stringify(response.data))
      window.location.reload();
    }).catch((error) => {
      setError(error?.response?.data?.message)
    })
  }

  return (
    <section class="bg-gray-1 dark:bg-dark">
      <div class="container mx-auto">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full px-4">
                <div
                  class="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px] dark:bg-dark-2"
                  >
                  <div class="mb-10 text-center md:mb-16">
                      <a
                        href="javascript:void(0)"
                        class="mx-auto inline-block max-w-[160px]"
                        >
                      <img className='w-32' src="https://global.synologydownload.com/download/Package/img/CloudSync/2.6.3-2531/thumb_256.png" alt="logo"/>
                      </a>
                  </div>
                  <form>
                      <div class="mb-6">
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" class="w-full px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke text-body-color  dark:border-dark-3 focus:border-primary focus-visible:shadow-none"/>
                      </div>
                      <div class="mb-6">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" class="w-full px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke text-body-color  dark:border-dark-3 focus:border-primary focus-visible:shadow-none"/>
                      </div>
                      <div class="mb-6">
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" class="w-full px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke text-body-color  dark:border-dark-3 focus:border-primary focus-visible:shadow-none"/>
                      </div>
                      <div class="mb-6">
                        <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" class="w-full px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke text-body-color  dark:border-dark-3 focus:border-primary focus-visible:shadow-none"/>
                      </div>

                      <div class="mb-10">
                        <input onClick={handleSignup} type="submit" value="Sign Up" class="w-full px-5 py-3 text-base font-medium  transition border rounded-md cursor-pointer border-primary bg-primary bg-blue-600 hover:bg-blue-700" />
                      </div>
                      
                  </form>

                  <p class="text-base text-body-color dark:text-dark-6">
                      <span class="pr-0.5">Not a member yet?</span>
                      <Link to={'/login'} class="text-primary hover:underline text-blue-600">Sign In</Link>
                  </p>
                  <div>
                      <span class="absolute top-1 right-1">
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <circle
                              cx="1.39737"
                              cy="38.6026"
                              r="1.39737"
                              transform="rotate(-90 1.39737 38.6026)"
                              fill="#3056D3"
                              />
                            <circle
                              cx="1.39737"
                              cy="1.99122"
                              r="1.39737"
                              transform="rotate(-90 1.39737 1.99122)"
                              fill="#3056D3"
                              />
                            <circle
                              cx="13.6943"
                              cy="38.6026"
                              r="1.39737"
                              transform="rotate(-90 13.6943 38.6026)"
                              fill="#3056D3"
                              />
                            <circle
                              cx="13.6943"
                              cy="1.99122"
                              r="1.39737"
                              transform="rotate(-90 13.6943 1.99122)"
                              fill="#3056D3"
                              />
                            <circle
                              cx="25.9911"
                              cy="38.6026"
                              r="1.39737"
                              transform="rotate(-90 25.9911 38.6026)"
                              fill="#3056D3"
                              />
                            <circle
                              cx="25.9911"
                              cy="1.99122"
                              r="1.39737"
                              transform="rotate(-90 25.9911 1.99122)"
                              fill="#3056D3"
                              />
                            <circle
                              cx="38.288"
                              cy="38.6026"
                              r="1.39737"
                              transform="rotate(-90 38.288 38.6026)"
                              fill="#3056D3"
                              />
                            <circle
                              cx="38.288"
                              cy="1.99122"
                              r="1.39737"
                              transform="rotate(-90 38.288 1.99122)"
                              fill="#3056D3"
                              />
                            <circle
                              cx="1.39737"
                              cy="26.3057"
                              r="1.39737"
                              transform="rotate(-90 1.39737 26.3057)"
                              fill="#3056D3"
                              />
                            <circle
                              cx="13.6943"
                              cy="26.3057"
                              r="1.39737"
                              transform="rotate(-90 13.6943 26.3057)"
                              fill="#3056D3"
                              />
                            <circle
                              cx="25.9911"
                              cy="26.3057"
                              r="1.39737"
                              transform="rotate(-90 25.9911 26.3057)"
                              fill="#3056D3"
                              />
                            <circle
                              cx="38.288"
                              cy="26.3057"
                              r="1.39737"
                              transform="rotate(-90 38.288 26.3057)"
                              fill="#3056D3"
                              />
                            <circle
                              cx="1.39737"
                              cy="14.0086"
                              r="1.39737"
                              transform="rotate(-90 1.39737 14.0086)"
                              fill="#3056D3"
                              />
                            <circle
                              cx="13.6943"
                              cy="14.0086"
                              r="1.39737"
                              transform="rotate(-90 13.6943 14.0086)"
                              fill="#3056D3"
                              />
                            <circle
                              cx="25.9911"
                              cy="14.0086"
                              r="1.39737"
                              transform="rotate(-90 25.9911 14.0086)"
                              fill="#3056D3"
                              />
                            <circle
                              cx="38.288"
                              cy="14.0086"
                              r="1.39737"
                              transform="rotate(-90 38.288 14.0086)"
                              fill="#3056D3"
                              />
                        </svg>
                      </span>
                      <span class="absolute left-1 bottom-1">
                        <svg
                            width="29"
                            height="40"
                            viewBox="0 0 29 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <circle
                              cx="2.288"
                              cy="25.9912"
                              r="1.39737"
                              transform="rotate(-90 2.288 25.9912)"
                              fill="#3056D3"
                              />
                            <circle
                              cx="14.5849"
                              cy="25.9911"
                              r="1.39737"
                              transform="rotate(-90 14.5849 25.9911)"
                              fill="#3056D3"
                              />
                            <circle
                              cx="26.7216"
                              cy="25.9911"
                              r="1.39737"
                              transform="rotate(-90 26.7216 25.9911)"
                              fill="#3056D3"
                              />
                            <circle
                              cx="2.288"
                              cy="13.6944"
                              r="1.39737"
                              transform="rotate(-90 2.288 13.6944)"
                              fill="#3056D3"
                              />
                            <circle
                              cx="14.5849"
                              cy="13.6943"
                              r="1.39737"
                              transform="rotate(-90 14.5849 13.6943)"
                              fill="#3056D3"
                              />
                            <circle
                              cx="26.7216"
                              cy="13.6943"
                              r="1.39737"
                              transform="rotate(-90 26.7216 13.6943)"
                              fill="#3056D3"
                              />
                            <circle
                              cx="2.288"
                              cy="38.0087"
                              r="1.39737"
                              transform="rotate(-90 2.288 38.0087)"
                              fill="#3056D3"
                              />
                            <circle
                              cx="2.288"
                              cy="1.39739"
                              r="1.39737"
                              transform="rotate(-90 2.288 1.39739)"
                              fill="#3056D3"
                              />
                            <circle
                              cx="14.5849"
                              cy="38.0089"
                              r="1.39737"
                              transform="rotate(-90 14.5849 38.0089)"
                              fill="#3056D3"
                              />
                            <circle
                              cx="26.7216"
                              cy="38.0089"
                              r="1.39737"
                              transform="rotate(-90 26.7216 38.0089)"
                              fill="#3056D3"
                              />
                            <circle
                              cx="14.5849"
                              cy="1.39761"
                              r="1.39737"
                              transform="rotate(-90 14.5849 1.39761)"
                              fill="#3056D3"
                              />
                            <circle
                              cx="26.7216"
                              cy="1.39761"
                              r="1.39737"
                              transform="rotate(-90 26.7216 1.39761)"
                              fill="#3056D3"
                              />
                        </svg>
                      </span>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </section>
  )
}
