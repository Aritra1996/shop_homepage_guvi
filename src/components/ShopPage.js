import { NavBarController } from '../controllers/NavBarController';
import { ShopBannerController } from '../controllers/ShopBannerController';
import { ProductsController } from '../controllers/ProductsController';

export function ShopPage(props) {
    return (
      <div className="App">
        <NavBarController cartCount={props.cartCount}/>
        <ShopBannerController/>
        <ProductsController handleAddCart={props.handleAddCart} handleRemoveCart={props.handleRemoveCart} scrollToCartButton={props.scrollToCartButton}/>
      </div>
    );
  }