import { useState } from "react";

export function usePersistedState(key, defaultValue){
    const [state, setState] = useState(() => {
        const persistantState = localStorage.getItem(key);

        if(persistantState){
            return JSON.parse(persistantState);
        }

        return defaultValue;
    });

    const setPersistedState = (value) => {
        setState(value);

        let serializedValue;

        if(typeof value === 'function'){
            serializedValue = JSON.stringify(value(state));
        }else{
            serializedValue = JSON.stringify(value);
        }

        localStorage.setItem(key, serializedValue);
    }

    return [
        state,
        setPersistedState
    ];
}