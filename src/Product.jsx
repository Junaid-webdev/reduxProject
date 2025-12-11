import {useDispatch, useSelector} from "react-redux";
import AddToCart from "./Cart";
import { addItem, removeItem } from "./redux/slice";
import { useEffect } from "react";
import { fetchProduct } from "./redux/ProductSlice";
const Product = () => {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchProduct())
  },[])

  const selector = useSelector((state)=>state.products.items)
  console.log(selector);
  

  return (
    <div className="card">
      <img
        src="https://img.lazcdn.com/g/ff/kf/Sdf1801aebdaa4349a3c108c8f00c1ded4.jpg_720x720q80.jpg"
        className="card-img"
        alt="product"
      />

      <div className="card-content">
        <h2>Smart Watch</h2>
        <p>High quality smartwatch with HD display.</p>

        <button onClick={()=>dispatch(addItem(1))} className="add-btn">Add to Cart</button>
        <button onClick={()=>dispatch(removeItem(1))} className="add-btn remove-btn">Remove Form Cart</button>
      </div>
    </div>
  );
};

export default Product;
