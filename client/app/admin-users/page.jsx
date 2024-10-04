"use client";

import AdminDashboard from '/components/AdminNavbar'
import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { SlOptionsVertical } from "react-icons/sl";
import { IoFilterSharp } from "react-icons/io5";
import { MdExpandMore } from "react-icons/md";
import dummy_img  from "/public/assets/images/dummy-img.png"
import Image from "next/image";
import axios from 'axios';
import { MdBlock } from "react-icons/md";
import { axiosInstance } from '@/interceptors/userinterceptor';

// const URL = "http://localhost:3005/admin/user";


export default function AdminUser() {
  const [ user, setUser ] = useState([])

  const fetchData = async (event) => {
    try {
        console.log("fetchData");
        const response = await axiosInstance("/admin/user");
        console.log(response, "===response==fetchData");
        console.log(response.data.user,"_____response");
        
        setUser(response.data.user);
    } catch (error) {
      console.log(error);
      
    }
  };

  console.log(user,"___user");

  const isBlock = async (isBlock, id)=>{
    try {
      console.log("isBlock");
      const response = await axiosInstance(`/admin/block/${id}`,{
        method: 'PUT',
        data: {isBlock}
      });
      console.log(response, "===response==isBlock");
      console.log(response.data.user,"_____response");
      
      setUser(response.data.user);
  } catch (error) {
    console.log(error);
    
  } 
  }
  
  
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
              <h1 className='text-[#FFD11A] font-semibold'>Team</h1>
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
          <div className='w-full h-10'>
            <div className='w-full h-full flex justify-end items-center space-x-4'>
                <div className='w-32 h-8 bg-[#262626] border border-[#1A1A1A] rounded-xl flex justify-around items-center'>
                    <h1 className='text-xs'>Filter users</h1>
                    <IoFilterSharp />
                </div>
                <div className='w-32 h-8 bg-[#262626] border border-[#1A1A1A] rounded-xl flex justify-around items-center'>
                    <h1 className='text-xs'>Sort by date</h1>
                    <MdExpandMore />
                </div>
                <div className='w-8 h-8 bg-[#262626] border border-[#1A1A1A] rounded-full flex justify-around items-center text-xs'>
                <SlOptionsVertical />
                </div>
            </div>
          </div>

          {/* List of user */}
            <div className='w-full flex space-x-3 h-[580px] '>
                  {user?.map((data, index)=>(
                <div key={data._id} className='w-[200px] h-[200px] bg-[#262626] rounded flex justify-center pt-4'>
                      <div className=' h-full'>
                      <div className='w-20 h-20 '>
                        <Image className='w-20 h-20 rounded-full' src={dummy_img} alt="dummy_img" />
                      </div>
                        <div className='w-full flex items-center pt-2 text-center '>
                          <div className='w-full flex flex-col items-center space-y-2'>
                          <h1 className='text-[10px]'>{data.username}</h1>
                          <h1 className='text-[8px] text-[#98989A]'>{data.designation}</h1>
                          {data.isBlock? <MdBlock onClick={()=>isBlock(false,data._id)} className='text-red-600' /> : <MdBlock onClick={()=>isBlock(true,data._id)} className='' />}
                          </div>
                        </div>
                      </div>
                </div>
                   ))} 
                      
            </div>
         
            </div>
          </div>


        </div>



    </div>
  )
}
