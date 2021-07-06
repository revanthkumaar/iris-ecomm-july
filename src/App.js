import "./App.css";
import HomePage from "./pages/home-page-component/home-page.component";
import SignInPage from "./pages/signin-page-component/signin-page.component";
import { Route } from "react-router-dom";
import CartPage from "./pages/cart-page-component/cart-page-component";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signin" component={SignInPage} />
      <Route path="/signin/cart" component={CartPage} />
    </div>
  );
}

export default App;
