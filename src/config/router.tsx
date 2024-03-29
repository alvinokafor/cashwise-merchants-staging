import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Home,ProductDashboard,EarningDashboard,DraftTableDashboard,ReleasedTableDashboard } from "@/pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/product/dashboard/" element={<ProductDashboard />} />
      <Route path="/income/earning/" element={<EarningDashboard />} />
      <Route path="/product/draft/" element={<DraftTableDashboard />} />
      <Route path="/product/released/" element={<ReleasedTableDashboard />} />

      {/* 404 Page */}
      <Route path="*" element={<h1>Not Found</h1>} />
    </Route>
  )
);

export default router;
