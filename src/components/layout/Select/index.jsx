function Select({ id, label, placeholder, options }) {
   return (
      <div>
         <label
            htmlFor={id}
            className="block mb-2 text-sm text-gray-900 dark:text-gray-50 font-semibold"
         >
            {label}
         </label>
         <select
            id={id}
            className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-gray-50 dark:focus:ring-primary dark:focus:border-primary"
         >
            <option value="" disabled selected>
               {placeholder}
            </option>
            {options.map((option, i) => (
               <option value={option.value} key={`option-${i}`}>
                  {option.title}
               </option>
            ))}
         </select>
      </div>
   );
}
export default Select;
