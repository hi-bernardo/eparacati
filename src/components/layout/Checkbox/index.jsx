function Checkbox({ id, label, options }) {
	return (
		<div>
			<label
				htmlFor={id}
				className="block mb-2 text-sm text-gray-900 dark:text-gray-50 font-semibold"
			>
				{label}
			</label>
			<div
				id={id}
				className="md:flex md:flex-col max-md:grid max-md:grid-rows-5 max-md:grid-flow-col md:h-32 md:overflow-y-auto md:rounded-lg md:bg-gray-50 md:border md:border-gray-300 md:dark:border-gray-700 md:dark:bg-gray-800 md:p-3 max-md:gap-2"
			>
				{options.map((option, i) => (
					<label
						key={`option-${i}`}
						className="text-gray-900 dark:text-gray-50 flex gap-2 md:p-2.5 rounded-lg text-sm md:hover:bg-gray-100 md:dark:hover:bg-gray-700"
					>
						<input
							type="checkbox"
							className="accent-primary w-4 h-4 focus:outline-primary outline-none"
							value={option.value}
						/>
						{option.title}
					</label>
				))}
			</div>
		</div>
	);
}
export default Checkbox;
