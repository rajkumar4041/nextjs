'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/dbProducts', label: 'DB Products' },
  { href: '/redux', label: 'Redux' },
  { href: '/contact', label: 'Contact' },
  { href: '/lectures', label: 'Lectures' },
  { href: '/products', label: 'Products' },
  { href: '/charts', label: 'Charts' },
  { href: '/blogs', label: 'Blogs' },
];

const Navbar = () => {
  // const pathName = usePathname();

  return (
    // <nav className="navbar nav">
    //   <div className="navbar-brand">
    //     <a href="/">MyApp</a>
    //   </div>
    //   <ul className="navbar-menu flex gap-4">
    //     {links.map((link) => (
    //       <li
    //         key={link.href}
    //         className={pathName === link.href ? 'bg-blue-500 text-white px-2' : ''}
    //       >
    //         <Link href={link.href} replace>
    //           {link.label}
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>
    // </nav>
    <Nav />
  );
};

export default Navbar;

const Nav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathName = usePathname();

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full h-[100%]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Next js"
            width={32}
            height={32}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Next js
          </span>
        </Link>

        {/* Right section: Avatar and Hamburger */}
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* User Avatar */}
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            type="button"
            className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            aria-expanded={dropdownOpen}
          >
            <span className="sr-only">Open user menu</span>
            <Image
              src="/docs/images/people/profile-picture-3.jpg"
              alt="User Photo"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full"
            />
          </button>

          {/* Dropdown menu */}
          {dropdownOpen && (
            <div
              className="z-50 absolute top-16 right-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">Rajkumar Rathod</span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                  rajkumarrathod414@gmail.com
                </span>
              </div>
              <ul className="py-2">
                {links.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Hamburger menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 17 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`${menuOpen ? 'flex' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {links.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className={`block py-2 px-3 rounded-sm ${
                    item.href === pathName
                      ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500'
                      : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white'
                  } md:p-0`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
