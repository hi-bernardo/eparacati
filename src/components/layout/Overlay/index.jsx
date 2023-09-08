function Overlay({ customClass }) {
   return (
      <div
         className={`w-screen h-screen fixed bg-black opacity-80 ${customClass}`}
      ></div>
   );
}
export default Overlay;
