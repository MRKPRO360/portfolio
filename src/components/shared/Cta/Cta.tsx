function Cta({ text }: { text: string }) {
  return (
    <button
      type="submit"
      className="py-[6px] bg-backgroundGreen px-2 rounded-sm font-semibold"
    >
      {text}
    </button>
  );
}

export default Cta;
