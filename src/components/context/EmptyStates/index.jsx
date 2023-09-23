// Components
import DropdownButton from "../DropdownButton";

// Ícones
import { HiOutlineFolderPlus } from "react-icons/hi2";

function EmptyStates() {

	return (
		<div className="px-4 py-12 bg-white dark:bg-gray-800 w-full rounded-lg flex flex-col gap-3 items-center text-sm border-2 border-zinc-300 dark:border-slate-400 shadow-md">
			<HiOutlineFolderPlus className="text-zinc-400 dark:text-white text-4xl" />
			<div className="text-center">
				<h2 className="text-black dark:text-white font-semibold">
					Sem agendamentos
				</h2>
				<p className="mt-1 text-zinc-500 dark:text-slate-200">
					Comece criando um novo agendamento.
				</p>
			</div>
			<DropdownButton/>
		</div>
	);
}

export default EmptyStates;
