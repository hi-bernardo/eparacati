import Table from "../../components/context/Table";
import Button from "../../components/context/Button";

function Agendamentos() {
	return (
		<main className="mt-20 mx-auto w-full max-w-screen-xl p-4 flex flex-col gap-8">
			<h1 className="text-3xl font-bold text-white">Agendamentos</h1>
			<div className="flex flex-col gap-4">
				<h2 className="text-2xl font-semibold text-white">Projetores</h2>
				<Table
					value="50"
					date="30/02"
					class="7ª aula"
					teacher="Sicrano"
					classroom="Informática 2"
				/>
			</div>
			<div className="flex flex-col gap-4">
				<h2 className="text-2xl font-semibold text-white">Salas</h2>
				<Table
					identification="Nome"
					value="Audiovisual"
					date="03/11"
					class="5ª aula"
					teacher="Sicrano"
					classroom="Informática 2"
				/>
			</div>
			<div className="flex flex-col gap-4">
				<h2 className="text-2xl font-semibold text-white">Projetores</h2>
				<Table
					value="50"
					date="12/06"
					class="5ª aula"
					teacher="Sicrano"
					classroom="Informática 2"
				/>
			</div>
			<Button/>
		</main>
	);
}

export default Agendamentos;
