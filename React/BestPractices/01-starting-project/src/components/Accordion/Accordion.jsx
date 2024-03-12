import React, { createContext, useContext, useState } from 'react';
import AccordionItem from './AccordionItem.jsx';
import AccordionTitle from './AccordionTitle.jsx';
import AccordionContent from './AccordionContent.jsx';
const AccordionContext = createContext();

export const useAccordionContext = () => {
  const accordionContext = useContext(AccordionContext);

  if (!accordionContext) {
    throw new Error(
      'Accordion related components must be wrapped by accordions.'
    );
  }

  return accordionContext;
};

const Accordion = ({ className, children }) => {
  const [openItemId, setOpentItemId] = useState();

  function toggleItem(id) {
    setOpentItemId((prevId) => (prevId === id ? null : id));
  }

  const contextValue = {
    openItemId: openItemId,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
};

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
export default Accordion;
