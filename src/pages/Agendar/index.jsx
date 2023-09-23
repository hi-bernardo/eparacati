import Datepicker from "../../components/context/Datepicker";
import Select from "../../components/layout/Select";

function Agendamento() {
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

   return (
      <main className="mt-20 max-w-[750px] mx-auto p-4 flex flex-col gap-7">
         <h2 className="text-2xl font-bold text-white text-center">Agendar Equipamento</h2>
         <div className="flex max-md:flex-col gap-6 justify-between items-center">
            <Datepicker />
            <div className="flex flex-col gap-8 w-full">
               <Select
                  label="Disponíveis:"
                  placeholder="Escolha o equipamento disponível"
                  options={selectDisponiveis.options}
               />
               <Select
                  label="Turma:"
                  placeholder="Escolha uma turma"
                  options={selectTurma.options}
               />
               <Select
                  label="Horário de início:"
                  placeholder="Escolha o horário de início"
                  options={selectAula.options}
               />
               <Select
                  label="Horário de final"
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
            >
               Agendar
            </button>
         </div>
      </main>
   );
}
export default Agendamento;
