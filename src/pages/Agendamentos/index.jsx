import Table from "../../components/context/Table";
import EmptyStates from "../../components/context/EmptyStates";
import Alert from "../../components/layout/Alert";

function Agendamentos() {
	return (
		<main className="mt-20 mx-auto w-full max-w-screen-xl p-4 flex flex-col gap-8">
			<h1 className="text-gray-900 text-3xl font-bold dark:text-white">
				Agendamentos
			</h1>
			<EmptyStates/>
		</main>
	);
}

export default Agendamentos;
