import React, { useEffect, useRef, useState } from 'react'
import Item from '../Components/Item'
import Banner from '../Components/Banner'

export default function Upload() {

    const [uploadModalOpen, setUploadModalOpen] = useState(false);
    const [folderModalOpen, setFolderModalOpen] = useState(false);


    const folderTrigger = useRef(null);
    const folderModal = useRef(null);
    const uploadTrigger = useRef(null);

    // Drag And Drop

    const [filesToUpload, setFilesToUpload] = useState([])

    const [dragging, setDragging] = useState(false);
    const dropContainer = useRef(null);
    const fileRef = useRef(null);

    function handleDrop(e, type) {
        if (type === "inputFile") {
            setFilesToUpload([...filesToUpload, e.target.files[0]])
          //files = [...e.target.files];
        } else {
            e.preventDefault();
            e.stopPropagation();
            setDragging(false);
            setFilesToUpload([...filesToUpload, e.dataTransfer.files[0]])
            //files = [...e.dataTransfer.files];
        }
      }

    useEffect(() => {
        function handleDragOver(e) {
          e.preventDefault();
          e.stopPropagation();
          setDragging(true);
        }
        function handleDragLeave(e) {
          e.preventDefault();
          e.stopPropagation();
          setDragging(false);
        }
        dropContainer.current.addEventListener("dragover", handleDragOver);
        dropContainer.current.addEventListener("drop", handleDrop);
        dropContainer.current.addEventListener("dragleave", handleDragLeave);
    
        return () => {
          if (dropContainer.current) {
            dropContainer.current.removeEventListener("dragover", handleDragOver);
            dropContainer.current.removeEventListener("drop", handleDrop);
            dropContainer.current.removeEventListener("dragleave", handleDragLeave);
          }
        };
      }, [filesToUpload]);

    const handleCreateFolder = async () => {
        await axios({
            url : "",
            method: 'post',
            data : formData
        })
    }

    const [folderName, setFolderName] = useState("")
    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('files', filesToUpload)
        await axios({
            url : "",
            method: 'post',
            data : formData
        })
    }

    return (
        
        <div class="bg-gray-500 mt-[-31px]">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className=''>
                    <h1 className='text-white font-bold text-xl'>Username <span className='font-normal text-base'>dazdza</span></h1>
                </div>
                <div className=''>
                    <button ref={uploadTrigger} onClick={() => setUploadModalOpen(true)} class="inline-flex items-center py-2 px-3 mr-3 text-sm text-indigo-500 font-medium bg-white hover:bg-indigo-50 rounded-lg" href="#">
                        <span class="inline-block mr-1">
                        <svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 9.33334C13.6 9.33334 13.3333 9.60001 13.3333 10V12.6667C13.3333 13.0667 13.0667 13.3333 12.6667 13.3333H3.33334C2.93334 13.3333 2.66668 13.0667 2.66668 12.6667V10C2.66668 9.60001 2.40001 9.33334 2.00001 9.33334C1.60001 9.33334 1.33334 9.60001 1.33334 10V12.6667C1.33334 13.8 2.20001 14.6667 3.33334 14.6667H12.6667C13.8 14.6667 14.6667 13.8 14.6667 12.6667V10C14.6667 9.60001 14.4 9.33334 14 9.33334ZM5.80001 5.13334L7.33334 3.60001V10C7.33334 10.4 7.60001 10.6667 8.00001 10.6667C8.40001 10.6667 8.66668 10.4 8.66668 10V3.60001L10.2 5.13334C10.4667 5.40001 10.8667 5.40001 11.1333 5.13334C11.4 4.86668 11.4 4.46668 11.1333 4.20001L8.46668 1.53334C8.20001 1.26668 7.80001 1.26668 7.53334 1.53334L4.86668 4.20001C4.60001 4.46668 4.60001 4.86668 4.86668 5.13334C5.13334 5.40001 5.53334 5.40001 5.80001 5.13334Z" fill="#8880EB"></path>
                        </svg>
                        </span>
                        <span>Upload</span>
                    </button>
                </div>
            </div>
            
            <Banner />

            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className=''>
                    <p className='text-white font-heading tracking-px-n leading-normal md:max-w-5xl'> root / home </p>
                </div>
                <div className=''>
                    <button ref={folderTrigger} onClick={() => setFolderModalOpen(true)} class="inline-flex items-center py-2 px-3 mr-3 text-sm text-indigo-500 font-medium bg-white hover:bg-indigo-50 rounded-lg" href="#">
                        <span class="inline-block mr-1">
                        <svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 9.33334C13.6 9.33334 13.3333 9.60001 13.3333 10V12.6667C13.3333 13.0667 13.0667 13.3333 12.6667 13.3333H3.33334C2.93334 13.3333 2.66668 13.0667 2.66668 12.6667V10C2.66668 9.60001 2.40001 9.33334 2.00001 9.33334C1.60001 9.33334 1.33334 9.60001 1.33334 10V12.6667C1.33334 13.8 2.20001 14.6667 3.33334 14.6667H12.6667C13.8 14.6667 14.6667 13.8 14.6667 12.6667V10C14.6667 9.60001 14.4 9.33334 14 9.33334ZM5.80001 5.13334L7.33334 3.60001V10C7.33334 10.4 7.60001 10.6667 8.00001 10.6667C8.40001 10.6667 8.66668 10.4 8.66668 10V3.60001L10.2 5.13334C10.4667 5.40001 10.8667 5.40001 11.1333 5.13334C11.4 4.86668 11.4 4.46668 11.1333 4.20001L8.46668 1.53334C8.20001 1.26668 7.80001 1.26668 7.53334 1.53334L4.86668 4.20001C4.60001 4.46668 4.60001 4.86668 4.86668 5.13334C5.13334 5.40001 5.53334 5.40001 5.80001 5.13334Z" fill="#8880EB"></path>
                        </svg>
                        </span>
                        <span>Folder</span>
                    </button>
                </div>
            </div>

            {/* <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 border-4 border-sky-500">
                <div class="flex items-center">
                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
                </div>
                <div className=''>
                    <p className='text-white font-heading tracking-px-n leading-normal md:max-w-5xl'> Name / Date / Size </p>
                </div>

                <div className='flex flex-wrap items-center justify-between space-x-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                        <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                        <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </div>
            </div> */}
            
            
            <div class="py-8">
                <div class="max-w-screen-xl flex flex-wrap  mx-auto">
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>

                </div>
            </div>

            <div className="container mx-auto py-20">
                
                <div className={`fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5 ${folderModalOpen ? "block" : "hidden"}`}>
                    <div  className="w-full max-w-[570px] rounded-[20px] bg-blue-400 px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]">
                        <div className='flex flex-row-reverse'>
                            <button onClick={() => setFolderModalOpen(false)}>x</button>
                        </div>
                        <h3 className="pb-[18px] text-xl font-semibold text-dark dark:text-white sm:text-2xl">
                            Create Folder
                        </h3>
                        <div class="mb-6">
                            <input  value={folderName} onChange={(e) => setFolderName(e.target.value)} type="text" placeholder="Email" class="w-full px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke text-body-color  dark:border-dark-3 focus:border-primary focus-visible:shadow-none"/>
                        </div>
                        
                        <div className="-mx-3 flex flex-wrap justify-center">
                            <div className="w-1/2 px-3">
                                <button  onClick={handleCreateFolder} className="block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-blue-dark">
                                    Create 
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5 ${uploadModalOpen ? "block" : "hidden"}`}>
                    <div ref={uploadTrigger} onFocus={() => setUploadModalOpen(true)} onBlur={() => setUploadModalOpen(false)}className="w-full max-w-[570px] rounded-[20px] bg-blue-400 px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]">
                        <div className='flex flex-row-reverse'>
                            <button onClick={() => setUploadModalOpen(false)}>x</button>
                        </div>
                        <h3 className="pb-[18px] text-xl font-semibold text-dark dark:text-white sm:text-2xl">
                            Drag and Drop Your File Or Select it
                        </h3>
                        {/* <span className={`mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary`}></span> */}


                        <div className={`${dragging ? "border border-[#2B92EC] bg-[#EDF2FF]" : "border-dashed border-[#e0e0e0]"} flex items-center justify-center mx-auto text-center border-2 rounded-md mt-4 py-5`}
                            ref={dropContainer}>
                            <div className="flex-1 flex flex-col">
                                <div className="mx-auto text-gray-400 mb-2">
                                    {/* <FaUpload size={18} /> */}
                                </div>
                                <div className="text-[12px] font-normal text-gray-500">
                                    <input
                                        className="opacity-0 hidden"
                                        type="file"
                                        //multiple
                                        ref={fileRef}
                                        onChange={(e) => handleDrop(e, "inputFile")}
                                    />
                                    <span
                                    className="text-[#4070f4] cursor-pointer"
                                    onClick={() => {
                                        fileRef.current.click();
                                    }}
                                    >
                                    Click to upload
                                    </span>{" "}
                                    or drag and drop
                                </div>
                                <div className="text-[10px] font-normal text-gray-500">
                                    Only two files PNG, JPG or JPEG
                                </div>
                            </div>
                        </div>

                        {filesToUpload.length > 0 && (
                            <div className="mt-4 grid grid-cols-2 gap-y-4 gap-x-4">
                            {filesToUpload.map((img, index) => (
                                <div className="w-full px-3 py-3.5 rounded-md bg-slate-200 space-y-3">
                                <div className="flex justify-between">
                                    <div className="w-[70%] flex justify-start items-center space-x-2">
                                    
                                    <div className=" space-y-1">
                                        <div className="text-xs font-medium text-gray-500">
                                        {img.name}
                                        </div>
                                        <div className="text-[10px] font-medium text-gray-400">{`${Math.floor(
                                        img.size / 1024
                                        )} KB`}</div>
                                    </div>
                                    </div>
                                    <div className="flex-1 flex justify-end">
                                    <div className="space-y-1">
                                        <div
                                        className="text-gray-500 text-[17px] cursor-pointer"
                                        onClick={() => onDelete(index)}
                                        >
                                        {/*  <BsX className="ml-auto" /> */}
                                        </div>
                                        <div className="text-[10px] font-medium text-gray-400">
                                        Done
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            ))}
                            </div>
                        )}


                        <div className="-mx-3 flex flex-wrap justify-center">
                            <div className="w-1/2 px-3">
                                <button onClick={handleUpload} className="block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-blue-dark">
                                    Upload
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
        

    )
}
