import { useStateValue } from "./context";

export type ProductType = {
    id: string;
    title: string;
    price: number;
    rating: number;
    image: string;
}

const Product: React.FC<ProductType>  = ({ id, title, price, rating, image }: ProductType) => {
    const {state, dispatch} = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: { id, title, price, rating, image }
        });
    };

    return (
        <article className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    { Array(rating)
                        .fill(0)
                        .map((_) => (
                            <p>⭐</p>
                        )) }
                </div>
            </div>
            
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to Basket</button>
        </article>
    );
}

export default Product;