import React, { useState } from 'react'
import logo  from "/public/assets/images/logo.png"
import profile  from "/public/assets/images/profile.jpeg"
import { SlOptionsVertical } from "react-icons/sl";
import Image from "next/image";
import { useRouter } from 'next/navigation';



export default function AdminNavbar() {

  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState('');

  const handleNavigation = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (value) {
      router.push(value); // Navigate to the selected page
    }
  };

  return (
    <div className='max-h-screen w-[218px]'>
        <div className='w-[218px] h-screen bg-[#262626] flex justify-center pt-10'>
            <div>
            <div className='ml-4'>
              <div className="flex gap-1">
                <Image className="w-5 h-5" src={logo} alt="logo" />
                <h2 className="">FutureTech</h2>
              </div>
              <div className='mt-16 text-black rounded'>
                <select name="navigation" id="navigation" onChange={handleNavigation} value={selectedValue} >
                  <option value="/admin-blog-create">Create Blog</option>
                  <option value="/admin-blog">List Blog</option>
                </select>
              </div>
              <div>
                <div className='mt-24'>
                  <h1><a href="/admin-users">Users</a></h1>
                </div>
              </div>
            </div>
            <div className='w-44 h-10 rounded-xl bg-[#FFD11A] mt-[400px] flex justify-around'>
              <div className='w-9 h-full rounded-full flex items-center'>
                <Image className='h-8 rounded-full' src={profile} alt="profile" />
              </div>
              <div className='text-[8px] text-black flex  items-center'>
                <div>
                <h1>Anita Cruz</h1>
                <h2>anita@commerce.com</h2>
                </div>
              </div>
            <div className='p-2 text-black text-xs'>
            <SlOptionsVertical />
            </div>
            </div>
            </div>
        </div>

        {/* <div className='w-full h-[100px] bg-slate-500'>

        </div> */}
    </div>
  )
}
