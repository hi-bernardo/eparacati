// Components
import DropdownButton from "../DropdownButton";

// Ícones
import { HiOutlineFolderPlus } from "react-icons/hi2";

function EmptyStates() {
   const toggleDropdown = () => {
      document.getElementById("dropdown").classList.toggle("hidden");
   };

   return (
      <div className="px-4 py-12 bg-gray-50 dark:bg-gray-800 w-full rounded-lg flex flex-col gap-3 items-center text-sm border border-gray-200 dark:border-gray-700 shadow-md">
         <HiOutlineFolderPlus className="text-zinc-400 dark:text-white text-4xl" />
         <div className="text-center">
            <h2 className="text-black dark:text-white font-semibold">
               Sem agendamentos
            </h2>
            <p className="mt-1 text-zinc-500 dark:text-gray-100">
               Comece criando um novo agendamento.
            </p>
         </div>
         <DropdownButton />
      </div>
   );
}

export default EmptyStates;
