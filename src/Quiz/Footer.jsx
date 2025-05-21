import { AiOutlineYoutube } from "react-icons/ai"; 
import { AiOutlineFacebook } from "react-icons/ai"; 
import { BsInstagram } from "react-icons/bs"; 
export default function Footer() {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span id="footer-brand" className="font-bold text-gray-400">Sedap Restaurant Admin Dashboard</span>
        <p id="footer-copyright" className="font-light text-gray-400">&copy; 2025 All Right Reserved</p>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Social Media
              </a>
              <BsInstagram /><AiOutlineFacebook /><AiOutlineYoutube />
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Partner
              </a>
              <img id="footer-avatar" src="https://avatar.iran.liara.run/public/28" className="w-20 rounded-full" />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
