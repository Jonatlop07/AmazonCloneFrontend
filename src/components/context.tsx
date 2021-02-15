import { createContext, useReducer, useContext } from "react";
import { ProductType } from "./Product";
import reducer from "../reducer";

type InitialStateType = {
    basket: ProductType[];
}

const initialState: InitialStateType = {
    basket: [
        {
            id: "345346546",
            title: "Aaaa",
            price: 43.34,
            rating: 4,
            image: ""
        },
    ]
};

const StateContext = createContext<{
    state: InitialStateType;
    dispatch: React.Dispatch<any>
}>({
    state: initialState,
    dispatch: () => null
});

export const StateProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <StateContext.Provider value={{ state, dispatch }}>
            { children }
        </StateContext.Provider>
    );
};

export const useStateValue = () => useContext(StateContext);