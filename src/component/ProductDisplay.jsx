import "./ProductDisplay.css";
import { useState } from "react";

function ProductDisplay({ onAdd }) {
  const [onlyExpensive, setOnlyExpensive] = useState(false);

  const producrList = [
    { id: 1, name: "Beef", prise: 110, quantity: 1 },
    { id: 2, name: "Chicken", prise: 70, quantity: 1 },
    { id: 3, name: "Pork", prise: 90, quantity: 1 },
    { id: 4, name: "Fish", prise: 120, quantity: 1 },
    { id: 5, name: "Milk", prise: 35, quantity: 1 },
    { id: 6, name: "Bread", prise: 25, quantity: 1 },
  ];

  const visibleProducts = onlyExpensive
    ? producrList.filter((item) => item.prise > 100)
    : producrList;

  return (
    <div className="products-wrap">
      <label className="products-filter">
        <input
          type="checkbox"
          checked={onlyExpensive}
          onChange={(e) => setOnlyExpensive(e.target.checked)}
        />
        Показати тільки товари дорожче 100
      </label>

      <div className="products">
        {visibleProducts.map((item) => (
          <div className="product-card" key={item.id}>
            <h3 className="product-name">{item.name}</h3>
            <p className="product-prise">{item.prise} грн</p>
            <button className="product-button" onClick={() => onAdd(item)}>
              Додати до кошика
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDisplay;
