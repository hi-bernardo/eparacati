function Overlay({ customClass, closeMenuFunc}) {
   return (
      <div
         className={`w-screen h-screen fixed bg-black opacity-80 ${customClass}`}
         onClick={closeMenuFunc}
      ></div>
   );
}
export default Overlay;
