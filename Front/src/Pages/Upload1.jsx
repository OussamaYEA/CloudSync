import React, { useState, useEffect  } from 'react'
import axios from 'axios'
import Dropzone from '../Components/Dropzone'
import Modal from '../Components/Modal.jsx';
import Item from '../Components/Item'
import toast, { Toaster } from 'react-hot-toast';

export default function Upload1() {
  const [open, setOpen] = useState(false)
  const [files, setFiles] = useState([])
  
  
  const fetchFiles = () => {
    axios.get(import.meta.env.VITE_API_FILE_LIST+JSON.parse(localStorage.getItem('token')).username+"-"+JSON.parse(localStorage.getItem('token')).id).then((res) => {setFiles(res.data.Contents);console.log(res.data.Contents)})
  }
  
  useEffect(() => {
    fetchFiles()
    
  }, []);
  
  return (
    <div className="bg-gray-500 mt-[-31px] height-full">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div>
            <h1 className='text-white font-bold text-xl'>{JSON.parse(localStorage.getItem('token')).username} <span className='font-normal text-base'></span></h1>
        </div>
        <div >
            <button  onClick={() => setOpen(true)} class="inline-flex items-center py-2 px-3 mr-3 text-sm text-indigo-500 font-medium bg-white hover:bg-indigo-50 rounded-lg" href="#">
                <span class="inline-block mr-1">
                <svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 9.33334C13.6 9.33334 13.3333 9.60001 13.3333 10V12.6667C13.3333 13.0667 13.0667 13.3333 12.6667 13.3333H3.33334C2.93334 13.3333 2.66668 13.0667 2.66668 12.6667V10C2.66668 9.60001 2.40001 9.33334 2.00001 9.33334C1.60001 9.33334 1.33334 9.60001 1.33334 10V12.6667C1.33334 13.8 2.20001 14.6667 3.33334 14.6667H12.6667C13.8 14.6667 14.6667 13.8 14.6667 12.6667V10C14.6667 9.60001 14.4 9.33334 14 9.33334ZM5.80001 5.13334L7.33334 3.60001V10C7.33334 10.4 7.60001 10.6667 8.00001 10.6667C8.40001 10.6667 8.66668 10.4 8.66668 10V3.60001L10.2 5.13334C10.4667 5.40001 10.8667 5.40001 11.1333 5.13334C11.4 4.86668 11.4 4.46668 11.1333 4.20001L8.46668 1.53334C8.20001 1.26668 7.80001 1.26668 7.53334 1.53334L4.86668 4.20001C4.60001 4.46668 4.60001 4.86668 4.86668 5.13334C5.13334 5.40001 5.53334 5.40001 5.80001 5.13334Z" fill="#8880EB"></path>
                </svg>
                </span>
                <span>Upload</span>
            </button>
        </div>
      </div>
      
      <div class="py-8">
        <div class="max-w-screen-xl flex flex-wrap  mx-auto">
          {
            files.slice(1).map(file => (
              <Item file={file} />
            ))
          }
          
        </div>
      </div>
            
      <Modal open={open} onClose={() => setOpen(false)}>
        <Dropzone />
        <button className="btn btn-light" onClick={() => setOpen(false)}>
          Cancel
        </button>
      </Modal>
    </div>
  );
}