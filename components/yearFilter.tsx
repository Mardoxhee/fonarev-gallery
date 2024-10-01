'use client'; // Marque le composant comme client-side

import { useSearchParams } from 'next/navigation';

const months = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];

export default function MonthFilter() {
  const searchParams = useSearchParams();
  const year = searchParams.get('year');

  // Affiche seulement les mois à partir d'août si l'année est 2023
  let filteredMonths = months;
  if (year === '2023') {
    filteredMonths = months.slice(7); // Affiche de août à décembre
  }

  return (
    <div className="flex flex-wrap justify-center -mx-2">
      {filteredMonths.map((month, index) => (
        <a
          key={index}
          href={`#${month.toLowerCase()}`}
          className="mx-2 mb-4 flex items-center justify-center rounded-md bg-primary bg-opacity-[15%] px-6 py-2 text-base font-medium text-primary transition hover:bg-primary hover:text-white"
        >
          {month}
        </a>
      ))}
    </div>
  );
}
