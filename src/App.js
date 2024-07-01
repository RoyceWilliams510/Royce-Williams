import './App.css';
import Contact from './pages/Contact'
import Home from './pages/Home'

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  RouterProvider
} from "react-router-dom";
// Can you style the Nav Bar I want my name 
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element = {<Root/>}>
        <Route index element = {<Home/>}/>
        <Route path = "/contact" element = {<Contact/>}/>

      </Route>
    )
  )
  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  );
}

const Root = ()=>{
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand"><Link className='navbar-brand-link' to = '/'>Royce Williams</Link></div>
        <div className="navbar-links">
          <Link to="/Resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
    )
}

export default App;
