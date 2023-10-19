import { useEffect, useState } from "react";
import { Product } from "./Product";



function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect (() => {
    fetch('http://localhost:5000/Products')
    .then (response => response.json())
    .then(data => setProducts (data))
    }, [])

  function addProduct() {
    setProducts (prevState => [...prevState,
      {
      id: prevState.length + 101,
      name: 'product' + (prevState.length + 1),
      price: (prevState.length * 100) + 100,
      brand: 'some brand',
      description: 'some description',
      pictureUrl: 'http://picsum.photos/200'
      }])
    }

  return (
    <>
     
      <h1>Vite + React</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add product</button>
    </>
  )

}
export default App;