import ProductList from "./components/ProductList/ProductList.jsx"
const REACT_APP_API_URL = import.meta.env.VITE_BASE_URL;

function App() {


  return (
    <div>
      <ProductList/>
    </div>
  )
}

export default App
