import { HiPlusCircle } from "react-icons/hi2";

function Button() {
	return (
		<a href="/agendar" className="w-full flex gap-2 justify-end items-center">
			<button className="bg-transparent hover:bg-primaryDark text-primary hover:text-white border border-primary hover:border-transparent font-semibold rounded px-4 py-2 w-80 max-sm:w-full ">
				Agendar
			</button>
			<HiPlusCircle className="text-4xl text-primary" />
		</a>
	);
}

export default Button;
