import Table from "../../components/context/Table";
import Button from "../../components/context/Button";

function Agendamentos() {
	return (
		<main className="mt-20 mx-auto w-full max-w-screen-xl p-4 flex flex-col gap-8">
			<h1 className="text-gray-900 text-3xl font-bold dark:text-white">Agendamentos</h1>
			<div className="flex flex-col gap-4">
				<h2 className="text-gray-900 text-2xl font-semibold dark:text-white">Projetores</h2>
				<Table
					value=""
					date=""
					startTime=""
					endTime=""
					teacher=""
					classroom=""
				/>
			</div>
			<div className="flex flex-col gap-4">
				<h2 className="text-gray-900 text-2xl font-semibold dark:text-white">Salas</h2>
				<Table
					identification="Nome"
					value=""
					date=""
					startTime=""
					endTime=""
					teacher=""
					classroom=""
				/>
			</div>
			<div className="flex flex-col gap-4">
				<h2 className="text-gray-900 text-2xl font-semibold dark:text-white">Notebooks</h2>
				<Table
					value=""
					date=""
					startTime=""
					endTime=""
					teacher=""
					classroom=""
				/>
			</div>
			<div className="flex flex-col gap-4">
				<h2 className="text-gray-900 text-2xl font-semibold dark:text-white">Sons</h2>
				<Table
					value=""
					date=""
					startTime=""
					endTime=""
					teacher=""
					classroom=""
				/>
			</div>
			<Button />
		</main>
	);
}

export default Agendamentos;
