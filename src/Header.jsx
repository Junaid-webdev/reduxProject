import AddToCart from "./Cart";

const Header = () => {
  return (
    <div>
    <header className="header">
      <div className="logo">MyStore</div>
        
      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>

       <AddToCart />
    </header>
     </div>
  );
};

export default Header;
