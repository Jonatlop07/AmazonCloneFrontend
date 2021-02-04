export enum Types {
    Add = 'ADD_TO_BASKET',
    Remove = 'REMOVE_FROM_BASKET'
}

const reducer = (state: any, action: { type: Types; item: any}) => {
    switch(action.type) {
        case Types.Add:
            return { 
                ...state,
                basket: [...state.basket, action.item]
            };
        case Types.Remove:
            return { state };
        default:
            return state;
    }
};

export default reducer;