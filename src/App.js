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
      <div>
        <Link to = "/">Home</Link> 
        <Link to ="/contact">Contact</Link>
      </div>
      <div>
        <Outlet/>
      </div>
    </>
    )
}

export default App;
