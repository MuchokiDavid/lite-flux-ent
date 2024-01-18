import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shop from './Shop/Shop';
import Item from './Shop/Items/Item'

import Products from './Shop/Data/Items.json'
const router=createBrowserRouter(
  [
    {
      path: "/",
      element: <Shop Products={Products}/>
    },
    {
      path: "/items/:name",
      element: <Item products={Products}/>
    }
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <BrowserRouter>
      <App/>
    </BrowserRouter> */}
  </React.StrictMode>
);

reportWebVitals();
