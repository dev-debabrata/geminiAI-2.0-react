import { Menu, MessageSquare, CircleQuestionMark, History, Settings, SquarePen } from 'lucide-react'
import React, { useState } from 'react'

const Sidebar = () => {

    const [extended, setExtended] = useState(false)

    return (
        <div className=' inline-flex flex-col justify-between min-h-[100vh] bg-[#f0f4f9] px-3 py-6'>
            <div>
                <Menu
                    size={18}
                    onClick={() => setExtended(prev => !prev)}
                    className=' block ml-3 cursor-pointer' />
                <div className=' mt-[50px] inline-flex items-center gap-2 p-3 bg-[#e6eaf1] rounded-full text-sm text-gray-500 cursor-pointer hover:bg-gray-300'>
                    <SquarePen size={18} />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended
                    ?
                    <div className=' flex flex-col'>
                        <p className=' mt-8 mb-5'>Recent</p>
                        <div className=' flex items-start gap-2 p-3 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'>
                            <MessageSquare size={18} />
                            <p>What is React ...</p>
                        </div>
                    </div>
                    : null
                }
            </div>
            <div className=' flex flex-col'>
                <div className='flex items-start gap-2 p-3 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'>
                    <CircleQuestionMark size={18} />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className='flex items-start gap-2 p-3 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'>
                    <History size={18} />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className='flex items-start gap-2 p-3 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'>
                    <Settings size={18} />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar