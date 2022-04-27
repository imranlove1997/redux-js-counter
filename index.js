function createStore(reducer) {
    let state = 0;
    let listeners = [];
    const getState = () => state;
    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter((l) => l !== listener);
        };
    };
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach((listener) => listener());
    };
    return {
        getState,
        subscribe,
        dispatch,
    };
}


let store = createStore(reducer);

let counter = store.getState();

let h1 = document.querySelector('h1');

let increment = document.querySelector('.increment');
let decrement = document.querySelector('.decrement');
let reset = document.querySelector('.reset');

let incrementByFive = document.querySelector('.step-1');
let incrementByTen = document.querySelector('.step-2');
let incrementByFif = document.querySelector('.step-3');

let incrementByFifteen = document.querySelector('.value-1');
let incrementByHun = document.querySelector('.value-2');
let incrementByTwen = document.querySelector('.value-3');

h1.innerText = counter;

incrementByFive.addEventListener('click', () => {
    store.dispatch({ type: 'incrementByFive', step: 5 });
})
incrementByTen.addEventListener('click', () => {
    store.dispatch({ type: 'incrementByTen', step: 10 });
})
incrementByFif.addEventListener('click', () => {
    store.dispatch({ type: 'incrementByFif', step: 15 });
})

incrementByFifteen.addEventListener('click', () => {
    store.dispatch({ type: 'incrementByFifteen', step: 15 });
})
incrementByHun.addEventListener('click', () => {
    store.dispatch({ type: 'incrementByHun', step: 100 });
})
incrementByTwen.addEventListener('click', () => {
    store.dispatch({ type: 'incrementByTwen', step: 200 });
})

increment.addEventListener('click', () => {
    store.dispatch({ type: 'increment' });
});
decrement.addEventListener('click', () => {
    store.dispatch({ type: 'decrement' });
});
reset.addEventListener('click', () => {
  store.dispatch({ type: 'reset' });  
});

store.subscribe(() => {
    counter = store.getState();
    h1.innerText = counter;
})

function reducer(state = 0, action) {
    switch (action.type) {
        case 'incrementByFive':
            return state + (action.step);
        case 'incrementByTen':
            return state + (action.step);
        case 'incrementByFif':
            return state + (action.step);
        case 'incrementByFifteen':
            return state + (action.step);
        case 'incrementByHun':
            return state + (action.step);
        case 'incrementByTwen':
            return state + (action.step);
        case 'increment':
            return state + (action.step || 1);
        case 'decrement':
            return state - (action.step || 1);
        case 'reset':
            return 0;
            default:
                return state;
    }
}