"use client";

import React, { useState } from 'react';
import TaxResult from './TaxResult';

const TaxForm: React.FC = () => {
  const [income, setIncome] = useState<string>('');
  const [deductions, setDeductions] = useState<string>('');
  const [credits, setCredits] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculateTax = (income: number, deductions: number, credits: number): number => {
    const taxableIncome = income - deductions;
    let tax = 0;

    if (taxableIncome <= 9875) {
      tax = taxableIncome * 0.1;
    } else if (taxableIncome <= 40125) {
      tax = 987.5 + (taxableIncome - 9875) * 0.12;
    } else if (taxableIncome <= 85525) {
      tax = 4617.5 + (taxableIncome - 40125) * 0.22;
    } else if (taxableIncome <= 163300) {
      tax = 14605.5 + (taxableIncome - 85525) * 0.24;
    } else if (taxableIncome <= 207350) {
      tax = 33271.5 + (taxableIncome - 163300) * 0.32;
    } else if (taxableIncome <= 518400) {
      tax = 47367.5 + (taxableIncome - 207350) * 0.35;
    } else {
      tax = 156235 + (taxableIncome - 518400) * 0.37;
    }

    tax -= credits;
    return tax < 0 ? 0 : tax;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const calculatedTax = calculateTax(Number(income), Number(deductions), Number(credits));
    setResult(calculatedTax);
  };

  return (
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Annual Income:</label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700">Deductions:</label>
          <input
            type="number"
            value={deductions}
            onChange={(e) => setDeductions(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700">Credits:</label>
          <input
            type="number"
            value={credits}
            onChange={(e) => setCredits(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Calculate Tax
        </button>
      </form>
      {result !== null && <TaxResult tax={result} />}
    </div>
  );
};

export default TaxForm;
