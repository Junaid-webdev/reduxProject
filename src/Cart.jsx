import { useSelector } from "react-redux";

const AddToCart = () => {

  const selector = useSelector((state)=>state.cart.value)

  
  return (
     <div className="cart-box">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
          className="cart-icon"
        />
        <span className="badge">{selector}</span>
      </div>
  );
};

export default AddToCart;
