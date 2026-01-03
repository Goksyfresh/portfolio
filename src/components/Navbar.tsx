import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { useHeader } from "../hooks/useHeader";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const { currentItem, theme, toggleTheme } = useHeader();
    const [isOpen, setIsOpen] = useState(false);  
    
    
const location = useLocation();

useEffect(() => {
  setIsOpen(false);
}, [location.pathname]);
const handleMenuToggle = () => {
    setIsOpen(!isOpen);
}
    return (
        <nav className="fixed top-0 left-0 z-40 w-full bg-transparent px-6 py-8">
            <div className="mx-auto max-w-60 rounded-full border border-[#CBC3B9] bg-transparent px-6 py-2 backdrop-blur">
                <div className="flex items-center justify-between text-nowrap transition duration-200">
                    <Link to="/" className="cursor-pointer">
                        <IoHomeOutline
                            className='h-6 w-6 
                                    [color:var(--heading_1_color)]
                                    '
                        />
                    </Link>
                    
                        <button
                            onClick={toggleTheme}
                            className="cursor-pointer"
                        >
                            {theme === "light" ? (
                                <SunIcon className="h-5 w-5 text-yellow-400" />
                            ) : (
                                <MoonIcon className="h-5 w-5 text-gray-300" />
                            )}
                        </button>
                        {isOpen && (
                            <div className="absolute top-16 left-1/2 -translate-x-1/2 bg-[var(--background-color)] border border-[#CBC3B9] rounded-lg shadow-lg py-8 px-20 flex flex-col gap-4">
                                <Link to="/bio" className={`[color:var(--text-color)] hover:[color:var(--link-hover)]`}>About Me</Link>
                                <Link to="/experience" className={`[color:var(--text-color)] hover:[color:var(--link-hover)]`}>Experience</Link>
                                <Link to="/blog" className={`[color:var(--text-color)] hover:[color:var(--link-hover)]`}>Blog</Link>
                                <Link to="/contact" className={`[color:var(--text-color)] hover:[color:var(--link-hover)]`}>Contact</Link>
                            </div>
                        )}  
                        <button
                        onClick={handleMenuToggle}
                            className='h-8 w-8 
                                    [color:var(--heading_1_color)]
                                    '
                        >
                            {isOpen ? <IoIosClose size={20} /> : <GiHamburgerMenu />}
                        </button>
                
                </div>
            </div>
        </nav>
    );
}
