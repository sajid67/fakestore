import { useState} from "react"
import './App.css';
import {useEffect } from "react"
import { Fake } from './FakeApi';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Detail } from './Details';
import { Cartjs } from "./Cart";
function App() {
  const[storedata, setStoreData]=useState([]);
  const [search, setSearch]=useState("");
  const[cartData,setCartData]=useState([]);
  function HandleCart()
  {
      setCartData(old=>{return[...old,storedata.title]})

  }
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setStoreData(json))
    },)

  return (
    <div>
    <Router>
    <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link exact to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      <Switch>
        <Route exact path="/">
          <Fake storedata={storedata} setStoreData={setStoreData} search={search} setSearch={setSearch} HandleCart={()=>HandleCart()} />
        </Route>
        <Route exact path="/Details/:id">
          <Detail storedata={storedata} setStoreData={setStoreData}/>
        </Route>
        <Route exact path="/cart">
          <Cartjs cartData={cartData}/>
        </Route>
      </Switch>

    </Router>
    </div>
  );
}

export default App;
