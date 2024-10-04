"use client";

import AdminDashboard from '/components/AdminNavbar'  
import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import {axiosInstance} from "../../interceptors/userinterceptor.js"

import { Typography } from "@material-tailwind/react";
import axios from 'axios';
import Link from 'next/link';

// const URL = "http://localhost:3005/user/blog";


const TABLE_HEAD = ["Author", "Category", "Title", "Date Published", ""];
 
// const TABLE_ROWS = [
  // {
  //   Author: "John Michael",
  //   Category: "Manager",
  //   title: "The Best Kept Secrets",
  //   date: "23/04/18",
  // },
  // {
  //   Author: "John Michael",
  //   Category: "Manager",
  //   title: "The Best Kept Secrets",
  //   date: "23/04/18",
  // },
// ]




export default function AdminBlogList() {
  const [ blog, setBlog ] = useState([])

  // Function to fetch blog data from server
  const fetchData = async (event) => {
    try {
        console.log("fetchData");
        const response = await axiosInstance("/admin/blog");
        console.log(response, "===response==fetchData");
        
        setBlog(response.data.blogs);
    } catch (error) {
      console.log(error);
      
    }
  };

    // Function to delete a user by ID
    const deleteUser = async (id) => {
      console.log(id);
      
      try {
        const response = await fetch(`http://localhost:3005/admin/blog/${id}`, {
          method: 'DELETE',
        });
        const data = await response.json();
        if (response.ok) {
          // Remove the deleted user from the state
          setBlog(blog.filter(post => post._id !== id));
          alert(data.message);
        } else {
          console.error('Error deleting user:', data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
  useEffect(() => {
    fetchData();
  }, []);

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
              <h1 className='text-[#FFD11A] font-semibold'>Create a Blog</h1>
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

          {/* Blog create */}
          <div className='w-full h-[628px] bg-[#262626]'>
              <div className='w-full h-full flex items-baseline '>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 bg-[#1E1E1E]"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70 "
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {blog.map((data, index) => {
            const isLast = true
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {data.author}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {data.category}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {data?.blog_title}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {data.publishing_date}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    <div className='flex gap-2'>
                    <Link href={`/admin-edit-blog/${data._id}`}><CiEdit /></Link>
                    <RiDeleteBin6Line onClick={() => deleteUser(data._id)} />
                    </div>
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
              </div>
          </div>
            </div>
          </div>


        </div>



    </div>
  )
}
