import React, { useState } from 'react';

interface TruncatedTextProps {
  text: string;
  maxLength: number;
}

const TruncatedText: React.FC<TruncatedTextProps> = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  // Function to toggle truncation
  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  // Truncate the text if it exceeds the maxLength
  const displayText = isTruncated ? text.slice(0, maxLength) + '...' : text;

  return (
    <div>
      <p>{displayText}</p>
      {text.length > maxLength && (
        <button
          onClick={toggleTruncate}
          className="text-blue-500 hover:underline focus:outline-none"
        >
          {isTruncated ? 'See More' : 'See Less'}
        </button>
      )}
    </div>
  );
};

export default TruncatedText;