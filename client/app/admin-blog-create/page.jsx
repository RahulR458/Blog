"use client";

import AdminDashboard from '/components/AdminNavbar'
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { axiosInstance } from '@/interceptors/userinterceptor';


// const URL = "http://localhost:3005/admin/file/upload";

export default function AdminBlogCreate() {

    const [image, setImage] = useState("");

    const [fields, setFields] = useState({
        blog_title : '',
        publishing_date: '',
        category: '',
        author: '',
        paragraph_title: '',
        description: '',
    })
    const router = useRouter();

    const handleChange = (event) => {
        console.log(event.target.value,"______",event.target.name);
        
        setFields((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
      };

      console.log(fields);

    
    const fileUpload = (event) => {
        console.log("handleFileChange");
        console.log(event.target.files[0], "event.target.files[0]");

        setImage(event.target.files[0]);
    };

        const handleSubmit = async (event) => {
            event.preventDefault();
            console.log(fields,"____field");
            const formData = new FormData();
            formData.append("images", image);
            formData.append("blog_title", fields.blog_title);
            formData.append("publishing_date", fields.publishing_date);
            formData.append("category", fields.category);
            formData.append("author", fields.author);
            formData.append("paragraph_title", fields.paragraph_title);
            formData.append("description", fields.description);
            const response = await axiosInstance("admin/file/upload", {
                method: "POST",
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                data: formData,
            });
            console.log(response, "imageUpload response");
        };
      


    return (
    <div>
        <div className='max-w-[1640px] h-full  mx-auto text-white bg-[#000000] flex'>
          {/* side bae */}
          <div>
          <AdminDashboard />
          </div>

          {/* main head */}
          <div className='w-full h-full '>
            <div className='p-4'>
            <div className='h-20'>
              <div className='w-[400px] pt-2 flex justify-between items-center'>
              <h1 className='text-[#FFD11A] font-semibold'>List Blogs</h1>
              <div className='flex w-[220px] h-7 bg-[#262626] rounded-xl items-center'>
                <input 
                  className='w-full h-full bg-transparent text-xs text-[#89868D] px-3 border-none focus:outline-none rounded-xl' 
                  placeholder='Search anything here...' 
                  type="text" 
                />
                <CiSearch className='text-[#89868D] m-2' />
              </div>
              </div>
          </div>

          {/* List of authers */}
          <div className='w-full h-[628px] bg-[#262626]'>
              <div className='w-full h-full p-10 '>
                <form onSubmit={handleSubmit} action="" className='w-full h-[135px]'>
                    <h1>Blog Image</h1>
                    <label htmlFor="imageUpload">
                    <div className='w-52 h-[90px] text-xs  border-[#FFD11A] border-dashed border-[2px] border-spacing-3 mt-2 flex justify-center items-center'>
                    <div className='w-full '>
                       <div className='w-full flex justify-center'>
                       <FaCloudDownloadAlt className='text-[#FFD11A]' />
                       </div>
                        <div className='w-full flex justify-center text-center mt-2  text-[10px]'>
                        <p><span className='text-[#FFD11A]'>Click to upload</span> or drag and drop <br />
                            SVG, PNG, JPG or GIF <br />
                            (max, 800x400px)
                        </p>
                        </div>
                    </div>
                    </div>
                    </label>
                    <input type="file" id='imageUpload' className='hidden' onChange={fileUpload} />

                    <div className='w-full mt-10 space-y-4'>
                        <div className='w-full flex justify-between space-x-5 text-sm'>
                            <div className='w-full space-y-2'>
                                <h1>Blog Title</h1>
                                <input onChange={handleChange} name='blog_title' type="text" placeholder='The Best Kept Secrets' className='text-[#89868D] w-full bg-[#1E1E1E] rounded p-2 text-xs' />
                            </div>
                            <div className='w-full space-y-2'>
                                <h1>Publishing Date</h1>
                                <input onChange={handleChange} name='publishing_date'  type="text" placeholder='Pick Date' className='text-[#89868D] w-full bg-[#1E1E1E] rounded p-2 text-xs'/>
                            </div>
                        </div>
                        <div className='w-full flex justify-between space-x-5 text-sm'>
                            <div className='w-full space-y-2'>
                                <h1>Category</h1>
                                <input onChange={handleChange} name='category' type="text" placeholder='Choose Category' className='text-[#89868D] w-full bg-[#1E1E1E] rounded p-2 text-xs' />
                            </div>
                            <div className='w-full space-y-2'>
                                <h1>Author Name</h1>
                                <input onChange={handleChange} name='author' type="text" placeholder='Germany' className='text-[#89868D] w-full bg-[#1E1E1E] rounded p-2 text-xs'/>
                            </div>
                        </div>
                        <div className=' text-sm'>
                            <div className='space-y-2'>
                                <h1>paragraph Title</h1>
                                <input onChange={handleChange} name='paragraph_title' type="text" placeholder='The Best Kept Secrets' className='text-[#89868D] w-[590px] bg-[#1E1E1E] rounded p-2 text-xs' />
                            </div>
                        </div>
                        <div className=' text-sm '>
                            <div className='space-y-2'>
                                <h1>Description</h1>
                                <textarea type="text" onChange={handleChange} name='description' placeholder='The Best Kept Secrets' className='text-[#89868D] h-full w-[590px] bg-[#1E1E1E] rounded p-2 text-xs'  id=""></textarea>
                            </div>
                        </div>
                        <Button className='bg-[#FFD11A] hover:bg-[#FFD11A] rounded-xl text-xs text-black'>ADD NEW PARAGRAPH AND DESCRIPTION</Button>
                        <div className='flex justify-end'>
                            <Button className='bg-[#FFD11A] hover:bg-[#FFD11A] rounded-xl text-xs text-black'>Create Blog</Button>
                        </div>
                    </div>
                </form>
              </div>
          </div>
            </div>
          </div>


        </div>



    </div>
  )
}
