import React from 'react';

interface TaxResultProps {
  tax: number;
}

const TaxResult: React.FC<TaxResultProps> = ({ tax }) => {
  return (
    <div className="mt-4 p-4 border border-gray-300 rounded-md">
      <h2 className="text-xl">Calculated Tax: ${tax.toFixed(2)}</h2>
    </div>
  );
};

export default TaxResult;
