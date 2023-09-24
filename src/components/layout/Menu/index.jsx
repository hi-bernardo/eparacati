//Hooks
import { useState } from "react";

//React router
import { Link, useLocation } from "react-router-dom";

//Icons
import {
   HiHome,
   HiBookOpen,
   HiNewspaper,
   HiMiniCalendarDays,
} from "react-icons/hi2";

//Logo
import Logo from "../../../assets/logos/LogoEP_V.svg";

//Components
import Overlay from "../Overlay";

function Menu() {
   //setando o estado do menu
   const [menuOpened, setMenuOpened] = useState(false);

   //verificando a rota atual
   const activeRoute = useLocation();
   const currentRoute = activeRoute.pathname;

   //Função que ativa e desativa o menu
   const toggleMenu = () => {
      setMenuOpened((current) => !current);
      document
         .getElementById("logo-sidebar")
         .classList.toggle("-translate-x-full");
   };
   const toggleProfileDropDown = () => {
      document.getElementById("dropdown-user").classList.toggle("hidden");
   };

   return (
      <>
         <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
               <div className="flex items-center justify-between">
                  <div className="flex items-center justify-start">
                     <button
                        onClick={toggleMenu}
                        data-drawer-target="logo-sidebar"
                        data-drawer-toggle="logo-sidebar"
                        aria-controls="logo-sidebar"
                        type="button"
                        className="md:hidden inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
                     >
                        <span className="sr-only">Abrir menu</span>
                        <svg
                           className="w-6 h-6"
                           aria-hidden="true"
                           fill="currentColor"
                           viewBox="0 0 20 20"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                           ></path>
                        </svg>
                     </button>
                     <Link to="/" className="flex ml-2 md:mr-24">
                        <img
                           src={Logo}
                           className="h-10 mr-3"
                           alt="EP Aracati Logo"
                        />
                     </Link>
                  </div>
                  <div className="flex items-center gap-7">
                     <div
                        className="hidden w-full md:block md:w-auto"
                        id="navbar-default"
                     >
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white md:dark:bg-gray-900 dark:border-gray-700">
                           <li>
                              <Link
                                 to="/"
                                 className={`${
                                    currentRoute == "/" ? "text-primary" : ""
                                 } block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primaryDark md:p-0 dark:text-white md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                                 aria-current="page"
                              >
                                 Início
                              </Link>
                           </li>
                           <li>
                              <Link
                                 to="/agendamentos"
                                 className={`${
                                    currentRoute.includes("agendamentos")
                                       ? "text-primary"
                                       : ""
                                 } block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primaryDark md:p-0 dark:text-white md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                              >
                                 Agendamentos
                              </Link>
                           </li>
                           <li>
                              <Link
                                 to="/livros"
                                 className={`${
                                    currentRoute.includes("livros")
                                       ? "text-primary"
                                       : ""
                                 } block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primaryDark md:p-0 dark:text-white md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                              >
                                 Livros
                              </Link>
                           </li>
                        </ul>
                     </div>

                     {/* Dropdown User */}
                     <div className="flex items-center ml-3">
                        <div>
                           <button
                              onClick={toggleProfileDropDown}
                              type="button"
                              className="flex text-sm bg-gray-900 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                              aria-expanded="false"
                              data-dropdown-toggle="dropdown-user"
                           >
                              <span className="sr-only">Open user menu</span>
                              <img
                                 className="w-8 h-8 rounded-full"
                                 src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                                 alt="user photo"
                              />
                           </button>
                        </div>
                        <div
                           className="z-50 top-10 right-3 absolute hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-600"
                           id="dropdown-user"
                        >
                           <div className="px-4 py-3" role="none">
                              <p
                                 className="text-sm text-gray-900 dark:text-white"
                                 role="none"
                              >
                                 Aluno
                              </p>
                              <p
                                 className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                                 role="none"
                              >
                                 aluno@aluno.ce.gov.br
                              </p>
                           </div>
                           <ul className="py-1" role="none">
                              <li>
                                 <Link
                                    to="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                    role="menuitem"
                                 >
                                    Perfil
                                 </Link>
                              </li>
                              <li>
                                 <Link
                                    to="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                    role="menuitem"
                                 >
                                    Configurações
                                 </Link>
                              </li>
                              <li>
                                 <Link
                                    to="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                    role="menuitem"
                                 >
                                    Sair
                                 </Link>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </nav>

         {/* Mobile Menu */}
         <aside
            id="logo-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 dark:bg-gray-900 dark:border-gray-700"
            aria-label="Sidebar"
         >
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-900">
               <ul className="space-y-2 font-medium">
                  <li>
                     <Link
                        to="/"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 group"
                     >
                        <HiHome className="text-2xl dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white text-gray-500" />
                        <span className="ml-3">Início</span>
                     </Link>
                  </li>
                  <li>
                     <Link
                        to="/agendamentos"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 group"
                     >
                        <HiMiniCalendarDays className="text-2xl dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white text-gray-500" />
                        <span className="ml-3">Agendamentos</span>
                     </Link>
                  </li>
                  <li>
                     <Link
                        to="/blog"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 group"
                     >
                        <HiNewspaper className="text-2xl text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                        <span className="flex-1 ml-3 whitespace-nowrap">
                           Blog
                        </span>
                        <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-300">
                           3
                        </span>
                     </Link>
                  </li>
                  <li>
                     <Link
                        to="/livros"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 group"
                     >
                        <HiBookOpen className="text-2xl dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white text-gray-500" />
                        <span className="flex-1 ml-3 whitespace-nowrap">
                           Livros
                        </span>
                     </Link>
                  </li>
               </ul>
            </div>
         </aside>
         {menuOpened && (
            <Overlay customClass="z-20" closeMenuFunc={toggleMenu} />
         )}
      </>
   );
}
export default Menu;
