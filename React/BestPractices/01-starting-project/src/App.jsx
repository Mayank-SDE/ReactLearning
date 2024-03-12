import Accordion from './components/Accordion/Accordion';
import AccordionContent from './components/Accordion/AccordionContent';

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item id="1" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              We got 20 years of experience.
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>You can&apos;t go wrong with us ?</p>
                <p>
                  We are in the business of planning highly individualized
                  business trips of more than 20 years.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id="2" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              We got 20 years of experience.
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>You can&apos;t go wrong with us ?</p>
                <p>
                  We are in the business of planning highly individualized
                  business trips of more than 20 years.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
