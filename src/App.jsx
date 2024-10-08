import './App.css';
import { useFetch } from './useFetch';

function App() {
  const { data, loading, error } = useFetch('https://fakestoreapi.com/products');

  return (
    <>
      <div>
        <h1>hola</h1>
        {loading && <li>Loading...</li>}
        {error && <li>Error: {error.message}</li>} {/* Mostrar error si existe */}
        <ul>
          {data?.map((product) => (
            <li key={product.id}>name: {product.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;