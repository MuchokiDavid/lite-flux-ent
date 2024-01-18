import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

// const router=createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <Layout/>,
//       children: 
//       [
//         {
//           path: "shop",
//           element: <Shop Products={Products}/>
//         },
//         {
//           path: "/:name",
//           element: <Item products={Products}/>
//         }
//       ]
//     }
//   ]
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router}/> */}
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
