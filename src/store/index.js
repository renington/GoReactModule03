import { createStore } from 'redux'; // inicia o redux
import reducers from './ducks';

const store = createStore(reducers);

export default store;
