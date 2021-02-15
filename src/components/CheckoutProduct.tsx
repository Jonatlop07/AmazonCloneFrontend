 import { ProductType } from "./Product";
 import { useStateValue } from "./context";

const CheckoutProduct: React.VFC<ProductType> = ({ id, title, image, price, rating }) => {
    const { dispatch } = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        });
    }; 

    return ( 
        <article className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    { Array(rating)
                        .fill(0)
                        .map((_) => (
                            <p>⭐</p>
                        )) 
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </article>
     );
}
 
export default CheckoutProduct;