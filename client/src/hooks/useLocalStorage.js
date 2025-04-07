

export const useLocalStorage = (key, initialState) => {
    const [state, setState] = useState (() => {
        const persistedState = localStorage.getItem(key);

        if(persistedState) {
            const persistedStateData = JSON.parse(persistedState);

            return persistedStateData;

        }else{

            return initialState;
        }
    });

    const setLocalStorageState = (value) => {
        setState(value);

        localStorage.setItem(key, JSON.stringify(value));

    };

    return[state,
        setLocalStorageState,
    ];
};