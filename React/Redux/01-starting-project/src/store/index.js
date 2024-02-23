import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';


const store = configureStore({
    reducer: {
        auth: authReducer,
        counter: counterReducer
    }
});

export default store;





// import { createSlice, configureStore } from '@reduxjs/toolkit';

// const initialAuthState = {
//     isAuthenticated: false
// };

// const authSlice = createSlice({
//     name: 'auth',
//     initialState: initialAuthState,
//     reducers: {
//         login(state) {
//             state.isAuthenticated = true;
//         },
//         logout(state) {
//             state.isAuthenticated = false;
//         }
//     }
// });



// const store = configureStore({
//     reducer: authSlice.reducer
// });


// export const authActions = authSlice.actions;

// export default store;

/*
const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        };
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        };
    }

    if (action.type === 'increase') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        };
    }

    if (action.type === 'toggle') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        };
    }

    return state;
};


const store = createStore(counterReducer);

export default store;
*/


/*
const counterSubscriber = () => {
    const latestState = store.getState();

    console.log(latestState);
}

store.subscribe(counterSubscriber);

store.dispatch({
    type: 'increment'
});

store.dispatch({
    type: 'decrement'
});*/