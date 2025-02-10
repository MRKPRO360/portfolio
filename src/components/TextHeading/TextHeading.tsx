import React from 'react';

function TextHeading({ text }: { text: string }) {
  return (
    <h3 className="text-2xl sm:text-3xl text-textWhite font-bold leading-10">
      {text}
    </h3>
  );
}

export default TextHeading;
