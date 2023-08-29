import React from 'react'
import ReactDOM from 'react-dom/client'
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

// importing pages from the data setup folder
import DataSetup from './pages/Hr/data_setup/data_setup.jsx';
import Units from './pages/Hr/data_setup/pages/units.jsx';
import Designation from './pages/Hr/data_setup/pages/designation.jsx';
import Dob from './pages/Hr/data_setup/pages/dob.jsx';
import Education from './pages/Hr/data_setup/pages/education.jsx';
import Grades from './pages/Hr/data_setup/pages/grades.jsx';
import Inbox from './pages/Hr/data_setup/pages/inbox.jsx';
import Location from './pages/Hr/data_setup/pages/location.jsx';
import Logs from './pages/Hr/data_setup/pages/logs.jsx';
import Photos from './pages/Hr/data_setup/pages/photos.jsx';
import Position from './pages/Hr/data_setup/pages/position.jsx';
import Roles from './pages/Hr/data_setup/pages/roles.jsx';

import PromotionList from './pages/Hr/promotion_list/promotion_list.jsx';
import PositionAssignment from './pages/Hr/positon_assignment/positon_assignment.jsx';
import ContractRenewalList from './pages/Hr/contract_renewal_list/contract_renewal_list.jsx';
import StaffAppraisal from './pages/Hr/staff_appraisal/staff_appraisal.jsx';
import Establishment from './pages/Hr/establishment/establishment.jsx';

//normal staff portal pages
import HomePage from "./pages/staff/home/HomePage.jsx"
import PersonalDetails from "./pages/staff/personal_details/PersonalDetails.jsx"
import StaffLeavePage from "./pages/staff/leave/LeavePage.jsx"
import Promotion from "./pages/staff/promotion/Promotion.jsx"
// staff promotion form pages
import PromotionPage1 from "./pages/staff/promotion/pages/PromotionPage1.jsx"
import PromotionPage2 from "./pages/staff/promotion/pages/PromotionPage2.jsx"
import PromotionPage3 from "./pages/staff/promotion/pages/PromotionPage3.jsx"
import PromotionPage4 from "./pages/staff/promotion/pages/PromotionPage4.jsx"
import PromotionPage5 from "./pages/staff/promotion/pages/PromotionPage5.jsx"
import PromotionDocUpload from "./pages/staff/promotion/pages/PromotionDocUpload.jsx"

// staff appraisal pages
import Appraisal from "./pages/staff/appraisal/Appraisal.jsx"
import AppraisalPage1 from "./pages/staff/appraisal/pages/AppraisalPage1.jsx"
import AppraisalPage2 from "./pages/staff/appraisal/pages/AppraisalPage2.jsx"
import AppraisalPage3 from "./pages/staff/appraisal/pages/AppraisalPage3.jsx"

//hod appraisal pages
import AppraisalFormBPage1 from "./pages/hod/appraisal/AppraisalFormBPage1.jsx"
import AppraisalFormBPage2 from "./pages/hod/appraisal/AppraisalFormBPage2.jsx"
import AppraisalFormBPage3 from "./pages/hod/appraisal/AppraisalFormBPage3.jsx"
import AppraisalFormBPage4 from "./pages/hod/appraisal/AppraisalFormBPage4.jsx"
import AppraisalFormBPage5 from "./pages/hod/appraisal/AppraisalFormBPage5.jsx"
import AppraisalFormBPage6 from "./pages/hod/appraisal/AppraisalFormBPage6.jsx"
import AppraisalFormBPage7 from "./pages/hod/appraisal/AppraisalFormBPage7.jsx"
import AppraisalFormBPage8 from "./pages/hod/appraisal/AppraisalFormBPage8.jsx"
import AppraisalFormBPage9 from "./pages/hod/appraisal/AppraisalFormBPage9.jsx"
import AppraisalFormBPage10 from "./pages/hod/appraisal/AppraisalFormBPage10.jsx"
import AppraisalFormBPage11 from "./pages/hod/appraisal/AppraisalFormBPage11.jsx"
import AppraisalFormBPage12 from "./pages/hod/appraisal/AppraisalFormBPage12.jsx"
import AppraisalFormBPage13 from "./pages/hod/appraisal/AppraisalFormBPage13.jsx"

