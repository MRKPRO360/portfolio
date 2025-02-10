function Cta({ text, color = 'light' }: { text: string; color?: string }) {
  return (
    <button
      type="submit"
      className={`py-2 bg-backgroundGreen px-2 rounded-sm font-bold ${
        color === 'light' ? 'text-textWhite' : 'text-textDark'
      }`}
    >
      {text}
    </button>
  );
}

export default Cta;
