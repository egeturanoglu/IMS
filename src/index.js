import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,
RouterProvider, Route,} from 'react-router-dom';
import Home from './Pages/Home';
import Logout from './Pages/Logout';
import UserSettings from './Pages/UserSettings';
import Profile from './Pages/Profile';  
import Companies from './Pages/Companies'; 


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'home',
    element: <Home />,
  },
  {
    path: 'log_out',
    element: <Logout />,
  },
  {
    path: 'user_settings',
    element: <UserSettings />,
  },
  {
    path: 'profile',
    element: <Profile />,
  },
  {
    path: 'companies',
    element: <Companies />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router} />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
