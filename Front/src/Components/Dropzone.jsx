import React, { useState, useEffect  } from 'react'
import axios from 'axios'
import {useDropzone} from 'react-dropzone';
import "./dropzone.css";
import toast, { Toaster } from 'react-hot-toast';



export default function Dropzone() {
    const [acceptedFiles, setAcceptedFiles] = useState([]);
    const [uploadProgress, setUploadProgress] = useState(0);

    const {
        fileRejections,
        getRootProps,
        getInputProps
      } = useDropzone({
        maxFiles: 1,
        onDrop: acceptedFiles => {
            setAcceptedFiles(acceptedFiles);
        }
    });

    const handleClearFile = () => {
        setAcceptedFiles([]);
    };
    
    const handleUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', acceptedFiles[0])
        formData.append('token', JSON.parse(localStorage.getItem('token')).id)
        
        const config = {
            onUploadProgress : function(progressEvent){
                const percentCompleted = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                setUploadProgress(percentCompleted)
                if(percentCompleted == 100) toast.success('Successfully Uploaded!')
            }
        }
        
        await axios({
          url : import.meta.env.VITE_API_FILE_UPLOAD,
          method : "POST",
          data : formData,
          ...config
        }).then((response) => {
          window.location.reload();
        })
    }
    
    

    const acceptedFileItems = acceptedFiles.map(file => (
        <div className="text-start my-3 flex justify-center" key={file.path}>
            <div className="relative inline-block flex-2">
                <div className="w-full h-auto px-3 py-1 text-[0.8rem] bg-gray-200 text-gray-800 rounded-md text-center">
                    <span className="text-black text-base font-medium"> File Name : {" "}</span>
                    {file.path} - {file.size} bytes
                </div>
                <button className="absolute -top-3 -right-2 bg-gray-200 text-red-500 dark:text-red-400 cursor-pointer rounded-sm" onClick={handleClearFile}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </button>
            </div>
        </div>
    ));

    return (
        <section className="bg-gray-200 rounded-lg w-full flex-2 items-center justify-center">
            <Toaster />
            <div {...getRootProps({ className: 'dropzone bg-gray-300' })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
                <em>(2 files are the maximum number of files you can drop here)</em>
            </div>
            <aside>
                <h4>Accepted files</h4>
                <ul>{acceptedFileItems}</ul>
            </aside>
            {
              acceptedFileItems.length != 0 && 
              <>
              <div className="-mx-3 flex flex-wrap justify-center">
                <div className="w-1/2 px-3">
                    <button onClick={handleUpload} className="block w-full rounded-md border border-primary bg-green-300 p-3 text-center text-base font-medium text-white transition hover:bg-blue-dark">
                        Upload
                    </button>
                </div>
              </div>
              
              <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div class={`bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`} style={{ width: `${uploadProgress}%` }} > {uploadProgress}%</div>
              </div>
              
              
              </>

            }
            
        </section>
    );
}