import React from 'react'
import image from '../assets/icons8-history-48.png'
import dashboard from '../assets/dashboard.png'
import calender from '../assets/calendar.png'
import statistic from '../assets/square-poll-vertical-solid.svg'
import squarePlus from '../assets/square-plus-solid.svg'
import support from '../assets/phone-solid.svg'
import settings from '../assets/gear-solid.svg'
import chat from '../assets/rocketchat-brands.svg'

const Sidebar = () => {
    return (
        <div className="pt-[85px] col-span-1 lg:col-span-2 bg-blue-50 sm:rounded-l-2xl px-2 lg:pl-7 py-8 sm:flex flex-col justify-between items-center lg:items-start relative overflow-hidden hidden ">
            <section className="flex flex-col gap-8">               
                <article id='general' className="space-y-3">
                    <h3 className="hidden lg:block">General</h3>
                    <h3 className="lg:hidden block font-extrabold text-2xl">G</h3>
                    <ul className="flex flex-col gap-5">
                        <li className="cursor-pointer flex gap-2 items-center transition-opacity duration-300 opacity-100">
                            <img src={dashboard} alt="" className="w-5 h-5" />
                            <p className="font-semibold opacity-100 hidden lg:block ">Dashboard</p>                            
                        </li>
                        <li className="cursor-pointer flex gap-2 items-center transition-opacity duration-300 opacity-50 hover:opacity-100">
                            <img src={image} alt="" className="w-5 h-5" />
                            <p className="font-semibold opacity-70 hidden lg:block">History</p>
                        </li>
                        <li className="cursor-pointer flex gap-2 items-center transition-opacity duration-300 opacity-50 hover:opacity-100">
                            <img src={calender} alt="" className="w-5 h-5" />
                            <p className="font-semibold opacity-70 hidden lg:block">Calender</p>
                        </li>
                        <li className="cursor-pointer flex gap-2 items-center transition-opacity duration-300 opacity-50 hover:opacity-100">
                            <img src={squarePlus} alt="" className="w-5 h-5" />
                            <p className="font-semibold opacity-70 hidden lg:block">Appointments</p>
                        </li>
                        <li className="cursor-pointer flex gap-2 items-center transition-opacity duration-300 opacity-50 hover:opacity-100">
                            <img src={statistic} alt="" className="w-5 h-5" />
                            <p className="font-semibold opacity-70 hidden lg:block">Statistics</p>
                        </li>
                    </ul>
                </article>
                <article id='tools' className="space-y-3">
                    <h3 className="hidden lg:block">Tools</h3>
                    <h3 className="lg:hidden block font-extrabold text-2xl">T</h3>
                    <ul className="flex flex-col gap-5">
                        <li className="cursor-pointer flex gap-2 items-center transition-opacity duration-300 opacity-50 hover:opacity-100">
                            <img src={chat} alt="" className="w-5 h-5" />
                            <p className="font-semibold opacity-70 hidden lg:block">Chats</p>
                        </li>
                        <li className="cursor-pointer flex gap-2 items-center transition-opacity duration-300 opacity-50 hover:opacity-100">
                            <img src={support} alt="" className="w-5 h-5" />
                            <p className="font-semibold opacity-70 hidden lg:block">Supports</p>
                        </li>
                    </ul>
                </article>
            </section>
            <section className="flex flex-col justify-center">
                <div className="flex gap-2 items-center opacity-50 hover:opacity-100 cursor-pointer">
                    <img src={settings} alt="" className="w-5 h-5" />
                    <p className="font-semibold opacity-80 hidden lg:block">Settings</p>
                </div>
            </section>
        </div>
    )
}

export default Sidebar;