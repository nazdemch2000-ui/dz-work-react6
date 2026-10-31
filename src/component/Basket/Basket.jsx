import {  useMemo } from "react";

function Basket({itemList,onChangeQty,onDelete}){
  const total = useMemo(() => {
    console.log("перерахунок суми");  
    return itemList.reduce((sum, item) => sum + item.prise * item.quantity, 0);
  }, [itemList]); 
  
  return (
    <div className="basket">
      <h2>Кошик</h2>
      <ul>
        {itemList.map((item) => (
          <li key={item.id}>{item.name} — {item.prise} грн (×{item.quantity})<button onClick = {()=>(onChangeQty(item.id, -1))}>-</button><button  onClick = {()=>(onChangeQty(item.id, +1))}>+</button><button onClick={()=>(onDelete(item.id))}>Del</button></li>
        ))}
      </ul>
      <h3>Загальна вартість: {total} грн</h3>
    </div>
  );
}
export default Basket;