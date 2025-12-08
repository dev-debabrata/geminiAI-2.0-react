import { Menu, MessageSquare, Plus, CircleQuestionMark, History, Settings } from 'lucide-react'
import React from 'react'

const Sidebar = () => {
    return (
        <div>
            <div>
                <Menu />
                <div>
                    <Plus />
                    <p>New Chart</p>
                </div>
                <div>
                    <p>Recent</p>
                    <div>
                        <MessageSquare />
                        <p>What is React ...</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <CircleQuestionMark />
                    <p>Help</p>
                </div>
                <div>
                    <History />
                    <p>Activity</p>
                </div>
                <div>
                    <Settings />
                    <p>Settings</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar