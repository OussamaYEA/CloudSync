import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from './Modal.jsx';
import { saveAs } from 'file-saver';
import toast, { Toaster } from 'react-hot-toast';


export default function Item({file}) {

    const [openMenu, setOpenMenu] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    
    
    const [expiresIn, setExpiresIn] = useState(0);
    const [expiresLink, setExpiresLink] = useState(null);
    
    
    const [openEditModal, setOpenEditModal] = useState(false)
    const [newFileName, setNewFileName] = useState('')
    
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    
    const handleDownload = async () => {
        const response = await axios({
          url : import.meta.env.VITE_API_FILE_DOWNLOAD,
          method : "POST",
          data : {file : file.Key},
          responseType: 'blob' // Ensure responseType is set to 'blob'
        })
        saveAs(response.data, file.Key);
    }

    const handleDelete = async () => {
        const response = await axios({
            url : import.meta.env.VITE_API_FILE_DELETE,
            method: 'POST',
            data : {filekey : file.Key}
        })
        if (response.status == 200){
            toast.success('Successfully Deleted!')
            window.location.reload();}
    }
    
    
    const handleGenerateLink = async (e) => {
        e.preventDefault();
        const response = await axios({
            url : import.meta.env.VITE_API_FILE_GENERATE,
            method : "POST",
            data: {filekey : file.Key, expires : expiresIn}
        })
        setExpiresLink(response.data)
    }
    
    const handleEditFile = async (e) => {
        e.preventDefault();
        const response = await axios({
            url : import.meta.env.VITE_API_FILE_EDIT,
            method : "POST",
            data: {filekey : file.Key, newfilename : newFileName}
        })
        if (response.status == 200) {
            toast.success('Successfully Updated!')
            window.location.reload();}
    }
    
    const fixName = (name) => {
        return name.substring(name.lastIndexOf("/") + 1);
    }
    
    useEffect(() => {
        setNewFileName(fixName(file.Key))
    }, []);

  return (
    <div class="w-full max-w-56 max-h-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-8 mr-2">
        <Toaster />
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
                    <a onClick={() => setOpenEditModal(!openEditModal)} href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                    <a onClick={() => setOpenMenu(!openMenu)} href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">x</a>
                </li>
                
                <li>
                    <button onClick={() => setOpenModal(!openModal)} class="w-full block px-4 py-2 text-sm text-white-500 hover:bg-gray-500 dark:hover:bg-gray-500 dark:text-white-500 dark:hover:text-white">Generate Link</button>
                    <button onClick={() => setOpenDeleteModal(!openDeleteModal)} class="w-full block px-4 py-2 text-sm text-red-500 hover:bg-red-100 dark:hover:bg-red-500 dark:text-red-500 dark:hover:text-white">Delete</button>
                </li>
                </ul>
            </div>
        </div>

        <div class="flex flex-col items-center pb-10">
            <img class="w-24 h-24 mb-3 rounded-3xl shadow-lg" src="https://png.pngtree.com/png-vector/20190628/ourmid/pngtree-file-icon-for-your-project-png-image_1521170.jpg" alt="Bonnie image"/>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white line-clamp-1">{fixName(file.Key)} </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">{file.LastModified}</span>
        </div>
        
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
            
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Expires In (second) min:60
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <input value={expiresIn} onChange={(e) => setExpiresIn(e.target.value)} min='60' type="number" class="w-full px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke text-body-color  dark:border-dark-3 focus:border-primary focus-visible:shadow-none" />
                </dd>
                {
                    expiresLink != null &&
                    <>
                    <dt class="text-sm font-medium text-gray-500">
                    Link
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <input value={expiresLink} readonly="readonly" class="w-full px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke text-body-color  dark:border-dark-3 focus:border-primary focus-visible:shadow-none" />
                    </dd>
                    </>
                }
                
                
                {
                    expiresIn > 59 && 
                    <button onClick={handleGenerateLink} className="btn btn-light bg-green-300" >
                        Generate Link
                    </button>
                }
            </div>
            
            <button className="btn btn-light" onClick={() => setOpenModal(false)}>
              Cancel
            </button>
        </Modal>
        
        
        <Modal open={openEditModal} onClose={() => setOpenEditModal(false)}>
            
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    New File Name
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <input value={newFileName} onChange={(e) => setNewFileName(e.target.value)}  class="w-full px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke text-body-color  dark:border-dark-3 focus:border-primary focus-visible:shadow-none" />
                </dd>
                
                

                <button onClick={handleEditFile} className="btn btn-light bg-green-300" >
                    Edit
                </button>
                
            </div>
            
            <button className="btn btn-light" onClick={() => setOpenEditModal(false)}>
              Cancel
            </button>
        </Modal>
        
        <Modal open={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
            
            <div class="p-2 flex">
                <div class="w-1/2"></div>
                <div class="w-1/2 flex justify-end">
                    <button onClick={handleDelete} className="btn btn-light bg-red-300  p-2  rounded text-lg " >
                                Delete
                            </button>
                    <button className="btn btn-light  p-2 ml-6 rounded text-lg " onClick={() => setOpenDeleteModal(false)}>
                              Cancel
                            </button>
                </div>
            </div>

        </Modal>
        
    </div>
  )
}
