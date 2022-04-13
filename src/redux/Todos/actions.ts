// action アプリから受け取ったデータをReducersへ渡す

export const ADD_TODO_ACTION = "ADD_TODO_ACTION";
export const ADD_FAVORITES_ACTION = "ADD_FAVORITES_ACTION";

export const addTodoAction = (task:string, image:string) => {
    return {
        type: ADD_TODO_ACTION,
        payload : {
            id: Math.random(),
            favorites: 0,
            task,
            image
        }
        
    }
}

export const addFavoritesAction = (id:number, favorites:number) => {
    return {
        type: ADD_FAVORITES_ACTION,
        payload: {
            id,
            favorites
        }
    }
}
