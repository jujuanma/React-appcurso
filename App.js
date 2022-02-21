import navBar from './components/navBar';
import Main from './components/Main';
import cartWidget from './components/cartWidget';
import data from './components/itemList';
import { useState } from 'react';

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <navBar countCartItems={cartItems.length}></navBar>
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <cartWidget
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></cartWidget>
      </div>
    </div>
  );
}

export default App;
