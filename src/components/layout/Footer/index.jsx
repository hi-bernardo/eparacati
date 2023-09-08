// Logo
import Logo from "../../../assets/logos/LogoEP_V.svg";

function Footer() {
   return (
      
<footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                  <img src={Logo} class="h-8 mr-3" alt="EP Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">EP Aracati</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Instituição</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://qedu.org.br/escola/23265426-eeep-professora-elsa-maria-porto-costa-lima" class="hover:underline ">Escola EP de Aracati</a>
                      </li>
                      <li>
                          <a href="https://www.instagram.com/gremioadolfocaminha/" class="hover:underline">Grêmio Adolfo Caminha</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Siga-nos</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://instagram.com/hiago.bernard?igshid=NjIwNzIyMDk2Mg==" class="hover:underline">Hiago Bernardo</a>
                      </li>
                      <li class="mb-4">
                          <a href="https://instagram.com/l.daavii?utm_source=qr&igshid=YzU1NGVlODEzOA==" class="hover:underline">Lucas Davi</a>
                      </li>
                      <li class="mb-4">
                          <a href="https://instagram.com/luizleal.dev?igshid=NjIwNzIyMDk2Mg==" class="hover:underline">Luiz Leal</a>
                      </li>
                      <li class="mb-4">
                          <a href="https://instagram.com/mateusf.53?igshid=NjIwNzIyMDk2Mg==" class="hover:underline">Mateus Ferreira</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Repositório</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/Brazoo/eparacati.git" class="hover:underline">GitHub</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center flex dark:text-gray-400"><svg class="h-4 w-4 text-gray-500 mr-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="3" y1="21" x2="21" y2="21" />  <line x1="9" y1="8" x2="10" y2="8" />  <line x1="9" y1="12" x2="10" y2="12" />  <line x1="9" y1="16" x2="10" y2="16" />  <line x1="14" y1="8" x2="15" y2="8" />  <line x1="14" y1="12" x2="15" y2="12" />  <line x1="14" y1="16" x2="15" y2="16" />  <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" /></svg>  2009 <a href="https://www.instagram.com/eparacati/" class="hover:underline"><span class="mr-1"></span>EP Aracati™</a>. Todos os direitos reservados.
          </span>
          <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a href="https://www.facebook.com/eeparacati" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="https://www.instagram.com/eparacati/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="h-4 w-4 text-gray-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /> 
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span class="sr-only">Instagram perfil</span>
              </a>
          </div>
      </div>
    </div>
</footer>

   )
}
export default Footer;