import "./App.css";
//import KeepHeader from "./components/recordKeepng-project/KeepHeader";
//import RecordKeep from "./components/recordKeepng-project/RecordKeep";
//import Example from "./components/useEffectExample/UseEffect";
//import Counter from "./components/counterApp/Counter";
//import Header from "./components/moiveList/Header";
//import Moive from "./components/moiveList/Moive";
//import moives from "./components/moiveList/moives.json";
//import Header from "./Header";
//import ParentComponent from "./components/props/ParentComponent";
//import ApiUseEffect from "./components/useEffectExample/ApiUseEffect";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/routerDom/Home";
import Contact from "./components/routerDom/Contact";
import About from "./components/routerDom/About";
import Navbar from "./components/routerDom/Navbar";
import NoMatch from "./components/routerDom/NoMatch";
import PlaceOrder from "./components/routerDom/PlaceOrder";
import Insta from "./components/routerDom/nestedRoutes/Insta";
import Mail from "./components/routerDom/nestedRoutes/Mail";
import InstaUser from "./components/routerDom/nestedRoutes/InstaUser";
import ProductList from "./components/routerDom/dynamicRoutes/ProductList";
import ProductDetails from "./components/routerDom/dynamicRoutes/ProductDetails";

const App = () => {
  //const name = "Dhiraj";
  return (
    <Router>
      <Navbar/>
      <div className="App">
        {/* <h2>React with w3mantra</h2>
      <p>{name}</p>
      <Header/> */}

        {/* <ParentComponent/> */}

        {/* <Header />
      {moives.map((element, index) => {
        return (
          <>
            <Moive
              key={index}
              title={element.Title}
              year={element.Year}
              img={element.Poster}
            />
          </>
        );
      })} */}

        {/* <Counter/> */}

        {/* <KeepHeader />
      <RecordKeep /> */}

        {/* <Example/> */}
        {/* <ApiUseEffect/> */}
      </div>

      {/* routing in reactjs */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* nested Routes */}
        <Route path="/contact" element={<Contact />}>
          {/* route inside route */}
            <Route path="insta" element={<Insta/>}>
                <Route path="user" element={<InstaUser/>}/>
            </Route>
            {/* agar ham contact page me jayenge toh by default mail page open hoga */}
            <Route index element = {<Mail/>}/>
            <Route index path="mail" element = {<Mail/>}/>
        </Route>

        <Route path="/order-place" element={<PlaceOrder/>} />
        <Route path="/products" element={<ProductList/>} />
        <Route path="/products/:id" element={<ProductDetails/>} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
};
export default App;
