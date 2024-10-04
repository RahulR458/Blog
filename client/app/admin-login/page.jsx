"use client";

import React, { useState } from 'react'
import Image from "next/image";
import adminLogin  from "/public/assets/images/adminLogin.png"
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { axiosInstance } from '@/interceptors/userinterceptor';

// const URL = "http://localhost:3005/";

const AdminLogin = () => {

  const [fields, setFields] = useState({
    email: '',
    password: '',
  })
  const router = useRouter();

  const schema = z.object({
    email: z.string().min(1, { message: "This field has to be filled." }).email({ message: 'Invalid email format' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
  });

  // useForm and zodResolver for Zod schema validation
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });
  


  const onHandleSubmit = async (event) => {
    console.log("onSubmit");
    console.log(fields);
    
    try {
      console.log("before preventDefault");
  
          console.log("after preventDefault");
            try {
                console.log("it is valid");
                console.log(fields);

                const response = await axiosInstance("user/login", {
                  method: "POST",
                  // withCredentials: true,
                  data: fields
              });

                console.log(response);
                if (response.data.message === "login successfull") {
                  console.log("Admin Login Succes");
                  Cookies.set('accessToken', response.data.accessToken, { expires: 7 }); // Expires in 7 days
                      router.push('/admin-blog'); // Navigate to the dashboard page
                }
            } catch (error) {
                console.log("it is login error catch");
                console.log(error);
            }
    } catch (error) {
        console.log("it is login error catch");
        console.log(error);
    }
  };


  const handleChange = (event) => {
    console.log(event.target.value,"______",event.target.name);
    
    setFields((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="max-w-[1640px] h-screen mx-auto text-white bg-[#000000]">
        <div className='w-full h-full flex justify-center items-center'>
            <div className='w-[1000px] h-[600px] bg-[#2e2d2d68] flex justify-center items-center rounded-xl'>
                <div className='w-[520px] h-full flex justify-center items-center'>
                    <div className='w-[280px] h-[400px] '>
                            <h1 className='font-semibold'>Login</h1>
                            <p className='text-[#98989A] text-[10px]'>How do i get started lorem ipsum dolor at?</p>
                        <div className='w-full pt-3'>
                            <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                                <h1 className='text-sm'>Email</h1>
                                <input {...register('email', { required: true, onChange: handleChange })} type="email" placeholder="Enter your email" className='bg-black w-full border border-[#262626] rounded mt-2 text-xs p-2'/>
                                {errors.email && <p className='text-xs text-red-600'>{errors.email.message}</p>}
                                <h1 className='text-sm mt-2'>Password</h1>
                                <input {...register('password', { required: true, onChange: handleChange })} type="password" placeholder=".........." className='bg-black w-full pb-1 px-2 text-lg border border-[#262626] rounded mt-2'/>
                                {errors.password && <p className='text-xs text-red-600'>{errors.password.message}</p>}
                                <div className='flex justify-end text-xs my-2 mx-1 text-[#FFD11A]'><h1>Forgot password</h1></div>
                                <Button className='w-full text-black bg-[#FFD11A] hover:bg-[#FFD11A] rounded-xl mt-4'>Sign in</Button>
                            </form>
                        </div>
                        <div className='w-full mt-32 text-xs flex justify-center'>
                        <h1>Dont’t have an account. <span className='text-[#FFD11A]'>Sign up</span></h1>
                        </div>
                    </div>
                </div>
                    <Image className='rounded-xl' src={adminLogin} alt="adminLogin" />
            </div>
        </div>
    </div>
  )
}

export default AdminLogin
