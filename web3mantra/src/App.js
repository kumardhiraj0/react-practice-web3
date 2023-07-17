// import "./App.css";
// import {ClassCounter} from "./components/class-component/ClassCounter";
// import ParentOpti from "./components/react-optimization/ParentOpti";

// const App = () => {

//   return (
//     <>
       
//           <ClassCounter/>
//           <ParentOpti/>
//     </>
//   )
// };
// export default App;
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MenuBarP from './components/protectedRoute/menubar/MenubarP'
import HomeP from './components/protectedRoute/HomeP'
import DashboardP from './components/protectedRoute/DashboardP'
import ProductsP from './components/protectedRoute/ProductP'
import Protected from './components/protectedRoute/Protected'
export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(null)
  const signin = () => {
    setIsSignedIn(true)
  }
  const signout = () => {
    setIsSignedIn(false)
  }
  return (
    <div className="container mt-5">
      <h2 className="mb-5 text-center">React Protected Routes Example</h2>
      <BrowserRouter>
        <MenuBarP/>
        <Routes>
          <Route path="/" element={<HomeP />} />
          <Route
            path="/dashboard"
            element={
              <Protected isSignedIn={isSignedIn}>
                <DashboardP />
              </Protected>
            }
          />
          <Route
            path="/products"
            element={
              <Protected isSignedIn={isSignedIn}>
                <ProductsP />
              </Protected>
            }
          />
        </Routes>
        {isSignedIn ? (
          <div className="d-grid mt-5">
            <button className="btn-danger" onClick={signout}>
              Sign out
            </button>
          </div>
        ) : (
          <div className="d-grid mt-5">
            <button className="btn-dark" onClick={signin}>
              Sign in
            </button>
          </div>
        )}
      </BrowserRouter>
    </div>
  )
}
