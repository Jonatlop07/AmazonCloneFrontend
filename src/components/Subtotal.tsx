import { useStateValue } from "./context";

import { getBasketTotal } from "../reducer";
 
const Subtotal: React.VFC = () => {
    const { state, dispatch } = useStateValue();
    const { basket } = state;

    return ( 
        <div className="subtotal">
            <p>
                Subtotal ({basket.length} items): <strong>{`$ ${getBasketTotal(basket)}`}</strong>
            </p>
            <small className="subtotal_gift">
                <input type="checkbox"/> This order contains a gift
            </small>
            <button>Proceed to checkout</button>
        </div>
     );
};
 
export default Subtotal;