import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

function Anchor({ title, href, target }) {
   return (
      <a href={href} className="flex align-middle items-center text-blue-500 no-underline" target={target ? target : ""}>
         {title} <HiMiniArrowTopRightOnSquare className="ml-1"/>
      </a>
   );
}
export default Anchor;
