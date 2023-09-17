function Select({ label, options }) {
   const selectId = Math.random(1, 99);

   return (
      <>
         <label
            for={`select-${selectId}`}
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-50 font-semibold"
         >
            {label}
         </label>
         <select
            id={`select-${selectId}`}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-900 dark:border-gray-800 dark:placeholder-gray-400 dark:text-gray-50 dark:focus:ring-primary dark:focus:border-primary"
         >
            {options.map((option) => (
               <option value={option.value}>{option.title}</option>
            ))}
         </select>
      </>
   );
}
export default Select;
