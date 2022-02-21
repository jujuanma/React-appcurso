import React from 'react';
import ItemListContainer from './ItemListContainer';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>Producto</h2>
      <div className="row">
        {products.map((ItemListContainer) => (
          <ItemListContainer key={ItemListContainer.id} ItemListContainer={ItemListContainer} onAdd={onAdd}></ItemListContainer>
        ))}
      </div>
    </main>
  );
}
