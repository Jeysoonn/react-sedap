import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  const menuclass =
    "font-poppins block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-poppins-extrabold">
            Sedap<b id="logo-dot" className="text-orange-700">.</b>
          </span>
        </a>

        <ul id="menu-list" className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
          <a href="" className={menuclass}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className={menuclass}>
              About
            </a>
          </li>
          <li>
            <a href="#" className={menuclass}>
              Services
            </a>
          </li>
          <li>
            <a href="#" className={menuclass}>
              Product
            </a>
          </li>
          <li>
            <a href="#" className={menuclass}>
              Contact
            </a>
          </li>
          <li>
            <button className="bg-biru  text-white px-4 py-2 rounded-lg">Create Account</button>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

