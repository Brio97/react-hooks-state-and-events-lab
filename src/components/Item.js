import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setIncart ] = useState(false)

  const handleClick = () => {
    setIncart(!inCart)
  }

  return (
    <li className={inCart? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
