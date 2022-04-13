// reducers storeのstateを更新する役割
import {ADD_TODO_ACTION,ADD_FAVORITES_ACTION} from './actions';


const initialState = {
        posts: [{
            id: 0,
            task: "",
            favorites: 0,
            image: null,
        }]
 }

//  any型は後で修正する
 export const TodosReducer = (state = initialState, action:any) => {
     switch(action.type) {
        case ADD_TODO_ACTION:
            return {
                ...state,
                posts : [
                    ...state.posts,
                    action.payload
                ]
            }
        case ADD_FAVORITES_ACTION:
            return {
                posts: state.posts.map((post) => {
                    if (post.id !== action.payload.id) return post;
                    return {
                        ...post,
                        favorites: post.favorites +1
                    }
                })
            }
        default:
            return state;
     }
 }