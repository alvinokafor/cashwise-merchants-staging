import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate // Add this import statement
} from "react-router-dom";

import { Home, ProductDashboard, EarningDashboard, DraftTableDashboard, ReleasedTableDashboard, SignUpPage, OtpPage, NewProduct, ResetPage, LoginPage,StoreProduct,StoreDetails } from "@/pages";

// const isAuthenticated = () => {
//   // Implement your logic to check if the user is authenticated
//   // For example, you can check if there is a token in localStorage or sessionStorage
//   return localStorage.getItem("token") !== null;
// };

// // Define a higher-order component (HOC) to protect routes that require authentication
// const ProtectedRoute = ({ element, path }) => {
//   // If the user is authenticated, render the requested element
//   // If not, redirect them to the login page
//   return isAuthenticated() ? (
//     <Route path={path} element={element} />
//   ) : (
//     <Navigate to="/auth/login" replace />
//   );
// };

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/product/dashboard/" element={<ProductDashboard />} />
      <Route path="/income/earning/" element={<EarningDashboard />} />
      <Route path="/product/draft/" element={<DraftTableDashboard />} />
      <Route path="/product/released/" element={<ReleasedTableDashboard />} />
      <Route path="/auth/signup/" element={<SignUpPage />} />
      <Route path="/auth/login/" element={<LoginPage />} />
      <Route path="/auth/otp/" element={<OtpPage />} />
      <Route path="/auth/reset/" element={<ResetPage />} />
      <Route path="/new/product/" element={<NewProduct />} />
      <Route path="/all/store/" element={<StoreProduct />} />
      <Route path="/store/detail/:id" element={<StoreDetails />} />


      {/* <Route path="/auth/signup/" element={<SignUpPage />} />
      <Route path="/auth/login/" element={<LoginPage />} />
      <Route path="/auth/otp/" element={<OtpPage />} />
      <Route path="/auth/reset/" element={<ResetPage />} />

      
      <ProtectedRoute path="/" element={<Home />} />
      <ProtectedRoute path="/product/dashboard" element={<ProductDashboard />} />
      <ProtectedRoute path="/income/earning" element={<EarningDashboard />} />
      <ProtectedRoute path="/product/draft" element={<DraftTableDashboard />} />
      <ProtectedRoute path="/product/released" element={<ReleasedTableDashboard />} /> */}


      {/* 404 Page */}
      <Route path="*" element={<h1>Not Found</h1>} />
    </Route>
  )
);

export default router;
