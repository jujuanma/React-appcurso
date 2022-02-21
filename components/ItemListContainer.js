import React from 'react';

export default function ItemListContainer(props) {
  const { ItemListContainer, onAdd } = props;
  return (
    <div>
      <img className="small" src={ItemListContainer.image} alt={ItemListContainer.name} />
      <h3>{ItemListContainer.name}</h3>
      <div>${ItemListContainer.price}</div>
      <div>
        <button onClick={() => onAdd(ItemListContainer)}>Add To Cart</button>
      </div>
    </div>
  );
}
