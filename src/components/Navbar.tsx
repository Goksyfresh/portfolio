import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { useHeader } from "../hooks/useHeader";
import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Navbar() {
    const { currentItem, theme, toggleTheme } = useHeader();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    useGSAP(() => {
        if (menuRef.current) {
            if (isOpen) {
                // Animate menu opening
                gsap.fromTo(
                    menuRef.current,
                    {
                        opacity: 0,
                        scale: 0.8,
                        y: -30,
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "back.out(1.5)",
                    }
                );

                // Animate menu items with stagger
             
            }
        }
    }, [isOpen]);

    return (
        <nav className="fixed top-0 left-0 z-40 w-full bg-transparent px-6 py-8">
            <div className="mx-auto max-w-60 rounded-full border border-[#CBC3B9] bg-transparent px-6 py-2 backdrop-blur">
                <div className="flex items-center justify-between text-nowrap transition duration-200">
                    <Link to="/" className="cursor-pointer transition-transform hover:scale-110">
                        <IoHomeOutline
                            className="h-6 w-6 [color:var(--heading_1_color)]"
                        />
                    </Link>
                    
                    <button
                        onClick={toggleTheme}
                        className="cursor-pointer transition-transform hover:scale-110 active:scale-95"
                    >
                        {theme === "light" ? (
                            <SunIcon className="h-5 w-5 text-yellow-400" />
                        ) : (
                            <MoonIcon className="h-5 w-5 text-gray-300" />
                        )}
                    </button>

                    {isOpen && (
                        <div
                            ref={menuRef}
                            id="menu-item"
                            className="absolute top-16 left-1/2 -translate-x-1/2 bg-[var(--background-color)] border border-[#CBC3B9] rounded-lg shadow-lg py-8 px-20 flex flex-col gap-4"
                        >
                            <Link
                                to="/bio"
                                className="[color:var(--text-color)] hover:[color:var(--link-hover)] transition-all hover:translate-x-1"
                            >
                                About Me
                            </Link>
                            <Link
                                to="/experience"
                                className="[color:var(--text-color)] hover:[color:var(--link-hover)] transition-all hover:translate-x-1"
                            >
                                Experience
                            </Link>
                            <Link
                                to="/blog"
                                className="[color:var(--text-color)] hover:[color:var(--link-hover)] transition-all hover:translate-x-1"
                            >
                                Blog
                            </Link>
                            <Link
                                to="/contact"
                                className="[color:var(--text-color)] hover:[color:var(--link-hover)] transition-all hover:translate-x-1"
                            >
                                Contact
                            </Link>
                        </div>
                    )}
                    
                    <button
                        onClick={handleMenuToggle}
                        className="h-8 w-8 [color:var(--heading_1_color)] transition-transform hover:scale-110 active:scale-95"
                    >
                        {isOpen ? <IoIosClose size={20} /> : <GiHamburgerMenu />}
                    </button>
                </div>
            </div>
        </nav>
    );
}