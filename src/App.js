import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home'
import MenShirts from './components/Men/Men_shirts'
import ProductPage from './components/Men/Product_page';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path = "/">
            <Login />
          </Route>
          <Route path = "/home">
            <Home />
          </Route>
          <Route path = "/men-shirts">
           <MenShirts />
          </Route>
          <Route path = "/product-detail">
            <ProductPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
