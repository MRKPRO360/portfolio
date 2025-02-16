function Cta({
  text,
  color = 'light',
  disabled = false,
  fullWidth = false,
  href,
  download,
}: {
  text: string;
  color?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  href?: string;
  download?: string;
}) {
  return href ? (
    <a
      href={href}
      download={download}
      className={`py-2 bg-backgroundGreen px-2 rounded-sm font-bold cursor-pointer ${
        color === 'light' ? 'text-textWhite' : 'text-textDark'
      } ${fullWidth && 'w-full block'} `}
    >
      {text}
    </a>
  ) : (
    <button
      disabled={disabled}
      type="submit"
      className={`py-2 bg-backgroundGreen px-2 rounded-sm font-bold cursor-pointer ${
        color === 'light' ? 'text-textWhite' : 'text-textDark'
      } ${fullWidth && 'w-full block'} ${disabled && 'cursor-not-allowed'}`}
    >
      {text}
    </button>
  );
}

export default Cta;
