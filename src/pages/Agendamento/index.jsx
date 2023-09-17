import Datepicker from "../../components/context/Datepicker";
import Select from "../../components/layout/Select";

function Agendamento() {
   const selectOptions = {
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
   return (
      <main className="mt-16 max-w-[960px] mx-auto p-4">
         <Datepicker />
         <Select label="Escolha da turma:" options={selectOptions.options} />
      </main>
   );
}
export default Agendamento;
