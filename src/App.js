import "./App.css";
import HomePage from "./pages/home-page-component/home-page.component";
import SignInPage from "./pages/signin-page-component/signin-page.component";
import { Route } from "react-router-dom";
import CartPage from "./pages/cart-page-component/cart-page-component";
import Header from "./components/header/header.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signin" component={SignInPage} />
      <Route path="/signin/cart" component={CartPage} />
      <Route path="/hats" component={SignInPage} />
      <Route exact path="/checkout" component={CheckoutPage} />
      <Route exact path="/shop" component={ShopPage}/>
    </div>
  );
}

export default App;
