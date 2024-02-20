import { useState } from 'react';
export function useInput(defaultValue, validationFunction) {
    const [enteredValues, setEnteredValue] = useState(defaultValue);

    const [didEdit, setDidEdit] = useState(false);

    const valueIsValid = validationFunction(enteredValues);

    function handleEnteredValues(event) {
        setEnteredValue(event.target.value);
        setDidEdit(false);
    }

    function handleInputBlur() {
        setDidEdit(true);
    }


    return {
        value: enteredValues,
        handleEnteredValues,
        handleInputBlur,
        hasError: didEdit && !valueIsValid
    };

}