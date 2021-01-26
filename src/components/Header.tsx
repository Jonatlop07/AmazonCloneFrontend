export interface HeaderProps {
    
}
 
const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    return ( 
        <nav className="header">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            
        </nav>
     );
}
 
export default Header;