//staff procurement pages
import Procurement from './pages/hod/procurement/Procurement.jsx';
import ProcurementRequest from './pages/hod/procurement/components/ProcurementRequest.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/hr",
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
        path: "data_setup/units", element: <Units/>
      },
      {
        path: "data_setup/roles", element: <Roles/>
      },
      {
        path: "data_setup/position", element: <Position/>
      },
      {
        path: "data_setup/photos", element: <Photos/>
      },
      {
        path: "data_setup/logs", element: <Logs/>
      },
      {
        path: "data_setup/location", element: <Location/>
      },
      {
        path: "data_setup/grades", element: <Grades/>
      },
      {
        path: "data_setup/education", element: <Education/>
      },
      {
        path: "data_setup/dob", element: <Dob/>
      },
      {
        path: "data_setup/designations", element: <Designation/>
      },
      {
        path: "data_setup/inbox", element: <Inbox/>
      },
      // end of data setup routes
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
      

     
      
    ],
    
  },
  //start of tnd pages
  {
    path: "tnd",
    element: <LayoutPage/>,
    children: [
      {
        path:"home",
        element:<TnD/>
      }
    ]
  },
  //end of tnd pages
  // start of reguar staff protal pages
  {
    path:"/dashboard",
    element:<LayoutPage/>,
    children: [
      {
        path:'home',
        element:<HomePage/>
      },
      {
        path:'personalDetails',
        element:<PersonalDetails/>
      },
      {
        path:'leave',
        element:<StaffLeavePage/>
      },
      //start promotion pages
      {
        path:'promotion',
        element:<Promotion />
      },
      {
        path:'promotion',
        element:<Promotion />
      },
      {
        path:'promotionpage1',
        element:<PromotionPage1 />
      },
      {
        path:'promotionpage2',
        element:<PromotionPage2 />
      },
      {
        path:'promotionpage3',
        element:<PromotionPage3 />
      },
      {
        path:'promotionpage4',
        element:<PromotionPage4 />
      },
      {
        path:'promotionpage5',
        element:<PromotionPage5 />
      },
      {
        path:'promotionDocUpload',
        element:<PromotionDocUpload />
      },
       //end promotion pages
        //start appraisal pages
        {
          path:'appraisal',
          element:<Appraisal />
        },
        {
          path:'appraisalPage1',
          element:<AppraisalPage1 />
        },
        {
          path:'appraisalPage2',
          element:<AppraisalPage2/>
        },
        {
          path:'appraisalPage3',
          element:<AppraisalPage3 />
        },
        //start of hod_appraisal pages
        {
          path:'hod_appraisalPage1',
          element:<AppraisalFormBPage1 />
        },
        {
          path:'hod_appraisalPage2',
          element:<AppraisalFormBPage2 />
        },
        {
          path:'hod_appraisalPage3',
          element:<AppraisalFormBPage3 />
        },
        {
          path:'hod_appraisalPage4',
          element:<AppraisalFormBPage4 />
        },
        {
          path:'hod_appraisalPage5',
          element:<AppraisalFormBPage5 />
        },
        {
          path:'hod_appraisalPage6',
          element:<AppraisalFormBPage6 />
        },
        {
          path:'hod_appraisalPage7',
          element:<AppraisalFormBPage7 />
        },
        {
          path:'hod_appraisalPage8',
          element:<AppraisalFormBPage8 />
        },
        {
          path:'hod_appraisalPage9',
          element:<AppraisalFormBPage9 />
        },
        {
          path:'hod_appraisalPage10',
          element:<AppraisalFormBPage10 />
        },
        {
          path:'hod_appraisalPage11',
          element:<AppraisalFormBPage11 />
        },
        {
          path:'hod_appraisalPage12',
          element:<AppraisalFormBPage12 />
        },
        {
          path:'hod_appraisalPage13',
          element:<AppraisalFormBPage13 />
        },
        //end of hod_appraisal pages
        //start of procurement
        {
          path:'procurement',
          element:<Procurement />
        },
        {
          path:'procurementRequest',
          element:<ProcurementRequest />
        },
    ]
  },
   // end of reguar staff protal pages
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
