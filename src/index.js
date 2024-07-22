import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './Pages/home/home';
import Menu from './Pages/menu/menu';
import ServicesPage from './Pages/services';
import BlogPage from './Pages/blog';
import AboutPage from './Pages/about';
import Cart from './Pages/cart';
import ShopPage from './Pages/shop/shop';
import Contact from './Pages/contact';
import Login from './Pages/login';
import { Signup } from './Pages/signup';
import Store from './store';
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>,
    },
    {
      path:'/menu',
      element:<Menu/>
    },
    {
      path:'/services',
      element:<ServicesPage/>
    },
    {
      path:'/blog',
      element:<BlogPage/>
    },
    {
      path:'/about',
      element:<AboutPage/>
    },
    {
      path:'/cart',
      element:<Cart/>
    },
    {
      path:'/shop',
      element:<ShopPage/>
    },
    {
      path:'/contact',
      element:<Contact/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/signup',
      element:<Signup/>
    }
  ]
)
root.render(
  <Provider store={Store} >
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);

  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
