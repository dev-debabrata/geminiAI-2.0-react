import { Menu, MessageSquare, Plus, CircleQuestionMark, History, Settings } from 'lucide-react'
import React, { useState } from 'react'

const Sidebar = () => {

    const [extended, setExtended] = useState(false)

    return (
        <div className=' inline-flex flex-col justify-between min-h-[100vh] bg-[#f0f4f9] px-3 py-6'>
            <div>
                <Menu onClick={() => setExtended(prev => !prev)} className=' block ml-3 cursor-pointer' />
                <div className=' mt-[50px] inline-flex items-center gap-2 p-3 bg-[#e6eaf1] rounded-full text-sm text-gray-500 cursor-pointer'>
                    <Plus />
                    {extended ? <p>New Chart</p> : null}
                </div>
                {extended
                    ?
                    <div className=' flex flex-col'>
                        <p className=' mt-8 mb-5'>Recent</p>
                        <div className=' flex items-start gap-2 p-3 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'>
                            <MessageSquare />
                            <p>What is React ...</p>
                        </div>
                    </div>
                    : null
                }
            </div>
            <div className=' flex flex-col'>
                <div className='flex items-start gap-2 p-3 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'>
                    <CircleQuestionMark />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className='flex items-start gap-2 p-3 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'>
                    <History />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className='flex items-start gap-2 p-3 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'>
                    <Settings />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar