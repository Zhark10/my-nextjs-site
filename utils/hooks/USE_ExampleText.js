import React from 'react';

const useExampleText = inputChangeFunction => {
  const inputRef = React.useRef(null);
  const initialText = 'Sport news';
  const [wordIndex, setWordIndex] = React.useState(0);

  React.useEffect(() => {
    if (inputRef.current && wordIndex <= initialText.length) {
      const interval = setTimeout(() => {
        const text = initialText.slice(0, wordIndex);
        inputChangeFunction(text);
        setWordIndex(current => current + 1);
      }, 100);
      return () => clearTimeout(interval);
    }
    return () => {};
  }, [inputRef, wordIndex]);

  return inputRef;
};

export default useExampleText;
