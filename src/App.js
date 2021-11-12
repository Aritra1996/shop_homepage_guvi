import './App.css';
import { NavBarController } from './controllers/NavBarController';
import { ShopBannerController } from './controllers/ShopBannerController';
import { ProductsController } from './controllers/ProductsController';

function App() {
  return (
    <div className="App">
      <NavBarController/>
      <ShopBannerController/>
      <ProductsController/>
    </div>
  );
}

export default App;
