import React from 'react';

export const Sum = ({ titleOne = 0, titleTwo = 0 }) => {
  const result = titleOne + titleTwo;

  return (
    <p className="Sum">
      Sum of {titleOne} and {titleTwo} is {result}
    </p>
  );
};
