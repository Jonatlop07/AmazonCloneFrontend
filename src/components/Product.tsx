interface ProductProps {
    id: string,
    title: string,
    price: number,
    rating: number,
    image: string
}

const Product: React.FC<ProductProps>  = ({ id, title, price, rating, image }: ProductProps) => {
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
            <button>Add to Basket</button>
        </article>
    );
}

export default Product;