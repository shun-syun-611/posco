import { combineReducers, createStore } from "redux";
import { TodosReducer } from './Todos/reducers';

const RootReducer = combineReducers({
    todos: TodosReducer,
    // ここにほかのReducerなどが追加されていく
})

export type RootState = ReturnType<typeof RootReducer>

const store = createStore(RootReducer);


export default store;