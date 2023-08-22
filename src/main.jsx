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

// importing pages from the data entry folder
import DataEntry from './pages/Hr/data_entry/data_entry.jsx';
import Staff from './pages/Hr/data_entry/pages/staff.jsx';
import Circular from './pages/Hr/data_entry/pages/circular.jsx';
import Disciplinary from './pages/Hr/data_entry/pages/disciplinary.jsx';
import Documents from './pages/Hr/data_entry/pages/documents.jsx';
import Elevation from './pages/Hr/data_entry/pages/elevation.jsx';
import Leave from './pages/Hr/data_entry/pages/leave.jsx';
import Nss from './pages/Hr/data_entry/pages/nss.jsx';
import Papers from './pages/Hr/data_entry/pages/papers.jsx';
import Promotions from './pages/Hr/data_entry/pages/promotions.jsx';
import Reports from './pages/Hr/data_entry/pages/reports.jsx';
import StudyLeave from './pages/Hr/data_entry/pages/study_leave.jsx';
import Transfer from './pages/Hr/data_entry/pages/transfer.jsx';
import Workspace from './pages/Hr/data_entry/pages/workspace.jsx';

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
      // data entry routes go here
      {
        path: "data_entry",
        element: <DataEntry/>,
        },
        {
          path:"data_entry/staff",
          element: <Staff/>
        },
        {
          path:"data_entry/reports",
          element: <Reports/>
        },
        {
          path:"data_entry/circular",
          element: <Circular/>
        },
        {
          path:"data_entry/nss",
          element: <Nss/>
        },
        {
          path:"data_entry/papers",
          element: <Papers/>
        },
        {
          path:"data_entry/promotions",
          element: <Promotions/>
        },
        {
          path:"data_entry/study_leave",
          element: <StudyLeave/>
        },
        {
          path:"data_entry/transfer",
          element: <Transfer/>
        },
        {
          path:"data_entry/workspace",
          element: <Workspace/>
        },
        {
          path:"data_entry/leave",
          element: <Leave/>
        },
        {
          path:"data_entry/elevation",
          element: <Elevation/>
        },
        {
          path:"data_entry/documents",
          element: <Documents/>
        },
        {
          path:"data_entry/disciplinary",
          element: <Disciplinary/>
        }
        // end of data entry routes
      ,
      //data setup routes go here
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
