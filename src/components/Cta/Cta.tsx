function Cta({
  text,
  color = 'light',
  disabled = false,
  fullWidth = false,
}: {
  text: string;
  color?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}) {
  return (
    <button
      disabled={disabled}
      type="submit"
      className={`py-2 bg-backgroundGreen px-2 rounded-sm font-bold ${
        color === 'light' ? 'text-textWhite' : 'text-textDark'
      } ${fullWidth && 'w-full block'} `}
    >
      {text}
    </button>
  );
}

export default Cta;
