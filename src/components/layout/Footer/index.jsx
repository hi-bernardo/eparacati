// Logo
import Logo from "../../../assets/logos/LogoEP_V.svg";

import { HiOutlineBuildingOffice } from "react-icons/hi2";

function Footer() {
   const date = new Date();

   return (
      <footer className="bg-white dark:bg-gray-900">
         <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="lg:flex lg:justify-between">
               <div className="mb-6 lg:mb-0">
                  <a href="/" className="flex items-center w-fit">
                     <img src={Logo} className="h-8 mr-3" alt="EP Logo" />
                     <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
                        EP Aracati
                     </span>
                  </a>
               </div>
               <div className="grid grid-cols-2 gap-8 sm:gap-6">
                  <div>
                     <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                        LEGAL
                     </h2>
                     <ul className="text-gray-500 dark:text-gray-400 font-medium sm:flex flex-row sm:gap-4">
                        <li className="mb-4">
                           <a
                              href="https://www.instagram.com/eparacati/"
                              className="hover:underline "
                           >
                              Polícia de privacidade
                           </a>
                        </li>
                        <li>
                           <a
                              href="https://www.instagram.com/gremioadolfocaminha/"
                              className="hover:underline"
                           >
                              Termos e serviços
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                        PROJETO
                     </h2>
                     <ul className="text-gray-500 dark:text-gray-400 font-medium sm:flex flex-row sm:gap-4">
                        <li className="mb-4">
                           <a
                              href="https://github.com/Brazoo/eparacati"
                              className="hover:underline"
                           >
                              Repositório
                           </a>
                        </li>
                        <li className="mb-4">
                           <a
                              href="https://github.com/hi-bernardo/eparacati"
                              className="hover:underline"
                           >
                              Sobre
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
               <span className="flex items-center align-middle text-sm text-gray-500 sm:text-center gap-1 dark:text-gray-400">
                  <HiOutlineBuildingOffice className="text-2xl" />
                  EEEP Professora Elsa Maria Porto Costa Lima 2009 -{" "}
                  {date.getFullYear()}.
               </span>
               <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                  <a
                     href="https://www.facebook.com/eeparacati"
                     className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                     <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 8 19"
                     >
                        <path
                           fill-rule="evenodd"
                           d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                           clip-rule="evenodd"
                        />
                     </svg>
                     <span className="sr-only">Facebook page</span>
                  </a>
                  <a
                     href="https://www.instagram.com/eparacati/"
                     className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                     <svg
                        className="h-4 w-4 text-gray-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     >
                        <rect
                           x="2"
                           y="2"
                           width="20"
                           height="20"
                           rx="5"
                           ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{" "}
                        <line x1="17.5" y1="g6.5" x2="17.51" y2="6.5" />
                     </svg>
                     <span className="sr-only">Instagram perfil</span>
                  </a>
                  <a
                     href="https://qedu.org.br/escola/23265426-eeep-professora-elsa-maria-porto-costa-lima"
                     className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                     <svg
                        width="17"
                        height="17"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className=""
                     >
                        <path
                           d="M42.3164 32.8406H29.1721V46.3459H42.3164V32.8406Z"
                           fill="#7B8794"
                        ></path>
                        <path
                           d="M42.3164 32.8406H29.1721V46.3459H42.3164V32.8406Z"
                           fill="#7B8794"
                        ></path>
                        <path
                           d="M21.2764 26.1174V39.7343L29.1824 46.3706V32.8694H42.3295L34.3449 26.1174H21.2764Z"
                           fill="#7B8794"
                        ></path>
                        <path
                           d="M21.2764 26.1174V39.7343L29.1824 46.3706V32.8694"
                           fill="#7B8794"
                        ></path>
                        <path
                           d="M5.90212 13.1738C7.77488 11.1851 10.0057 9.64238 12.5945 8.54571C14.8206 7.60227 17.2483 7.06441 19.8778 6.9321C20.3239 6.89078 20.7754 6.87123 21.2419 6.87123C21.7669 6.87123 22.2795 6.89905 22.7806 6.94881C24.1939 7.08621 25.5725 7.46787 26.8548 8.07677C28.5216 8.87216 29.9838 10.0384 31.1289 11.4859C32.3052 12.9476 33.2144 14.6952 33.8564 16.7288C34.4945 18.763 34.8148 21.0183 34.8174 23.4949V25.1856L42.3509 31.4437C42.355 26.872 42.355 23.5554 42.355 23.4949C42.355 20.0829 41.8394 16.9689 40.8083 14.1529C39.7699 11.3424 38.3227 8.94279 36.4668 6.95412C34.6051 4.96561 32.3752 3.42292 29.7772 2.32605C27.1752 1.22712 24.3081 0.678253 21.1761 0.679445C18.0471 0.679445 15.1866 1.22831 12.5947 2.32605C10.0069 3.42218 7.77607 4.96487 5.90237 6.95412C4.03233 8.93991 2.58128 11.3395 1.54924 14.1529C0.514851 16.9691 -0.00156097 20.0832 3.54412e-06 23.4949C3.54412e-06 24.5649 0.0470612 25.613 0.146243 26.6278C0.346835 24.4918 0.81819 22.3899 1.54899 20.3725C2.58211 17.5592 4.03315 15.1596 5.90212 13.1738Z"
                           fill="url(#paint0_linear)"
                        ></path>
                        <path
                           d="M15.5636 38.9403C13.892 38.1592 12.4191 37.0107 11.2548 35.5808C10.0617 34.1274 9.13221 32.3779 8.46639 30.3323C8.07857 29.1223 7.80716 27.8782 7.65583 26.6168C7.53133 25.5808 7.47 24.5381 7.47217 23.4947C7.47217 20.9904 7.7938 18.7233 8.44854 16.6792C9.10064 14.6411 10.0339 12.8883 11.2409 11.4349C12.4201 9.99753 13.9089 8.84442 15.5964 8.06156C16.9462 7.43704 18.3955 7.05473 19.8781 6.93213C17.2482 7.06427 14.8203 7.60218 12.5944 8.54586C10.0066 9.64495 7.77574 11.1876 5.902 13.1737C4.03228 15.1595 2.58126 17.5591 1.54893 20.3726C0.817834 22.39 0.346373 24.492 0.145874 26.628C0.364082 28.851 0.821207 30.9287 1.51725 32.8613C2.52541 35.6745 3.95472 38.0806 5.80516 40.0795C7.65577 42.0817 9.88108 43.6244 12.4811 44.7075C14.8593 45.699 17.5024 46.2204 20.3832 46.3048H27.4123L19.8943 40.0599C18.3957 39.9458 16.9293 39.5667 15.5636 38.9403Z"
                           fill="url(#paint1_linear)"
                        ></path>

                        <defs>
                           <linearGradient
                              id="paint0_linear"
                              x1="0"
                              y1="16.0616"
                              x2="42.355"
                              y2="16.0616"
                              gradientUnits="userSpaceOnUse"
                           >
                              <stop stop-color="#7B8794"></stop>
                              <stop offset="1" stop-color="#7B8794"></stop>
                           </linearGradient>
                           <linearGradient
                              id="paint1_linear"
                              x1="3.71778"
                              y1="15.6729"
                              x2="36.9947"
                              y2="29.5174"
                              gradientUnits="userSpaceOnUse"
                           >
                              <stop stop-color="#7B8794"></stop>
                              <stop offset="1" stop-color="#7B8794"></stop>
                           </linearGradient>
                        </defs>
                     </svg>
                     <span className="sr-only">Instagram perfil</span>
                  </a>
               </div>
            </div>
         </div>
      </footer>
   );
}
export default Footer;
