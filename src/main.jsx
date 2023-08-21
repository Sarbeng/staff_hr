import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './LoginPage.jsx'
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './error-page.jsx';
import LoginPage from './LoginPage.jsx';
import LayoutPage from './layout/LayoutPage.jsx';
import { AuthProvider, RequireAuth } from 'react-auth-kit';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import TnD from './pages/cts_tnd/TnD.jsx';
import DataEntry from './pages/Hr/data_entry/data_entry.jsx';
import DataSetup from './pages/Hr/data_setup/data_setup.jsx';
import PromotionList from './pages/Hr/promotion_list/promotion_list.jsx';
import PositionAssignment from './pages/Hr/positon_assignment/positon_assignment.jsx';
import ContractRenewalList from './pages/Hr/contract_renewal_list/contract_renewal_list.jsx';
import StaffAppraisal from './pages/Hr/staff_appraisal/staff_appraisal.jsx';
import Establishment from './pages/Hr/establishment/establishment.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <LayoutPage/>,
    children: [
      {
        path: "home",
        element: <Dashboard />
      },
      {
        path: "data_entry",
        element: <DataEntry/>,
        }
        
      ,
      {
        path: "data_setup", element: <DataSetup/>
      },
      {
        path: "promotion_list", element: <PromotionList/>
      },
      {
        path: "postion_assignment", element: <PositionAssignment/>
      },
      {
        path: "contract_renewal", element: <ContractRenewalList/>
      },
      {
        path: "staff_appraisal", element: <StaffAppraisal/>
      },
      {
        path: "establishment", element: <Establishment/>
      },
      {
        path: "tnd",
        element: <TnD />
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
