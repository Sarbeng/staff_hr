import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './LoginPage.jsx'
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './error-page.jsx';
import LoginPage from './LoginPage.jsx';
import LayoutPage from './layout/LayoutPage.jsx';
import { AuthProvider } from 'react-auth-kit';
import HR from './pages/Hr/HR'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: "",
      }
    ]
  },
  {
    path: "/dashboard",
    element: <LayoutPage />,
    children: [
      {
        path:"hr",
        element:<HR/>
      }
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider
      authType={'cookie'}
      authName={'_auth'}
      cookieDomain={window.location.hostname}
      //use true when using https
      cookieSecure={false}
    >
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
