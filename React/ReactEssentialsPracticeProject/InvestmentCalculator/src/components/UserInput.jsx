
const UserInput = ({ onChange,userInput}) => {



  return (
      <section id='user-input'>
          <div className='input-group'>
        
              <label htmlFor='initial-investment'>INITIAL INVESTMENT</label>
        <input name="initialInvestment" required value={userInput.initialInvestment} onChange={(e)=>onChange(e.target.name,e.target.value)}  type="number" id='initial-investment' />
      
        
        <label htmlFor='annual-investment'>ANNUAL INVESTMENT</label>
        <input name="annualInvestment" required value={userInput.annualInvestment} onChange={(e)=>onChange(e.target.name,e.target.value)}  type="number" id='annual-investment' />
        
        </div>
        <div className='input-group'>
        
              <label htmlFor='expected-return'>EXPECTED RETURN</label>
        <input name="expectedReturn" required value={userInput.expectedReturn} onChange={(e)=>onChange(e.target.name,e.target.value)}  type="number" id='expected-return' />
        
     
        <label htmlFor='duration'>DURATION</label>
              <input
                  name="duration"
                  required
                  value={userInput.duration}
                  onChange={(e) => onChange(e.target.name, e.target.value)} type="number" id='duration' />    
    
            
        </div>
        
    </section>
  )
}

export default UserInput