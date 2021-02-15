import { ProductType } from "./components/Product";

export enum Types {
    Add = 'ADD_TO_BASKET',
    Remove = 'REMOVE_FROM_BASKET'
}

export const getBasketTotal = (basket: ProductType[]) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state: any, action: { type: Types; item: ProductType, id: string}) => {
    switch(action.type) {
        case Types.Add:
            return { 
                ...state,
                basket: [...state.basket, action.item]
            };
        case Types.Remove:
            let newBasket = [...state.basket];
            const index = state.basket.findIndex(
                (basketItem: ProductType) => 
                    basketItem.id === action.id
            );

            if (index >= 0) {
                newBasket.splice(index, 1);
            }

            return { ...state, basket: newBasket };
        default:
            return state;
    }
};

export default reducer;