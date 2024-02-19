import { useState } from 'react';

import { CORE_CONCEPTS ,EXAMPLES} from '../data.js';
import CoreConcept from './CoreConcept.jsx';
import TabButton from './TabButton.jsx';
const Main = () => { 

  const [selectedTopic,setSelectedTopic]=useState();



   const handleSelect = (selectedButton) => { 
     setSelectedTopic(selectedButton);
   };
  
  let tabContent = <p id='tab-content'>Please select a topic.</p>;

  if (selectedTopic) { 
    tabContent = <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>   
    </div>;
  }
    return  <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>

            {CORE_CONCEPTS.map((item) => { 
              return (
              <CoreConcept key={item.title}
                  {...item}
                />
              );
            })}
          </ul>

      </section>
      <section id='examples'>
        <h2>Examples</h2>
        <menu>
          <TabButton isSelected={selectedTopic==='components'} onSelect={() => handleSelect('components')}>Components</TabButton>
          <TabButton isSelected={selectedTopic==='jsx'}  onSelect={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic==='props'}  onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic==='state'}  onSelect={() => handleSelect('state')}>State</TabButton>
        </menu>
          {tabContent}
      </section>
      </main>;
};

export default Main;