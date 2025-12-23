import React from 'react'

import { Code, Compass, ImagePlus, Lightbulb, MessagesSquare, Mic, SendHorizonal } from 'lucide-react'
import { assets } from '../assets/assets'


const Main = () => {
    return (
        <div className=' flex-1 min-h-[100vh] pb-10 relative'>
            <div className=' flex items-center justify-between text-2xl p-5 text-[#585858]'>
                <p>Gemini</p>
                <img src={assets.avatar} alt="" className=' w-10 rounded-full' />
            </div>
            <div className=' max-w-4xl m-auto'>
                <div className=' my-[50px] mx-0 text-6xl text-[#c4c7c5] p-5 font-medium'>
                    <p><span className='bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent'>
                        Hello, Dev.
                    </span></p>
                    <p>How can i help you todat?</p>
                </div>
                <div className=' grid grid-cols-4 gap-4 p-5'>
                    <div className=' h-[200px] p-4 bg-[#f0f4f9] rounded-lg relative cursor-pointer hover:bg-[#dfe4ea]'>
                        <p className=' text-[#585858] text-base'>Suggest beautiful places to see on an upcoming road trip</p>
                        <Compass size={30} className=' w-[35px] p-1 absolute bg-white rounded-3xl bottom-3 right-3' />
                    </div>
                    <div className=' h-[200px] p-4 bg-[#f0f4f9] rounded-lg relative cursor-pointer  hover:bg-[#dfe4ea]'>
                        <p className=' text-[#585858] text-base'>Briefly summarize this concept: urban planning</p>
                        <Lightbulb size={30} className=' w-[35px] p-1 absolute bg-white rounded-3xl bottom-3 right-3' />
                    </div>
                    <div className=' h-[200px] p-4 bg-[#f0f4f9] rounded-lg relative cursor-pointer  hover:bg-[#dfe4ea]'>
                        <p className=' text-[#585858] text-base'>Brainstorm team bonding activities for our work retreat</p>
                        <MessagesSquare size={30} className=' w-[35px] p-1 absolute bg-white rounded-3xl bottom-3 right-3' />
                    </div>
                    <div className=' h-[200px] p-4 bg-[#f0f4f9] rounded-lg relative cursor-pointer  hover:bg-[#dfe4ea]'>
                        <p className=' text-[#585858] text-base'>Improve the readability of the follwing code</p>
                        <Code size={30} className=' w-[35px] p-1 absolute bg-white rounded-3xl bottom-3 right-3' />
                    </div>
                </div>


                <div className=' absolute bottom-0 w-full max-w-4xl py-0 px-5 m-auto'>
                    <div className=' flex items-center justify-between gap-5 bg-[#f0f5f9] py-2 px-4 rounded-full'>
                        <input
                            type="text"
                            placeholder='Enter a prompt here'
                            className=' flex-1 bg-transparent border-none outline-0 p-1 text-lg' />
                        <div className=' flex items-center gap-4'>
                            <ImagePlus size={20} className=' cursor-pointer' />
                            <Mic size={20} className=' cursor-pointer' />
                            <SendHorizonal size={20} className=' cursor-pointer' />
                        </div>
                    </div>
                    <p className=' text-[12px] mx-auto my-4 text-center font-light'>
                        Gemini my display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main