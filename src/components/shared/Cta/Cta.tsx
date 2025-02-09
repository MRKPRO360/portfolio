function Cta({ text, color = 'light' }: { text: string; color?: string }) {
  return (
    <button
      type="submit"
      className={`py-[6px] bg-backgroundGreen px-2 rounded-sm font-semibold ${
        color === 'light' ? 'text-textWhite' : 'text-textDark'
      }`}
    >
      {text}
    </button>
  );
}

export default Cta;
