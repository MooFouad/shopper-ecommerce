import React from 'react'

const Login = () => {
    return (
        <div className='flex justify-center items-center min-h-[100vh]' >
            <div className="md:p-10 p-4 border rounded-2xl flex flex-col gap-4 justify-center items-center">
                <h1 className='bold text-2xl'>Sign Up</h1>
                <div className="flex justify-center items-center w-full">
                    <label htmlFor="name">name</label>
                    <input type="text" id='name' />
                </div>
                <div className="flex justify-center items-center w-full">
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' />
                </div>
                <div className="flex justify-center items-center w-full">
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' />
                </div>
                <button className='w-full bg-red-500 text-white bold rounded-xl py-2 mb-4'>Continue</button>
                <p className='text-gray-500'>Already have an account? 
                    <span className='pl-1 bold text-red-500 cursor-pointer'>
                        Login her
                    </span>
                </p>
            </div>

        </div>
    )
}

export default Login