import { HiPlus } from "react-icons/hi2";

function DropdownButton() {
	const toggleDropdown = () => {
		document.getElementById("dropdown").classList.toggle("hidden");
	};

	return (
		<div>
			{/* Button */}
			<button
				className="flex gap-2 justify-center items-center bg-primaryDark hover:bg-primary text-white focus:ring-2 focus:ring-primaryLight text-sm font-semibold rounded px-3 py-1"
				onClick={toggleDropdown}
			>
				<HiPlus className=" text-white text-xl" />
				Agendar
			</button>

			{/* Dropdown */}
			<div
				className="bottom-70 absolute my-4 text-base drop-shadow bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 dark:border-2 dark:border-gray-500 w-30"
				id="dropdown"
			>
				<a
					href="#"
					className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
					role="menuitem"
				>
					Projetores
				</a>

				<a
					href="#"
					className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
					role="menuitem"
				>
					Notebooks
				</a>

				<a
					href="#"
					className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
					role="menuitem"
				>
					Caixas de Som
				</a>

				<a
					href="#"
					className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
					role="menuitem"
				>
					Salas
				</a>
			</div>
		</div>
	);
}

export default DropdownButton;
