import {Link} from "react-router-dom";
import { HiPlus } from "react-icons/hi2";

function DropdownButton({ dropdownFunc }) {
   const toggleDropdown = () => {
      document.getElementById("dropdown").classList.toggle("hidden");
   };

   return (
      <div>
         {/* Button */}
         <button
            className="flex gap-2 justify-center items-center bg-primaryDark hover:bg-primary text-white text-sm font-semibold rounded-lg px-3 py-2"
            onClick={toggleDropdown}
         >
            <HiPlus className="text-white text-xl" />
            Agendar
         </button>

         {/* Dropdown */}
         <div
            className="hidden bottom-70 absolute my-4 text-base drop-shadow bg-gray-50 divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 border dark:border-gray-500 w-30"
            id="dropdown"
         >
            <Link
               to="/agendar/projetor"
               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
               role="menuitem"
            >
               Projetores
            </Link>

            <Link
               to="/agendar/notebook"
               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
               role="menuitem"
            >
               Notebooks
            </Link>

            <Link
               to="/agendar/caixa-de-som"
               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
               role="menuitem"
            >
               Caixas de Som
            </Link>

            <Link
               to="/agendar/sala"
               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
               role="menuitem"
            >
               Salas
            </Link>
         </div>
      </div>
   );
}

export default DropdownButton;
