import ProductDisplay from './component/ProductDisplay'
import Basket from './component/Basket/Basket';
 import { useState } from "react";

function App() {

  const [basket, setBasket] = useState([]);

  function addToBasket(product) {
    setBasket((prev) => [...prev, product]);  
  }
  function changeQty(id, delta) {
  setBasket((prev) =>
    prev.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) } 
        : item
    )
  );
}
function deleteItem(id) {
  setBasket((prev) => prev.filter((item) => item.id !== id));
}


  return (
    <div>
      <ProductDisplay onAdd={addToBasket} />
      <Basket itemList={basket} onChangeQty ={changeQty} onDelete = {deleteItem} />
    </div>
  );
}


export default App
