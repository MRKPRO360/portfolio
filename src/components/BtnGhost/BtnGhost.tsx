import { ImArrowRight2 } from 'react-icons/im';

function BtnGhost({ border = true }: { border?: boolean }) {
  return (
    <button
      className={`hover:text-amber-600 transition duration-300 flex items-center gap-1 ${
        border && 'border px-2'
      } border-backgroundLight py-2  rounded-sm hover:border-backgroundDark`}
    >
      <span>Read More</span>
      <ImArrowRight2 />
    </button>
  );
}

export default BtnGhost;
