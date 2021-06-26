import React from 'react';
import logo from '../img/logo.svg';
import MenuMobile from  '../components/Navbar/Humbuger';

export default function Navbar() {

    return (
        <div className="h-96 w-auto py-12 px-12 z-50 absolute top-0 ">
            {/* desktop navbar*/}
            <div className="hidden lg:block">
                <div className="flex items-center space-x-20 ">
                    <div>
                        <img src={logo} alt="logo" className="w-auto" />
                    </div>
                    <div className="flex space-x-8">
                        <a href="#" className="text-white font-semibold border-b-2 border-transparent hover:border-white">home</a>
                        <a href="#" className="text-white font-semibold border-b-2 border-transparent hover:border-white">shop</a>
                        <a href="#" className="text-white font-semibold border-b-2 border-transparent hover:border-white">about</a>
                        <a href="#" className="text-white font-semibold border-b-2 border-transparent hover:border-white">contact</a>
                    </div>
                </div>
            </div>

            {/* mobile navbar*/}
            <div className="block w-full lg:hidden">
                <div className="ml-24" >
                    <img src={logo} alt="logo" className="w-auto" />
                </div>
                <MenuMobile>
                    <a href="#" className="text-black font-semibold ">home</a>
                    <a href="#" className="text-black font-semibold ">shop</a>
                    <a href="#" className="text-black font-semibold ">about</a>
                    <a href="#" className="text-black font-semibold ">contact</a>
                </MenuMobile>
            </div>
        </div>
    );

}