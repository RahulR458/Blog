"use client";

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import logo from "/public/assets/images/logo.png";

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const URL = "http://localhost:3005/user/signup";


const Register = () => {
  const [fields, setFields] = useState({
    name: '',
    designation: '',
    email: '',
    password: '',
  })

  const router = useRouter();

  const schema = z.object({
    name: z.string().min(3, { message: 'Name must be at least 3 characters long'}),
    designation: z.string().min(3, { message: 'Designation must be required'}),
    email: z.string().min(1, { message: "This field has to be filled." }).email({ message: 'Invalid email format' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
  });


  // useForm and zodResolver for Zod schema validation
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });


  const onSubmit = async (event) => {
    console.log("onSubmit");
    
    try {
      console.log("before preventDefault");
          console.log("after preventDefault");
            try {
                console.log("it is valid");
                console.log(fields);

                const response = await axios(URL, {
                  method: "POST",
                  // withCredentials: true,
                  data: fields
              });

                console.log(response);
                localStorage.setItem("userToken", response.data.accessToken);
                if (response.data.message === "login successfull") {
                  console.log("Login Succes");
                  

                  router.push('/home'); 
                }
            } catch (error) {
                console.log("it is login error catch");
                console.log(error);
            }
        // }
    } catch (error) {
        console.log("it is login error catch");
        console.log(error);
    }
  };


  const handleChange = (event) => {
    setFields((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
    }));
  };


  return (
    <div className="max-w-[1640px] mx-auto text-white flex justify-center items-center">
      {/* <div className="w-[1px]  bg-[#262626]"></div> */}
      <div className="w-screen sm:h-[650px] h-36   sm:bg-[#131313] bg-[#262626]">
        <div className='w-full h-[50px] sm:hidden bg-black flex justify-around items-center text-xs'><h2>Subscribe to our Newsletter For Blogs and Resources</h2><span className='text-yellow-300'><MdArrowOutward  /></span></div>
        <div className='w-full sm:h-[30px] mb-10 mt-10  '>
          <div className='mx-[130px] flex items-center gap-1'>
          <Image className='w-5 h-5' src={logo} alt="logo" /><h2 >FutureTech</h2>
          </div>
        </div>        <hr className="border-[#262626] hidden sm:block" />
        <div className="w-full h-full sm:flex ">
            
          <div className=' sm:flex  sm:mt-20'>
           <div className='sm:mx-[170px] m-4'>
                <div className='mb-10 '>
                    <div className='flex'>
                    <div className='w-[32px] h-8 bg-[#404040] rounded-full'></div>
                    <div className='w-[32px] h-8 bg-[#FFD11A] rounded-full'></div>
                    </div>
                    <div className='flex'>
                    <div className='w-[32px] h-8 bg-[#FFD11A] rounded-full'></div>
                    <div className='w-[32px] h-8 bg-[#404040] rounded-full'></div>
                    </div>
                </div>
                <div className="">
                    
                    <h1 className="sm:text-4xl font-sans text-lg">Welcome, <br /> Enter Your Details To <br /> Create Account</h1>
                </div>
           </div>
          </div>

          <div className="w-[1px]  bg-[#262626] hidden sm:block"></div>

          <div className='sm:w-[600px] h-full sm:mx-10 mt-[50px]'>
            <form action="" className='' onSubmit={handleSubmit(onSubmit)}>
                <div className='w-full h-full'>
                    <div className='p-4'>
                        <h1 className='m-2'>Full Name</h1>
                        <input  {...register('name', { required: true, onChange: handleChange })} className='w-full   mb-4 rounded-lg bg-black border border-[#262626] p-4 text-xs' type="text" placeholder='Enter Your Full Name' />
                        {errors.name && <p className='text-xs text-red-600'>{errors.email.message}</p>}
                    </div>
                    <div className='p-4'>
                        <h1 className='m-2'>Email Address</h1>
                        <input  {...register('email', { required: true, onChange: handleChange })} className='w-full  mb-4 rounded-lg bg-black border border-[#262626] p-4 text-xs' type="password" placeholder='Enter Your Email Address' />
                        {errors.email && <p className='text-xs text-red-600'>{errors.email.message}</p>}
                    </div>
                    <div className='p-4'>
                        <h1 className='m-2'>Designation</h1>
                        <input  {...register('designation', { required: true, onChange: handleChange })} className='w-full   mb-4 rounded-lg bg-black border border-[#262626] p-4 text-xs' type="text" placeholder='Enter your Designation' />
                        {errors.designation && <p className='text-xs text-red-600'>{errors.designation.message}</p>}
                    </div>
                    <div className='p-4'>
                        <h1 className='m-2'>Password</h1>
                        <input  {...register('password', { required: true, onChange: handleChange })} className='w-full  mb-4 rounded-lg bg-black border border-[#262626] p-4 text-xs' type="password" placeholder='Enter your Password' />
                        {errors.password && <p className='text-xs text-red-600'>{errors.password.message}</p>}
                    </div>
                    <div className='flex gap-2 text-xs p-4'><input type="checkbox" className='accent-gray-800 mx-2' /><p>I agree with Terms of Use and Privacy Policy</p></div>
                    <div className='w-full flex justify-center items-center pt-5 p-4'>
                    <Button className='bg-yellow-400 hover:bg-yellow-400 text-black p-4 text-sm rounded-[2px] sm:mx-10 mx-2 w-full sm:w-[100px]'>Sign up</Button>
                    </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
