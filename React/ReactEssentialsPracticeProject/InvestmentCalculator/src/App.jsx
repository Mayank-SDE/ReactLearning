import React,{useState} from 'react';
import { calculateInvestmentResults,formatter } from './util/investment.js';
import investmentImage from './assets/investment-calculator-logo.png';
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';
function App() {


  
  let [userInput, setUserInput] = useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration: 10
  });
  
  const inputIsValid = userInput.duration >= 1; 
    
    function inputHandler(inputIdentifier,newValue) {

        setUserInput((prevState) => { 
            return {
                ...prevState,
                [inputIdentifier]: +newValue
            };
        });
    }
  
  return <>
    <Header />
    <UserInput onChange={inputHandler} userInput={userInput} />
    {!inputIsValid && <p className='center'>Please enter duration greater than zero.</p>}
    {inputIsValid && <Results input={userInput} />}
  </>;
 

}

export default App
