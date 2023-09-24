import Datepicker from "../../components/context/Datepicker";
import Select from "../../components/layout/Select";

//React Router
import { useParams } from "react-router-dom";

//Firebase config
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
   apiKey: "AIzaSyCPxJND1td1DTHunO60n0QWzQj5_r-pUj0",
   authDomain: "eeparacati.firebaseapp.com",
   databaseURL: "https://eeparacati-default-rtdb.firebaseio.com",
   projectId: "eeparacati",
   storageBucket: "eeparacati.appspot.com",
   messagingSenderId: "161107487226",
   appId: "1:161107487226:web:affeab9b1cf488cfbcdc43",
   measurementId: "G-DCWRRY4QHC",
}; // Initialize Firebase

function Agendamento() {
   //Configurações firebase
   const app = initializeApp(firebaseConfig);
   const analytics = getAnalytics(app);
   const db = getDatabase(app);

   //Verificar qual rota de equipamento está em uso
   const { item } = useParams();
   let itemTitle = item.replace(/-/g, " ");
   itemTitle = itemTitle[0].toUpperCase() + itemTitle.substring(1);

   //Adicionando titulo ao window
   document.title = `Agendar ${itemTitle} - EP Aracati`;

   const selectDisponiveis = {
      options: [
         {
            value: "01",
            title: "01",
         },
         {
            value: "02",
            title: "02",
         },
         {
            value: "03",
            title: "03",
         },
         {
            value: "04",
            title: "04",
         },
         {
            value: "05",
            title: "05",
         },
      ],
   };

   const selectTurma = {
      options: [
         {
            value: "ser-1",
            title: "Sist. Energia Renováveis 1",
         },
         {
            value: "adm-2",
            title: "Administração 2",
         },
         {
            value: "adm-3",
            title: "Administração 3",
         },
         {
            value: "enf-1",
            title: "Enfermagem 1",
         },
         {
            value: "enf-2",
            title: "Enfermagem 2",
         },
         {
            value: "enf-3",
            title: "Enfermagem 3",
         },
         {
            value: "gui-1",
            title: "Guia de Turismo 1",
         },
         {
            value: "gui-2",
            title: "Guia de Turismo 2",
         },
         {
            value: "gui-3",
            title: "Guia de Turismo 3",
         },
         {
            value: "inf-1",
            title: "Informática 1",
         },
         {
            value: "inf-2",
            title: "Informática 2",
         },
         {
            value: "inf-3",
            title: "Informática 3",
         },
      ],
   };

   const selectAula = {
      options: [
         {
            value: "1-aula",
            title: "1° Aula",
         },
         {
            value: "2-aula",
            title: "2° Aula",
         },
         {
            value: "3-aula",
            title: "3° Aula",
         },
         {
            value: "4-aula",
            title: "4° Aula",
         },
         {
            value: "5-aula",
            title: "5° Aula",
         },
         {
            value: "6-aula",
            title: "6° Aula",
         },
         {
            value: "7-aula",
            title: "7° Aula",
         },
         {
            value: "8-aula",
            title: "8° Aula",
         },
         {
            value: "9-aula",
            title: "9° Aula",
         },
      ],
   };

   const setScheduleData = () => {
      // Criando um objeto que será adicionado a DB
      const scheduleData = {
         equipamento: document.getElementById("select-available").value,
         professor: "Lucas Davi da Silva",
         data: document.querySelector(".selected-day").getAttribute("value"),
         turma: document.getElementById("select-class").value,
         horarios: {
            horario_inicio: document.getElementById("select-startTime").value,
            horario_final: document.getElementById("select-endTime").value,
         },
      };
   };

   return (
      <main className="mt-20 max-w-[750px] mx-auto p-4 flex flex-col gap-7">
         <h2 className="text-2xl font-bold text-white text-center">
            Agendar {itemTitle ? itemTitle : "equipamento"}
         </h2>
         <div className="flex max-md:flex-col gap-6 justify-between items-center">
            <Datepicker />
            <div className="flex flex-col gap-8 w-full">
               <Select
                  label="Disponíveis:"
                  id="select-available"
                  placeholder="Escolha o equipamento disponível"
                  options={selectDisponiveis.options}
               />
               <Select
                  label="Turma:"
                  id="select-class"
                  placeholder="Escolha uma turma"
                  options={selectTurma.options}
               />
               <Select
                  label="Horário inicial:"
                  id="select-startTime"
                  placeholder="Escolha o horário de início"
                  options={selectAula.options}
               />
               <Select
                  label="Horário final"
                  id="select-endTime"
                  placeholder="Escolha o horário de final"
                  options={selectAula.options}
               />
            </div>
         </div>
         <div className="flex flex-row gap-5 justify-end">
            <button
               type="button"
               className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600"
            >
               Cancelar
            </button>
            <button
               type="button"
               className="text-white bg-primary hover:bg-primaryDark font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
               onClick={setScheduleData}
            >
               Agendar
            </button>
         </div>
      </main>
   );
}
export default Agendamento;
