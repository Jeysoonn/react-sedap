import { AiOutlinePlus } from "react-icons/ai"; 
import { AiFillCustomerService } from "react-icons/ai"; 
import { BiCart } from "react-icons/bi"; 
import { MdDashboardCustomize } from "react-icons/md"; 
import React from 'react';

export default function Sidebar() {
    const ListItem = ({ icon, title, onClick }) => (
        <div 
            className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold" 
            onClick={onClick}
        >
            {icon}
            {title}
        </div>
    );
    return (
        <div id="sidebar" className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">
            {/* Logo */}
            <div id="sidebar-logo" className="flex flex-col">
                <span id="logo-title" className="font-poppins-extrabold text-[48px] text-gray-900">
		                Sedap <b id="logo-dot" className="text-hijau">.</b>
		            </span>
                <span id="logo-subtitle" className="font-semibold text-gray-400">Modern Admin Dashboard</span>
            </div>

            {/* List Menu */}
            <div id="sidebar-menu" className="mt-10">
                <ul id="menu-list" className="space-y-3">
                    <li>
                        <ListItem 
                            icon={<MdDashboardCustomize className="mr-4 text-xl" />} 
                            title="Dashboard" 
                            onClick={() => console.log('Dashboard clicked')} 
                        />
                    </li>
                    <li>
                        <ListItem
                            icon={<BiCart className="mr-4 text-xl" />} 
                            title="Orders" 
                            onClick={() => console.log('Orders clicked')} 
                        />
                    </li>
                    <li>
                        <ListItem 
                            icon={<AiFillCustomerService className="mr-4 text-xl" />} 
                            title="Customers" 
                            onClick={() => console.log('Customers clicked')} 
                        />
                    </li>
                </ul>
            </div>
            {/* <div id="sidebar-menu" className="mt-10">
                <ul id="menu-list" className="space-y-3">
                    <li>
	                    <div id="menu-1" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                            <MdDashboardCustomize className="mr-4 text-xl"/>Dashboard</div>
                            <Dashbor/>
	                  </li>
                    <li>
	                    <div id="menu-2" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                            <BiCart className="mr-4 text-xl"/>Orders</div>
                            <Order/>
	                  </li>
	                  <li>
	                    <div id="menu-3" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
                            <AiFillCustomerService className="mr-4 text-xl"/>Customers</div>
                            <Customer/>
	                  </li>
                </ul>
            </div> */}

            {/* Footer */}
            <div id="sidebar-footer" className="mt-auto">
                <div id="footer-card" className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center">
                    <div id="footer-text" className="text-white text-sm">
                        <span>Please organize your menus through button below!</span>
                        <div id="add-menu-button" className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2">
                            <span className="text-gray-600 flex items-center"><AiOutlinePlus />Add Menus</span>
                        </div>
                    </div>
                    <img id="footer-avatar" src="https://avatar.iran.liara.run/public/28" className="w-20 rounded-full" />
                </div>
                <span id="footer-brand" className="font-bold text-gray-400">Sedap Restaurant Admin Dashboard</span>
                <p id="footer-copyright" className="font-light text-gray-400">&copy; 2025 All Right Reserved</p>
            </div>
        </div>
    );
}


