import React from 'react';
import { AlertContainer } from 'react-custom-alert';

import Buttons from './Buttons';

const SelectInput = ({ selectData }) => {
  const { nextPage, backPage, state, setState, retrieveData, allInputs } = selectData;
  const buttonData = { nextPage, backPage, state, retrieveData };

  return (
    <>
      <form>
        <label htmlFor='locationsOptions' aria-label='choose a location'>
          <select
            onChange={(event) => setState(event.target.value)}
            value={state}
            id='locationsOptions'>
            {allInputs.map((locations) => (
              (locations === '-- choose a location --')
                ? <option key={locations} value=''>{locations}</option>
                : <option key={locations} value={locations}>{locations}</option>
            ))}
          </select>
        </label>
      </form>
      <AlertContainer floatingTime={2000} />
      <Buttons buttonData={buttonData} />
    </>
  )
}

export default SelectInput;
