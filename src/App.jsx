import AddToCart from "./Cart";
import Header from "./Header";
import "./App.css";
import Product from "./Product";
import { useDispatch } from "react-redux";
import { clearAllItem } from "./redux/slice";

function App() {

  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <button onClick={()=>dispatch(clearAllItem())} className="add-btn clear">Clear</button>
     <Product />
     
    </>
  );
}

export default App;
