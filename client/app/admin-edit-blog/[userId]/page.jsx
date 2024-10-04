"use client";

import AdminDashboard from '/components/AdminNavbar'
import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Button } from '@/components/ui/button'
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { axiosInstance } from '@/interceptors/userinterceptor';


// const URL = "http://localhost:3005/";

export default function AdminBlogCreate() {
    const params = useParams()
    console.log(params,"_______params");
    

    const [fields, setFields] = useState({
        blog_title : '',
        publishing_date: '',
        category: '',
        author: '',
        paragraph_title: '',
        description: '',
    })
    const router = useRouter();

    
   

        const fetchData = async (event) => {
            try {
                console.log("fetchData");
                const response = await axiosInstance(`admin/edit-blog/${params.userId}`);
                console.log(response, "===response==fetchData");
                
                setFields(response.data.blog)
            } catch (error) {
                console.log(error);
                
            }
        };



    useEffect(() => {
    fetchData();
    }, []);


    const handleChange = (event) => {
        console.log(event.target.value,"______",event.target.name);
        
        setFields((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
      };

      console.log(fields);

    
    

        const handleSubmit = async (event) => {
            event.preventDefault();
            console.log(fields,"____field");
            const response = await axiosInstance(`admin/edit-blog/${params.userId}`, {
                method: "PUT",
                data: fields,
            });;
        };
      


    return (
    <div>
        <div className='max-w-[1640px] h-full  mx-auto text-white bg-[#000000] flex'>

          {/* main head */}
          <div className='w-full h-full '>
            <div className='p-4'>
            <div className='h-20'>
              <div className='w-[400px] pt-2 flex justify-between items-center'>
              <h1 className='text-[#FFD11A] font-semibold'>Edit Blogs</h1>
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

                    <div className='w-full mt-10 space-y-4'>
                        <div className='w-full flex justify-between space-x-5 text-sm'>
                            <div className='w-full space-y-2'>
                                <h1>Blog Title</h1>
                                <input onChange={handleChange} value={fields.blog_title} name='blog_title' type="text" placeholder='The Best Kept Secrets' className='text-[#89868D] w-full bg-[#1E1E1E] rounded p-2 text-xs' />
                            </div>
                            <div className='w-full space-y-2'>
                                <h1>Publishing Date</h1>
                                <input onChange={handleChange} value={fields.publishing_date} name='publishing_date'  type="text" placeholder='Pick Date' className='text-[#89868D] w-full bg-[#1E1E1E] rounded p-2 text-xs'/>
                            </div>
                        </div>
                        <div className='w-full flex justify-between space-x-5 text-sm'>
                            <div className='w-full space-y-2'>
                                <h1>Category</h1>
                                <input onChange={handleChange} value={fields.category} name='category' type="text" placeholder='Choose Category' className='text-[#89868D] w-full bg-[#1E1E1E] rounded p-2 text-xs' />
                            </div>
                            <div className='w-full space-y-2'>
                                <h1>Author Name</h1>
                                <input onChange={handleChange} value={fields.author} name='author' type="text" placeholder='Germany' className='text-[#89868D] w-full bg-[#1E1E1E] rounded p-2 text-xs'/>
                            </div>
                        </div>
                        <div className=' text-sm'>
                            <div className='space-y-2'>
                                <h1>paragraph Title</h1>
                                <input onChange={handleChange} value={fields.paragraph_title} name='paragraph_title' type="text" placeholder='The Best Kept Secrets' className='text-[#89868D] w-[590px] bg-[#1E1E1E] rounded p-2 text-xs' />
                            </div>
                        </div>
                        <div className=' text-sm '>
                            <div className='space-y-2'>
                                <h1>Description</h1>
                                <textarea type="text" onChange={handleChange} value={fields.description} name='description' placeholder='The Best Kept Secrets' className='text-[#89868D] h-full w-[590px] bg-[#1E1E1E] rounded p-2 text-xs'  id=""></textarea>
                            </div>
                        </div>
                        <Button className='bg-[#FFD11A] hover:bg-[#FFD11A] rounded-xl text-xs text-black'>create</Button>
                        <div className='flex justify-end'>
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
