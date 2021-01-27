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
                    className="mainLogo" 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                    alt=""/>
            </Link>
            <div className="header_search">
                <input type="text" className="searchInput"/>
                <SearchIcon className="searchIcon"/>
            </div>
            <div className="navBar">
                <Link className="headerLink" to="/login">
                    <div className="headerLink_option">
                        <span>Hello Jonathan</span>
                        <span>Sign in</span>
                    </div>
                </Link>
                <Link className="headerLink" to="">
                    <div className="headerLink_option">
                        <span>Return</span>
                        <span>& Orders</span>
                    </div>
                </Link>
                <Link className="headerLink" to="">
                    <div className="headerLink_option">
                        <span>Your</span>
                        <span>Prime</span>
                    </div>
                </Link>
                <Link className="headerLink" to="/checkout">
                    <div className="headerLink_optionBasket">
                        <ShoppingBasketIcon />
                        <span>0</span>
                    </div>
                </Link>
            </div>
        </nav>
     );
}
 
export default Header;