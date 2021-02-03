import { Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

interface HeaderProps {
    
}
 
const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    return ( 
        <nav className="header">
            <Link to="/">
                <img 
                    className="header__mainLogo" 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                    alt=""/>
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__navBar">
                <Link className="header__link" to="/login">
                    <div className="header__linkOption">
                        <span>Hello Jonathan</span>
                        <span>Sign in</span>
                    </div>
                </Link>
                <Link className="header__link" to="">
                    <div className="header__linkOption">
                        <span>Return</span>
                        <span>& Orders</span>
                    </div>
                </Link>
                <Link className="header__link" to="">
                    <div className="header__linkOption">
                        <span>Your</span>
                        <span>Prime</span>
                    </div>
                </Link>
                <Link className="header__link" to="/checkout">
                    <div className="header__basket">
                        <ShoppingBasketIcon />
                        <span>0</span>
                    </div>
                </Link>
            </div>
        </nav>
     );
}
 
export default Header;