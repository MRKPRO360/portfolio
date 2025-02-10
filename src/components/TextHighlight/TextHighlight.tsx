function TextHighlight({ text }: { text: string }) {
  return (
    <p className="text-sm tracking-widest uppercase text-amber-500 font-semibold mb-2 md:mb-3">
      {text}
    </p>
  );
}

export default TextHighlight;
