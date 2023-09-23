function Table(props) {
	return (
		<div className="flex flex-col gap-4">
			<h2 className="text-gray-900 text-2xl font-semibold dark:text-white">
				{props.label}
			</h2>
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3">
								{props.identification || "N°"}
							</th>
							<th scope="col" className="px-6 py-3">
								Data
							</th>
							<th scope="col" className="px-6 py-3">
								Professor
							</th>
							<th scope="col" className="px-6 py-3">
								Turma
							</th>
							<th scope="col" className="px-6 py-3">
								Horário Inicial
							</th>
							<th scope="col" className="px-6 py-3">
								Horário Final
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<td className="px-6 py-4">{props.value || "-"}</td>
							<td className="px-6 py-4">{props.date || "-"}</td>
							<td className="px-6 py-4">{props.teacher || "-"}</td>
							<td className="px-6 py-4">{props.classroom || "-"}</td>
							<td className="px-6 py-4">{props.startTime || "-"}</td>
							<td className="px-6 py-4">{props.endTime || "-"}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Table;
