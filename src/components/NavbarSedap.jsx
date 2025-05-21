import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const menuClass =
    "block py-2 px-3 rounded-sm transition-all duration-200 font-poppins";

  const getLinkClass = ({ isActive }) =>
    `${menuClass} ${
      isActive
        ? "text-orange-700 dark:text-blue-400"
        : "text-gray-900 dark:text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 dark:hover:text-white"
    }`;

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="text-2xl font-semibold whitespace-nowrap dark:text-white font-poppins-extrabold">
            Sedap<b className="text-orange-700">.</b>
          </span>
        </Link>

        <ul
          id="menu-list"
          className="font-medium flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 mt-4 md:mt-0 
            border border-gray-100 md:border-0 rounded-lg bg-gray-50 md:bg-white 
            dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <NavLink to="/quiz" className={getLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutsedap" className={getLinkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/productsedap" className={getLinkClass}>
              Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/contactsedap" className={getLinkClass}>
              Contact
            </NavLink>
          </li>
          <li>
            <Link to="/registersedap">
              <button className="bg-biru text-white px-4 py-2 rounded-lg font-poppins hover:bg-blue-700 transition">
                Create Account
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
