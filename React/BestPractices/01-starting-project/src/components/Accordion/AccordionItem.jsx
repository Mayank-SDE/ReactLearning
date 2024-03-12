import React, { createContext, useContext } from 'react';

const AccordionItemContex = createContext();

export const useAccordionItemContext = () => {
  const ctx = useContext(AccordionItemContex);

  if (!ctx) {
    throw new Error(
      'AccordionItem related coimponenets must be wrapped by the AccordionItem Component'
    );
  }

  return ctx;
};

const AccordionItem = ({ id, className, children }) => {
  return (
    <AccordionItemContex.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItemContex.Provider>
  );
};

export default AccordionItem;
