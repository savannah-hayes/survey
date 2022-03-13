import React, {useState} from 'react'

const WorkHoursInput = ({ changePage}) => {
  const [hours, setHours] = useState();

  return (
    <section className='page'>
      <h2>2. Would you prefer a company that offers flexible work hours?</h2>
      <form>
        <p>
        <label>
          <input 
            type='radio' 
            value='yes'
            onChange={event => setHours(event.target.value)}
            checked={hours === 'yes'} 
          />
          Yes
        </label>
        </p>
        <p>
        <label>
          <input 
            type='radio' 
            value='no'
            onChange={event => setHours(event.target.value)}
            checked={hours === 'no'} 
          />
          No
        </label>
      </p>
        <p>
          <label>
            <input
              type='radio'
              value='possibly'
              onChange={event => setHours(event.target.value)}
              checked={hours === 'possibly'}
            />
            Possibly, it would depend on the situation
          </label>
        </p>
      </form>
      <button onClick={() => { changePage()}}>Next</button>
    </section>
  )
}

export default WorkHoursInput;